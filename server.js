const express = require('express')
const logger = require('morgan')

const routes = require('./routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(logger('dev'))

app.use('/api', routes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
}

module.exports = app