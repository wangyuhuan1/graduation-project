// components/ListItem/ListItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    },
    index:{
      type:Number
    },
    isPlay:{
      type:Boolean
    },
    playId:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      var data=this.properties.data
      wx.navigateTo({
        url: '/pages/play/play?data='+encodeURIComponent(JSON.stringify(data)),
      })
      var id=this.properties.data.id
      this.triggerEvent("toggle",id)
    }
  }
})
