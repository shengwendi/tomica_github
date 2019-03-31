//index.js
//获取应用实例
const app = getApp()
var datatomica = require('../../data/datatomica.js');

Page({
  data: {
    // selectDate: null,
    array: ['2019年05月発売', '2019年04月発売', '2019年03月発売', '2019年02月発売'],
    index: 0,
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function () {
    this.setData({
      datatomica: datatomica.tomicalist
    })
  }
})
