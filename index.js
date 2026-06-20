import express from 'express'
import dotenv from 'dotenv/config.js'
import mongoose from 'mongoose'
const app = express()
const mongo= process.env.MONGODB_URI
const port = process.env.PORT || 5000

mongoose.connect(mongo)
const db = mongoose.connection



db.on('error',(error)=>{
    console.error(`server is not run : ${error}`)
})

db.once('open',()=>{
    console.log(`mongo is connect successfully`)
})






app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`server port is run `)
})