const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/index')
const FakeDb = require('./fake-db')
const productRouter = require('./routes/products')

const path = require('path')

const app = express()

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    // fakeDb.initDb()
  }
)

app.use('/api/v1/products/', productRouter)

const PORT = process.env.PORT || '3001'
if(process.env.MODE_ENV === 'production'){
  const appPath = path.join( __dirname, '..', 'dist','pra-app1')
  app.use(express.static(appPath))
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(appPath, 'index.html'))
})
}


app.listen(3001, function(req,res){
  console.log('node is running!')
})