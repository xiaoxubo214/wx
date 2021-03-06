//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerUrl: ['../image/banner1.png', '../image/banner2.png', '../image/banner3.png', '../image/banner4.png']  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },

  gotoList: function (e) {
    var id = e.target.dataset.id

    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
  },
    gotoScan: function (e) {
      console.log(e)
      var id = e.target.dataset.id
      wx.scanCode({
        success: (res) => {
          console.log(res)
          wx.navigateTo({
            url: '../detail/detail?id=' + id,
          })
        }
      })
    },
})
