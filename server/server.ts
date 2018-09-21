import express, {Request, Response} from 'express'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('dist'))

app.get('*', (req: Request, res: Response) => {
  res.render('index', {
    title: "this is title",
    ogtitle: "poop",
    message: req.path,
    __INITIAL_STATE__: {
      name: 'Jon',
      city: 'A\'dam'
    }
  })
})

app.listen(3000, (err: object) => {
  if (err) {
    console.log('oops express crashed')
  }
  console.log('listening on port 3000')
})