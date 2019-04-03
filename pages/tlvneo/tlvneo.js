//tlvneo.js
//获取应用实例
const app = getApp()
var datatlvneo = require('../../data/datatlvneo.js');

Page({
  data: {
    listNum: 12
  },
  onLoad: function () {
    this.initNum(this.data.listNum);
    wx.showShareMenu(); // 转发
  },
  // 加载数据方法
  initNum: function(num) {
    var initArr = datatlvneo.tlvneolist.slice(0, num);
    this.setData({
      datatlvneo: initArr
    })
  },
  // 加载更多
  loadMore: function () {
    this.data.listNum += 12;
    this.initNum(this.data.listNum);
  }
})
