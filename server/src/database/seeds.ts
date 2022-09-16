import { prisma } from './prisma'

export async function createGames() {
  const gamesCount = await prisma.game.count()

  if (gamesCount > 0) {
    return
  }

  await prisma.game.createMany({
    data: [
      {
        name: 'League of Legends',
        bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
      },
      {
        name: 'GTA V',
        bannerUrl:
          'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
      },
      {
        name: 'Counter Strike',
        bannerUrl:
          'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg',
      },
      {
        name: 'Fortnite',
        bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
      },
      {
        name: 'Genshin Impact',
        bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/513181-285x380.jpg',
      },
      {
        name: 'Valorant',
        bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
      },
    ],
  })
}

createGames().then(() => process.exit())
