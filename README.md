# wx-date-time-picker

#### 介绍
封装一个日期（日历）时间 选择器组件

#### 使用教程

1.  在 wxml 中
```
<date-time-picker show="{{show}}" bind:onSelectDate="handleSelectDateTime"></date-time-picker>
```
2.  在 json 中
```
{
  "component": true,
  "usingComponents": {
    "date-time-picker": "/components/date-time-picker/index"
  }
}
```
3.  在 js 中
```
Page({
  data: {
    show: false
  },
  onLoad() {},
  handleOpenPicker() {
    this.setData({show: true })
  },
  // 选择时间
  handleSelectDateTime(e) {
    console.log(e.detail)
    this.setData({
       dateTime: e.detail
    })
  }
})
```

#### 使用说明

| 属性名      | 说明                                                                                                                                                                  | 类型      | 默认值   |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| show     | 控制弹窗 的显示和隐藏                                                                                                                                                         | Boolean | false |
| vertical | 是否垂直滑动， 默认是左右滑动（水平滑动）                                                                                                                                               | Boolean | false |
| type     | 时间类型 的分钟类型，支持两种类型 time 和 part ，time : 2023-02-03 09:00  正常的日期时间 （例如： 09:30 、11:10 、12:36 ...），part :  2023-02-03 09:00  分钟只包含 00 和 30 （例如： 09:30 、11:00 、12:30 ...） | String  | part  |
