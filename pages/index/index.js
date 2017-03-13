//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
    //test1事件处理函数
  bindtapTest1: function() {
    wx.navigateTo({
      url: '../test1/test1'
    })
  },
   //test2事件处理函数
  bindtapTest2: function() {
    wx.navigateTo({
      url: '../test2/test2'
    })
  },
   //test3事件处理函数
  bindtapTest3: function() {
    wx.navigateTo({
      url: '../test3/test3'
    })
  },
   //test1事件处理函数
  bindtapTest4: function() {
    wx.navigateTo({
      url: '../test4/test4'
    })
  },
   //test5事件处理函数
  bindtapTest5: function() {
    wx.navigateTo({
      url: '../test5/test5'
    })
  },
   //test6事件处理函数
  bindtapTest6: function() {
    wx.navigateTo({
      url: '../test6/test6'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
