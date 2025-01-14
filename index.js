// application packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article.js')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/article.js')
app.use('/', articleRoutes)

// app start point
app.listen(3000, () => {
  console.log('App is started at http://localhost:3000')
});