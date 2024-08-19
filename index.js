import express from 'express'
import cors from 'cors'
import useRouter from './routes/useRouter.js'
import fruitRouter from './routes/fruitRouter.js'

let port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))
app.use(express.static('public'))
app.use('/user',useRouter)
app.use('/fruit',fruitRouter)
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})