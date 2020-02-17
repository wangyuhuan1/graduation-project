// pages/detail/detail.js
const Http=require('../../models/http')
var audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:{},
    isPlay:false,
    playId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var {id}=options
    Http.getDetail(id).then(res=>{
      var playlist=res.data.playlist
      this.setData({
        playlist
      })
    })
    wx.setNavigationBarTitle({
      title: "详情"
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
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
  }
})