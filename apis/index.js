const Permission = require('./Routes/Permissions.routes')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Api = express()

Api.use(cors())
Api.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/cellycloud', { useNewUrlParser: true })

Api.use('/permission', Permission)
module.exports = Api