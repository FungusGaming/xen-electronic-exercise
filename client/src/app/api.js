import axios from 'axios'
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_URL
const API = {
  getAllProduct: () => axios.get(`${API_URL}/product`),
  signup: (data) => axios.post(`${API_URL}/user`, data),
  signin: (data) => axios.post(`${API_URL}/user/signin`, data)
}

export default API