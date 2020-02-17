// pages/home/home.js
const Http = require('../../models/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musics: {

    },
    history:[],
    lists:{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var musics = {}
    Http.getNew().then(res => {
      var newPlaylists = res.data.playlists
      musics.newPlaylists = {}
      musics.newPlaylists.title = "最新歌单"
      musics.newPlaylists.data = newPlaylists

      Http.getHot().then(res => {
        var hotPlaylists = res.data.playlists
        musics.hotPlaylists = {}
        musics.hotPlaylists.title = "热门歌单"
        musics.hotPlaylists.data = hotPlaylists

        Http.getRecommend().then(res => {
          var recommend = []
          res.data.result.forEach(item => {
            var obj = {}
            obj.name = item.name
            obj.id = item.id
            obj.coverImgUrl = item.picUrl
            recommend.push(obj)
          })
          musics.recommend = {}
          musics.recommend.title = "推荐歌单"
          musics.recommend.data = recommend
          this.setData({
            musics
          })
        })
      })
    })
    var lists={}
    Http.getList("3").then(res=>{
      // console.log(res.data.playlist.tracks)
      var soars=res.data.playlist.tracks
      lists.soars={}
      lists.soars.title="飙升榜"
      lists.soars.data=soars

      Http.getList("0").then(res=>{
        var news=res.data.playlist.tracks
        lists.news={}
        lists.news.title="新歌榜"
        lists.news.data=news

        Http.getList("2").then(res=>{
          var originals=res.data.playlist.tracks
          lists.originals={}
          lists.originals.title="原创榜"
          lists.originals.data=originals

          Http.getList("1").then(res=>{
            var hots=res.data.playlist.tracks
            lists.hots={}
            lists.hots.title="热歌榜"
            lists.hots.data=hots

            this.setData({
              lists
            })
          })
        })
      })
    })
  },
  handleMore(e) {
    var { list } = e.currentTarget.dataset
    console.log(list)
    wx.navigateTo({
      url: '/pages/more/more?list=' + encodeURIComponent(JSON.stringify(list)),
    })
  },
  handleSubmit(e){
    var keyword=e.detail.value.keyword
    Http.getSearch(keyword).then(res=>{
      console.log(res.data.result.songs)
      var data=res.data.result.songs
      wx.navigateTo({
        url: '/pages/search/search?data='+encodeURIComponent(JSON.stringify(data)),
      })
    })
    // var value=e.detail.value.keyword
    // var history=this.data.history
    // if(!history.includes(value)){
    //   history.unshift(value)
    //   this.setData({
    //     history
    //   })
    // }
    
  }
})