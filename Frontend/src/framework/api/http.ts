import axios from 'axios'

import { apiBaseUrl } from 'config/framework.config'


export const http = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-type': 'application/json',
  },
})


/* Get Data */
export const get = (url: string, options: any = null) => http.get(url, options)

/* Post Data */
export const post = (url: string, data: any, options: any = null) =>
  http.post(url, data, options)

/* PUT Data */
export const put = (url: string, data: any, options: any = null) =>
  http.put(url, data, options)

/* Fetch API */
export const fetchAPI = async (url: string, options: any = null) => {
  const { status, statusText, data } = await http.get(url, options)
  return { status, statusText, data }
}

/* Post API */
export const postAPI = async (
  url: string,
  payload: any,
  options: any = null,
) => {
  return http.post(url, payload, options)
}

/* Put API */
export const putAPI = async (
  url: string,
  payload: any,
  options: any = null,
) => {
  return http.put(url, payload, options)
}

/* Delete API */
export const deleteAPI = async (url: string, options: any = null) => {
  const { status, statusText, data } = await http.delete(url, options)
  return { status, statusText, data }
}

/* Export axios as default */
export default http
