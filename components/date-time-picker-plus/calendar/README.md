#### 组件使用
```
<calendar title="" spotMap="{{spotMap}}" bindselectDay="selectDay" disabledDate="{{disabledDate}}" changeTime="{{changeTime}}"></calendar>

```

```
Page({
  data: {
    spotMap: {
      y2023m2d25: "deep-spot",
      y2023m2d24: "spot",
      y2023m2d23: "spot"
    },
    // 例子，今天之后的日期不能被选中
    // disabledDate({ day, month, year }) {
    //   const now = new Date();
    //   const date = new Date(year, month - 1, day);
    //   console.log(date)
    //   return date > now;
    // },
  },
  // 日期改变的回调
  selectDay({ detail }) {
    console.log(detail, "selectDay detail");
  },
});

```