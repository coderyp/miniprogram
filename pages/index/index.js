Page({
  data: {
    name: 'coderYan',
    age: 22,
    list: []
  },
  onLoad() {
    console.log('页面初始化完成')
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/home/multidata',
      success: (res) => {
        // console.log(res)
        // console.log(this)
        let data = res.data.data.banner.list
        this.setData({
          list: data
        })
      }
    })
  },
  onShow() {
    console.log('onShow')
  },
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('页面切入后台')
  },
  imageClick() {
    console.log('图片发生了点击')
  },
  // ------监听页面事件处理函数
  onPullDownRefresh() {
    console.log('下拉')
  },
  onReachBottom() {
    console.log('监听用户下拉触底')
  },
  onPageScroll(options) {
    console.log(options)
  }
  
})