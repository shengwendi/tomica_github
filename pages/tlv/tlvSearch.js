// pages/tlv/tlvSearch.js
var datatlv = require('../../data/datatlv.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '', // input value
    searchList: [], // 搜索结果列表
    resultEmp: false, // 搜索结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu(); // 转发
  },

  // 获取input value值
  searchValueInput: function (e) {
    let value = e.detail.value;
    this.setData({
      searchValue: value,
    });
  },
  // 搜索
  funSearch: function (e) {
    let keywords = e.currentTarget.dataset.keywords.trim();
    if (!keywords) return;
    let allCar = datatlv.tlvlist; // 获取所有的车
    let searchList = allCar.filter((item) => {
      return item.specTitle.toLowerCase().match(keywords.toLowerCase());
    });
    this.setData({
      resultEmp: false,
      searchList: searchList
    });
    // 无结果
    if (!searchList.length) {
      this.setData({
        resultEmp: true
      })
    }
  },
})