// components/SearchItem/SearchItem.js
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
      // console.log(this.properties.data.id)
      wx.navigateTo({
        url: '/pages/searchPlay/searchPlay?id='+this.properties.data.id,
      })
      var id=this.properties.data.id
      this.triggerEvent("toggle",id)
    }
  }
})
