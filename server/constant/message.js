const message = {
  success: {
    code: 200,
  },
  fail: {
    code: 400,
  },
  auth: {
    passwordInvalid: {
      code: 400,
      message: 'Password invalid'
    },
    requireAuth: {
      code: 400,
      message: 'Login require'
    },
    userNotFound: {
      code: 400,
      message: 'User not exist'
    }
  }
}

module.exports = message