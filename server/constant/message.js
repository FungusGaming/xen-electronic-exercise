const message = {
  success: {
    status: true,
  },
  fail: {
    status: false,
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