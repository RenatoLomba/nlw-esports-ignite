import express from 'express'

const app = express()

app.get('/healthcheck', (_, res) => {
  return res.send('Server is healthy!')
})

// GAMES
app.get('/games', (_, res) => {
  return res.json([])
})

// ADS
app.post('/ads', (req, res) => {
  return res.status(201).json({ id: 1, name: 'Novo anúncio' })
})

app.get('/games/:id/ads', (req, res) => {
  const gameId = req.params.id

  return res.json([
    {
      id: '1',
      name: 'Anúncio 1',
      gameId,
    },
    {
      id: '2',
      name: 'Anúncio 2',
      gameId,
    },
    {
      id: '3',
      name: 'Anúncio 3',
      gameId,
    },
  ])
})

app.get('/ads/:id/discord', (req, res) => {
  const { id } = req.params

  return res.json({
    id,
    discord: 'https://discord.com/renatolomba',
  })
})

export { app }
