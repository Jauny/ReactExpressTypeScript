import express, {Request, Response} from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('bonjour ca va? lol ca marche putain')
})

app.listen(3000, (err: object) => {
  if (err) {
    console.log('oops express crashed')
  }
  console.log('listening on port 3000')
})