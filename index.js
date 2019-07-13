let vm = new Vue({
  el: '#index-body',
  data: {
    inputProps: [],
    bgURL: "map_msz.jpg",          // 背景图片的文件名 一定要用双引号包裹
  },

  beforeCreate: function () {
  },
  created: function () {
    this.inputProps = [

      // 创建一个新倒计时板的时候从这里开始复制 不要写不存在的日期时间 所有参数的值均由双引号包裹起来
      {
        title: "第九赛季结束",      // 标题字符串 必填 目前最多支持12个汉字
        end_y: "2019",            // 结束的年份 必填 标准格式2019 不能写19
        end_m: "08",               // 结束的月份 必填 可以写成05或5均可 范围1~12
        end_d: "02",              // 结束的日 必填 可以写成05或5均可 范围1~(28,29,30,31)
        end_h: "08",              // 结束的小时 必填 标准24小时制 下午4点必须写成16；05也可写成5 范围0~23
        end_mi: "00",             // 结束的分钟 必填 05或5均可 范围0~59
        // 以上参数代表本活动标题为"第九赛季结束"，结束时间为"2019年8月2日 8:00"
      },
      // 创建一个新倒计时板的时候复制到这里结束

      {
        title: "加时任务解锁(预计)",
        end_y: "2019",
        end_m: "07",
        end_d: "18",
        end_h: "21",
        end_mi: "00",
      },
	  
	  {
        title: "夏日14天结束",
        end_y: "2019",
        end_m: "07",
        end_d: "16",
        end_h: "21",
        end_mi: "00",
      },

      {
        title: "世界杯-嗨皮岛总决赛开幕",
        end_y: "2019",
        end_m: "07",
        end_d: "27",
        end_h: "00",
        end_mi: "30",
      },
	  
      {
        title: "世界杯-双排总决赛开幕",
        end_y: "2019",
        end_m: "07",
        end_d: "28",
        end_h: "00",
        end_mi: "30",
      },

      {
        title: "世界杯-单排总决赛开幕",
        end_y: "2019",
        end_m: "07",
        end_d: "29",
        end_h: "00",
        end_mi: "30",
      },
      // 创建一个新倒计时板的时候在上一行插入

    ];
  },
  beforeMount: function (){
  },
  mounted: function (){
  },

  computed: {},
  methods: {
    test: function () {
    }
  }
});
