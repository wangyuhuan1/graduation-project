// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list=JSON.parse(decodeURIComponent(options.list))
    console.log(list)
    this.setData({
      list
    })
    wx.setNavigationBarTitle({
      title: list.title,
    })
  }
})