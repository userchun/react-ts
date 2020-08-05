import axios from 'axios'

//过滤请求
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    config.timeout = 10 * 1000 //请求响应时间
    config.baseURL = process.env.REACT_APP_ENV
    config.headers.post['version'] = 'v1'
    config.headers.post['Content-Type'] = 'application/json; charset=utf-8'
    config.data = JSON.stringify(config.data)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: object) {
  return axios
    .get(url, {
      headers: {
        Authorization: localStorage.getItem('token'),
        version: 'v1',
      },
      params: params,
    })
    .then(() => {})
    .catch(() => {})
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: object) {
  return axios
    .post(url, params)
    .then(() => {})
    .catch(() => {})
}
