const date = new Date(); // 获取系统日期
var getYear = date.getFullYear(),
  getMonth =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1,
  getDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
  isScroll = false;
Component({
  properties: {
    show: {
      // 控制弹窗显示和隐藏
      type: Boolean,
      value: false,
    },
    vertical: {
      // 是否垂直滑动
      type: Boolean,
      value: false,
    },
    /**
     * type 时间类型 分钟， 支持两种类型 time 和 part , 默认是part
     * time : 2023-02-03 09:00  正常的日期时间 （例如： 09:30 、11:10 、12:36 ...）
     * part :  2023-02-03 09:00  分钟只包含 00 和 30 （例如： 09:30 、11:00 、12:30 ...）
     */
    type: {
      type: String,
      value: "part", // time 和 part
    },
  },
  data: {
    year: getYear, // 当前已选年份，默认是当年
    month: getMonth, // 当前已选月份，默认是当月
    day: getDate, // 当前已选天，默认是当天
    hour: "09", // 当前已选小时， 默认 09 点
    minute: "00", // 当前已选分钟，默认00
    hours: [], // 时间选择器，存放的小时数组 0 - 23
    minutes: [], // 时间选择器，存放的分钟数组 00 和 30 或者 00 - 59
    value: [0, 0], // 时间选择器，当前选择时间 索引
    currentIndex: 0, // tab导航当前索引
    left: 0, // tab导航 底部线条 当前离左侧位置 距离
    width: 123, // tab导航 底部线条 当前 宽度
    firstEnter: true, // 是否第一次打开， 默认true
  },
  lifetimes: {
    attached: function () {
      this.initDateTimePicker();
    },
    moved: function () {},
    detached: function () {},
  },
  methods: {
    // 日期改变的回调
    selectDay({ detail }) {
      console.log(detail, "selectDay detail");
      let { year, month, day } = detail;
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      if (!this.data.firstEnter) {
        setTimeout(() => {
          this.setData({ currentIndex: 1 });
          this.changeline();
        }, 300);
      }
      this.setData({ year, month, day, firstEnter: false });
    },
    // 切换导航
    handleChangeTag(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index,
        firstEnter: false,
      });
      this.changeline();
    },
    // 渲染横线位置的方法
    changeline() {
      let _this = this;
      // SelectorQuery.in(Component component): 将选择器的选取范围更改为自定义组件 component 内
      let query = wx.createSelectorQuery().in(this);
      // select() 在当前页面下选择第一个匹配选择器 selector 的节点
      // boundingClientRect() 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位
      query.select(".active").boundingClientRect();
      // SelectorQuery.exec(function callback) 执行所有的请求
      // 请求结果按请求次序构成数组，在callback的第一个参数中返回
      query.exec(function (res) {
        // console.log(res);
        _this.setData({
          left: res && res[0].left - 24,
          width: parseInt(res[0].width),
        });
      });
    },
    /***
     * 滚动选择时触发change事件，
     * 可以查看小程序官方文档了解
     */
    bindChange(e) {
      const val = e.detail.value;
      this.setData({
        hour: this.data.hours[val[0]],
        minute: this.data.minutes[val[1]],
      });
    },
    // 滚动开始
    bindpickstart() {
      isScroll = true;
    },
    //滚动结束
    bindpickend() {
      isScroll = false;
    },
    // 点击取消按钮，关闭日期选择器
    handleCancel() {
      this.setData({ show: false });
    },
    // 点击确定按钮
    handleConfirm() {
      let { year, month, day, hour, minute } = this.data;
      // console.log(year, month, day, hour,  minute)
      // 判断用户选择时间滚动是否结束，解决 picker-view bindChange 延迟问题
      if (isScroll) return;
      const timeStr =
        year + "-" + month + "-" + day + " " + hour + ":" + minute;
      this.triggerEvent("onSelectDate", timeStr);
      this.setData({ show: false, currentIndex: 0 });
      this.changeline();
    },
    // 初始化 picker 时间数据
    initDateTimePicker() {
      let hours = [],
        minutes = [];
      // 存放小时的数组
      for (let i = 0; i <= 23; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        hours.push(i);
      }
      // 存放分钟的数组
      if (this.data.type === 'time') {
        for (let i = 0; i <= 59; i++) {
          if (i < 10) { i = '0' + i }
          minutes.push(i)
        }
      } else {
        minutes = ['00', '30']
      }
      this.setData({ hours, minutes });
      this.setData({ value: [9, 0] });
    },
    // 加载日历数据
    getDateList() {
      // 防止滑动时 tab导航切换到时间模块
      this.setData({ firstEnter: true });
    },
    // 禁止 日期时间 swiper 滑动
    catchtouchmove() {
      return false;
    },
  },
});
