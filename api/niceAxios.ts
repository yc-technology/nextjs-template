import { createNiceAxios } from 'nice-axios'

export const niceAxios = createNiceAxios({
  baseURL: process.env.NEXT_BASE_PATH
})
