//index.js
//获取应用实例
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
const app = getApp()

Page({
  onLoad: function() {
    //  封装后的请求调用
    http.request({
      url: 'list',
      success: (res) => {
        console.log(res)
      }
    })
  }
})
