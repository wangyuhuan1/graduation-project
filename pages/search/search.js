// pages/search/search.js
var audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:[],
    isPlay:false,
    playId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data=JSON.parse(decodeURIComponent(options.data))
    // console.log(data)
    this.setData({
      search:data
    })
  },
  onShow: function () {
    var playState=wx.getStorageSync('playState')
    console.log(playState)
    if(playState!=null){
      this.setData({
        isPlay:playState
      })
    }
    var playId=wx.getStorageSync('playId')
    this.setData({
      playId
    })
    audio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
    })
  },
  handleToggle(event){
    var id=event.detail
    wx.setStorageSync('playId',id)
  },
  handleClick(e){
    wx.navigateTo({
      url: '/pages/searchPlay/searchPlay',
    })
  },
})