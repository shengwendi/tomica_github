//tlvneo.js
//获取应用实例
const app = getApp()
var datatlvneo = require('../../data/datatlvneo.js');

wx.request({
  url: 'https://raw.githubusercontent.com/shengwendi/tomica/master/data/datatlvneo.js?token=GHSAT0AAAAAABXY3BPI6E2VXIK32X6VX2F2YX6EYKQ',
  method: 'GET',
  data: {
    
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  dataType: 'json',
  responseType: 'text',
  success (res) {
    console.log('tlvneo',res)
  }
})

let interstitialAd = null
Page({
  data: {
    listNum: 12, // 每次加几辆车
    len: 0, // 数组长度
    over: false // 判断是否全部加载完成
  },
  onLoad: function () {
    this.initNum(this.data.listNum);
    wx.showShareMenu(); // 转发

    this.setData({
      len: datatlvneo.tlvneolist.length // 数组的长度
    });

    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-3c3b3acfe8e64a71'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }
  },
  onShow: function () {
    // 在适合的场景显示插屏广告
    // if (interstitialAd) {
    //   interstitialAd.show().catch((err) => {
    //     console.error(err)
    //   })
    // }
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
    if (this.data.listNum <= this.data.len) {
      this.data.listNum += 12;
      this.initNum(this.data.listNum);
    } else {
      wx.showToast({
        title: '没有更多啦~',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        over: true
      })
    }
  },
  // 跳转到搜索页面
  jumpSearch: function () {
    wx.navigateTo({
      url: 'tlvneoSearch'
    });
  }
})
