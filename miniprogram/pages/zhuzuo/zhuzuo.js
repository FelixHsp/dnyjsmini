// pages/zhuzuo/zhuzuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formItem:{
      type:'专著'
    },
    array:['专著','编著'],
    index:0
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
  bindPickerChange:function(e){
    this.setData({
      index:e.detail.value,
      ['formItem.type']:this.data.array[e.detail.value]
    })
  },
  zhuzuoInput:function(e){
    this.setData({
      ['formItem.title']:e.detail.value
    })
  },
  chubanInput: function (e) {
    this.setData({
      ['formItem.chuban']: e.detail.value
    })
  },
  isbnInput: function (e) {
    this.setData({
      ['formItem.isbn']: e.detail.value
    })
  },
  addBtn: function () {
    if (!this.data.formItem.title || !this.data.formItem.chuban || !this.data.formItem.isbn) {
      wx.showModal({
        title: '提示',
        content: '请将信息填写完整',
        showCancel: false
      })
    } else {
      wx.showModal({
        title: '确认',
        content: '是否确定提交',
        success: (res) => {
          if (res.confirm) {
            wx.cloud.callFunction({
              // 云函数名称
              name: 'time',
              // 传给云函数的参数
              data: {

              },
            }).then(res => {
              // 计算时间
              var time = Date.parse(new Date(JSON.parse(res.result).sysTime2.replace(/-/g, '/'))) / 1000
              this.setData({
                ['formItem.infodate']: JSON.parse(res.result).sysTime2,
              })
              console.log(this.data.formItem)
            })
          }
        }
      })
    }
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