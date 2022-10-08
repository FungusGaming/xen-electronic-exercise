const message = require('../../constant/message')

const requireLogin = (req, res, next) => {
  console.log('req', req.session.user_id);
  if(req.session.user_id) {
    next()
  } else {
    res.status(message.auth.requireAuth.status).json(message.auth.requireAuth)
  }
}

module.exports = {
  requireLogin
}
