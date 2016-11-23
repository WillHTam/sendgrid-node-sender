const express = require('express')
const port = 3000
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var sendgrid = require('sendgrid')
var routes = require('./routes/index')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, email, auth_token, id')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  next()
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`Connected to ${port}`)
})

module.exports = app
