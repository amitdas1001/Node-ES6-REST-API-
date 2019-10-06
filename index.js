require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const router = express.Router()
const routes = require('./routes/index')
const environment = process.env.NODE_ENV //development
const stage = require('./config')[environment]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

if(environment != 'production') {
    app.use(logger('dev'))
}

app.use('/api/v1',(req,res,next)=>{
    routes(router)
    next()
})

app.listen(`${stage.port}`,()=>{
    console.log(`Server now listening at localhost:${stage.port}`);
})

module.exports = app;