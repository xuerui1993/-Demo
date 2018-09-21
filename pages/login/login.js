// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  setPassword(e){
    this.password = e.detail.value;
  },
  setUserName(e){
    this.userName = e.detail.value;
  },
  data: {
    password:'',
    userName:''
  },
  login(){
    if(this.userName === 'xuerui' && this.password === '123456'){
      console.log('登录成功')
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      app.globalData.refreshFlag ++;
      wx.navigateBack();
    }else{
      console.log('密码错误');
    }
    console.log(this.userName);
    console.log(this.password);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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