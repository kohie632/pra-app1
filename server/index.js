const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRouter = require('./routes/products')

const app = express()

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  }
)

app.use('/api/v1/products/', productRouter)

const PORT = process.env.PORT || '3001'

app.listen(3001, function(req,res){
  console.log('node is running!')
})