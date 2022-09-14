import express from 'express'

const app = express()

app.get('/healthcheck', (_, res) => {
  return res.send('Server is healthy!')
})

app.get('/ads', (_, res) => {
  return res.json([
    {
      id: 1,
      name: 'Anúncio 1',
    },
    {
      id: 2,
      name: 'Anúncio 2',
    },
    {
      id: 3,
      name: 'Anúncio 3',
    },
  ])
})

app.listen(5000, () => {
  console.log('Server is running on port 5000...')
})
