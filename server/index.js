require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const session = require('express-session')
const { mongoose } = require('mongoose');

const productRouter = require('./model/Product')
const userRouter = require('./model/User')

mongoose.connect('mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@fungusnodeexpress.wa1ov.mongodb.net/?retryWrites=true&w=majority&ssl=true')
.then(() => {
  console.log('Product Connection opened')
})
.catch(err => {
  console.log('Product Error:')
  console.log(err);
})
const sessionOptions = {
  secret: 'notgoodsecret',
  resave: false,
  saveUnintialized: false
}
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product', productRouter)
app.use('/user', userRouter)
app.use(session(sessionOptions))

// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Unexpected Error' } = err
  res.status(status).json(message)
})

app.listen(3001, () => {
  console.log('APP listening 3001')
})