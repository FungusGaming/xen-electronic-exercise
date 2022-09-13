const { mongoose } = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const SALT = 12

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Username cannot be blank']
  },
  password: {
    type: String,
    require: [true, 'Password cannot be blank']
  },
  role: {
    type: String,
    default: '2'
  }
})

const userModel = new mongoose.model('User', userSchema)
userSchema.pre('save', async function(next) {
  if(this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, SALT)
  next()
})

router.post('/', async (req, res) => {
  const { password, username } = req.body
  const user = new userModel({
    username,
    password
  })
  await user.save()
  res.json(message.success)
})

router.get('/', async (req, res) => {
  const { username, password } = req.body
  const user = await userModel.findOne({ username })
  const validPassword = await bcrypt.compare(password, user.password)
  if (validPassword) {
    req.session.user_id = user._id
    res.json(message.success)
  } else {
    req.session.user_id = null
    res.json(message.auth.passwordInvalid)
  }
})

// TODO get /:id to retrieve user info

router.post('/logout', (req, res) => {
  // req.session.destroy()
  req.session.user_id = null
  res.json(message.success)
})

module.exports = router
