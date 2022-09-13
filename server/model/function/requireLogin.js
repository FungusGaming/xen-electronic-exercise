const requireLogin = (req, res, next) => {
  if(req.session.user_id) {
    next()
  } else {
    res.json(message.auth.requireAuth)
  }
}

export default requireLogin