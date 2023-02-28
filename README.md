# wx-date-time-picker

#### 介绍
封装一个日期（日历）时间 选择器组件

#### 软件架构
软件架构说明


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
    showPlus: false
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


#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
