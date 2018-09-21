// pages/watch_me/watch_me.js
Page({
  onPullDownRefresh: function () {
    console.log(222)
    wx.stopPullDownRefresh()
  },
  refresh(){
    wx.startPullDownRefresh()
  },
})