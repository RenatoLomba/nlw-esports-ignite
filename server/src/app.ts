import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import cors from 'cors'
import express from 'express'

import { prisma } from './database/prisma'
import { CreateAdDto } from './dtos/create-ad.dto'
import {
  convertHourStringToMinutes,
  convertMinutesToHourString,
} from './utils/hours-conversion'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/healthcheck', (_, res) => {
  return res.send('Server is healthy!')
})

// GAMES
app.get('/games', async (_, res) => {
  const games = await prisma.game.findMany({
    take: 100,
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  })

  return res.json(games)
})

// ADS
app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const createAdDto = plainToInstance(CreateAdDto, req.body)

  try {
    await validateOrReject(createAdDto)
  } catch (err) {
    return res.status(400).json(err)
  }

  const game = await prisma.game.findUnique({
    where: { id: gameId },
    select: { id: true },
  })

  if (!game) {
    return res.status(400).json({ message: 'Jogo enviado não existente' })
  }

  try {
    const newAd = await prisma.ad.create({
      data: {
        ...createAdDto,
        gameId,
        hourStart: convertHourStringToMinutes(createAdDto.hourStart),
        hourEnd: convertHourStringToMinutes(createAdDto.hourEnd),
      },
    })

    return res.status(201).json(newAd)
  } catch (err) {
    return res.status(500).json({
      message: 'Erro durante criação do anúncio',
    })
  }
})

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    where: {
      gameId,
    },
    select: {
      id: true,
      name: true,
      hourEnd: true,
      hourStart: true,
      useVoiceChannel: true,
      weekDays: true,
      yearsPlaying: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 100,
  })

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      }
    }),
  )
})

app.get('/ads/:id/discord', async (req, res) => {
  const { id } = req.params

  const ad = await prisma.ad.findUnique({
    where: { id },
    select: {
      discord: true,
    },
  })

  if (!ad) {
    return res.status(400).json({
      message: 'Anúncio não encontrado',
    })
  }

  return res.send(ad.discord)
})

export { app }
