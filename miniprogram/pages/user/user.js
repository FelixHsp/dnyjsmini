var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onAuth() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.reLaunch({
            url: '../index/index'
          })
          wx.getSetting({
            success(res) {
              // if (!res.authSetting['scope.record']) {
              //   wx.authorize({
              //     scope: 'scope.record',
              //     success() {

              //     }
              //   })
              // }
            }
          })
        }
      }
    })
  }
})