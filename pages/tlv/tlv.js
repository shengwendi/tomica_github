//tlv.js
//获取应用实例
const app = getApp()
var datatlv = require('../../data/datatlv.js');

Page({
  data: {
    listNum: 12
  },
  onLoad: function () {
    this.initNum(this.data.listNum);
  },
  // 加载数据方法
  initNum: function (num) {
    var initArr = datatlv.tlvlist.slice(0, num);
    this.setData({
      datatlv: initArr
    })
  },
  // 加载更多
  loadMore: function() {
    this.data.listNum += 12;
    this.initNum(this.data.listNum);
  }
})
