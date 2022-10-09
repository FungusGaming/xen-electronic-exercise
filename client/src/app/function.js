export const handleAxiosError = (err) => {
  let message = 'Unexpected error!'
  if (err.response.data && err.response.data.status && err.response.data.message) {
    message = err.response.data.message
  }
  return message
}