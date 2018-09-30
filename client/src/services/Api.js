import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
  })
}
