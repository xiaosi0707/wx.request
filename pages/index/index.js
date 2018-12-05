//index.js - 逻辑层
//获取应用实例
import { IndexModel } from '../../models/index.js'
let index = new IndexModel() // 导入对应的model
const app = getApp()

Page({
  data: {
    indexDataList: []
  },
  onLoad: function() {
    // let indexResult = index.getDataList; // models/index.js return出返回的结果，然后通过indexresult变量进行接收，行吗？不行的，因为request是异步函数。同步思维不可行

    // 第一种用回调函数的方式解决异步问题
    index.getDataList((res) => { // 调用获取到返回的数据res
      console.log(res)
      this.setData({
        indexDataList: res.data.dataList
      })
    })
    // 第二种promise-待续
  }
})
