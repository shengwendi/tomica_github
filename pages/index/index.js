//index.js
//获取应用实例
const app = getApp()
var datatomica = require('../../data/datatomica.js');
var tomicaMouth = require('../../data/mouth.js')
Page({
  data: {
    index: 0,
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function () {
    this.setData({
      datatomica: datatomica.tomicalist,
      tomicaMouth: tomicaMouth.tomicaMouth
    })
    wx.showShareMenu(); // 转发
  }
})
