import axios from 'axios'

import { AXIOS_BASE_URL } from '../constants'

const { REACT_APP_FLICKR_API_KEY = '' } = process.env
const AXIOS_REQUESTS_TIMEOUT = 5000

/**
 * @todo As a future improvement it would be nice to review `axios-case-converter`
 * or a similar helper to convert the `snake-case` properties from response to `camelCase` ones
 * so the front-end stays consistent with `camelCase` version across redux/typescript and other namings
 * */
const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: AXIOS_REQUESTS_TIMEOUT,
  params: {
    api_key: REACT_APP_FLICKR_API_KEY,
    format: 'json',
    nojsoncallback: 1,
  },
})

export default axiosInstance
