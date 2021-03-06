import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    timeout:5000
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
