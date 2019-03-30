//tlv.js
//获取应用实例
const app = getApp()
var datatlv = require('../../data/datatlv.js');

Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      datatlv: datatlv.tlvlist
    })
  }
})
