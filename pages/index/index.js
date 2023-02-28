// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    showPlus: false,
    dateTime: '',
    dateTimePlus: '',
    isOper: 'noplus'
  },
  onLoad() {
    
  },
  handleOpenPicker(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type
    console.log(type)
    this.setData({
      isOper: type,
      show: type === 'noplus',
      showPlus: type === 'plus'
    })
  },
  // 选择时间
  handleSelectDateTime(e) {
    console.log(e.detail)
    if (this.data.isOper === 'noplus') {
      this.setData({
        dateTime: e.detail
      })
    } else {
      this.setData({
        dateTimePlus: e.detail
      })
    }
  },
})
