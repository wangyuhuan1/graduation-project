// pages/rankDetail/rankDetail.js
var audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
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
      data
    })
  },
  onShow(){
    var playState=wx.getStorageSync('playState')  //获取缓存
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
      wx.setStorageSync('playState', true)
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
      wx.setStorageSync('playState', false)
    })
  },
  handleToggle(event){
    var id=event.detail
    wx.setStorageSync('playId',id)
  }
})