require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express()
const {mongoConnect} = require('./utils/database/database')
const server = require('http').createServer(app)
const socketIO = require('socket.io')
const {verify} =  require('./middlewares/auth')
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors())

// setup socket
let io = socketIO(server)
require('./utils/socket/sock').sockApp(io)

// app.all('/api/*', verify)   token for each endpoint

app.use(require('./routes/index'))

mongoConnect(()=>{
    server.listen(9000, console.log('database connected and server port 9000'))
})