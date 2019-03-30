//index.js
//获取应用实例
const app = getApp()
var datatomica = require('../../data/datatomica.js');

Page({
  data: {

  },
  onLoad: function () {
    this.setData({
      datatomica: datatomica.tomicalist
    })
  }
})
