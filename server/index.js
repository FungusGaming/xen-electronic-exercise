require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const session = require('express-session')
const { mongoose } = require('mongoose');
const sessionOptions = {
  secret: 'notgoodsecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 360000
  }
}
app.use(session(sessionOptions))
app.set('views', path.join(__dirname, 'views'))

// for react retrieve express-session
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use((req, res, next) => {
  mongoose.connect('mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@fungusnodeexpress.wa1ov.mongodb.net/?retryWrites=true&w=majority&ssl=true')
  .then(() => {
    console.log('Mongo Connection opened')
    next()
  })
  .catch(connectionErr => {
    console.log('Mongo connection Error:')
    console.log(connectionErr);
    res.status(400).json('Server error. Please contact admin.')
  })
})

const productRouter = require('./model/Product')
const userRouter = require('./model/User');
const tourismRouter = require('./model/Tourism')
app.use('/product', productRouter)
app.use('/user', userRouter)
app.use('/tourism', tourismRouter)

// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Unexpected Error' } = err
  res.status(status).json(message)
})

app.listen(3001, () => {
  console.log('APP listening 3001')
})