//index.js
//获取应用实例
import { HTTP } from '../../utils/http.js'
let http = new HTTP()
const app = getApp()

Page({
  onLoad: function() {
    http.request({
      url: 'list',
      success: (res) => {
        console.log(res)
      }
    })
  }
})
