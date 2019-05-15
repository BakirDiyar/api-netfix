const express = require('express')
const app = express()

app.use(require('./films'))
app.use(require('./users'))


module.exports = app