import express from 'express'
import dotenv from 'dotenv/config.js'
import mongoose from 'mongoose'
import {sinIN} from './model/schema'
const app = express()
const port= process.env.PORT ||4001
const mongo = process.env.MONGODB_URI
// mongo connection line 

mongoose.connect(mongo)
const db = mongoose.connection

db.on('error',(error)=>{
console.error(`mongo is't connect: ${error}`)
})

db.once ('open', ()=>{
  console.log(`mongo is connect`)
})


app.call('/user',sinIn)




app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('Server is running on ')
})