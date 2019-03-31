//index.js
//获取应用实例
const app = getApp()
var datatomica = require('../../data/datatomica.js');

Page({
  data: {
    // selectDate: null,
    array: ['2019年05月発売', '2019年04月発売', '2019年03月発売', '2019年02月発売', '2019年01月発売', '2018年12月発売', '2018年11月発売', '2018年10月発売'],
    index: 0,
  },
  bindPickerChange(e) {
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
