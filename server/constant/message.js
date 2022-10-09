const message = {
  success: {
    status: 200,
  },
  fail: {
    status: 400,
  },
  auth: {
    passwordInvalid: {
      status: 400,
      message: 'Password invalid'
    },
    requireAuth: {
      status: 400,
      message: 'Login require'
    },
    userNotFound: {
      status: 400,
      message: 'User not exist'
    }
  }
}

module.exports = message