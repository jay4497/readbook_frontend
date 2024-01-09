import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    withCredentials: true
})

request.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['token'] = token
    }
    return config
})

request.interceptors.response.use((res) => {
    return res
}, (error) => {
    const responseStatus = error.response.status
    if (responseStatus === 401) {

    }
    return Promise.reject(error)
})

export default request
