// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onPullDownRefresh: function () {
    console.log('1111');
  },

  login: function (event) {
    console.log(111)
    wx.navigateTo({
      url: '../login/login'
    })
  },

  goMyCoin(){
    console.log('跳转到我的海豚币里面')
  },
  goAward(){
    console.log('跳转到推广奖励里面')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().setWatcher(app.globalData, this.watch); // 设置监听器
  },

  watch: {
    refreshFlag: function (newValue) {
        console.log('开始刷新');
        console.log(newValue);
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})