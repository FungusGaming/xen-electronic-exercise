const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');

const productRouter = require('./model/Product')

app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product', productRouter)

// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Unexpected Error' } = err
  res.status(status).json(message)
})

app.listen(3001, () => {
  console.log('APP listening 3001')
})