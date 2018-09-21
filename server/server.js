import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('bonjour')
})

app.listen(3000)