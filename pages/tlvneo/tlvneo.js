//tlvneo.js
//获取应用实例
const app = getApp()
var datatlvneo = require('../../data/datatlvneo.js');

Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      datatlvneo: datatlvneo.tlvneolist
    })
  }
})
