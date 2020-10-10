import request from '@/service/http'

export function getDayData(query) {
  return request({
    url: '/calendar/day',
    method: 'get',
    params: query
  })
}