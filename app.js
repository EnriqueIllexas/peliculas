import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import cors from 'cors'

const verOrigenes =[
    'http://localhost:1200/movies',
    'http://localhost:1200',
    'http://127.0.0.1:5500/web/index.html',
    'http://127.0.0.1:5500',
    'http://127.0.0.1:5500/'
]

const app = express()
app.use(json())
app.use(cors({origin : verOrigenes}))
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1200

app.listen(PORT, () =>{
    console.log(`server listenig on port http://localhost:${PORT}`)
})
