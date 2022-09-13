const message = {
  success: {
    status: true,
  },
  fail: {
    status: false,
  },
  auth: {
    passwordInvalid: {
      status: false,
      message: 'Password invalid'
    },
    requireAuth: {
      status: false,
      message: 'Login require'
    }
  }
}

module.export = message