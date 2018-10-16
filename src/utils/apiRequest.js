import axios from 'axios'

export default request => {
  const { url, data, method } = request
  return axios({
    method,
    url,
    data
  })
};
