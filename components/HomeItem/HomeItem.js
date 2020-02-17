// components/HomeItem/HomeItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
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
    handleDetail(){
      var {id}=this.properties.data;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
    }
  }
})
