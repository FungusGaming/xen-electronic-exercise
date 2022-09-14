const handleAxiosError = (err) => {
  let message = 'Unexpected error!'
  if (err.response.data && err.response.data.status && err.response.data.messsage) {
    message = err.response.message
  }
  return message
}

export default handleAxiosError