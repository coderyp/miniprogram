// pages/scrollview/scrollview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false
  },
  HandleBtn () {
    this.setData({
      flag: !this.data.flag
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  scrollHandle(e) {
    // console.log( e.detail.scrollTop)
  },
  toupperHandle() {
    console.log('滚动左边/顶部')
  },
  tolowerHandle() {
    console.log('滚到右边/底部')
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