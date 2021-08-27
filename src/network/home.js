import {request} from "./request";
import axios from "../../../HYMall-master/HYMall-master/src/network/axios";
export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    timeout:5000
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
