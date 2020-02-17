// pages/searchPlay/searchPlay.js
const Http=require('../../models/http')
var audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playUrl:"",
    plays:{},
    isPlay:true,
    animation:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    Http.getOneDetail(options.id).then(res=>{
      var data=res.data.songs[0]
      this.setData({
        plays:data
      })
      Http.getPlay(data.id).then(res=>{
        var playUrl=res.data.data[0].url
        audio.src=playUrl;
        audio.title=data.name
        wx.setStorageSync('playState', true)
      })
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
  handleClick(){
    if(this.data.isPlay){
      this.setData({
        isPlay:false
      })
      audio.pause()
      wx.setStorageSync('playState', false)
    }else{
      this.setData({
        isPlay:true
      })
      audio.play()
      wx.setStorageSync('playState', true)
    }
 }
})