import axios from 'axios'

axios.defaults.withCredentials = true
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_URL
const API = {
  getAllProduct: () => axios.get(`${API_URL}/product`),
  signup: (data) => axios.post(`${API_URL}/user`, data),
  signin: (data) => axios.post(`${API_URL}/user/signin`, data),
  sync: () => axios.get(`${API_URL}/user`),
  logout: () => axios.post(`${API_URL}/user/logout`),

}

export default API