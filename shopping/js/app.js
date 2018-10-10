var app = new Vue({
  el:"#app",
  data:{
    listItems:[
      {
        shop_check:"车工官方旗舰店",
        goods:[
          {
            goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:"￥"+"229.00",
            count:1
          },
          {
            goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:"￥"+"229.00",
            count:1
          }
        ]
      },
      {
        shop_check:"京东自营",
        goods:[
          {
            goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:"￥"+"229.00",
            count:1
          }
        ]
      },
      {
        shop_check:"疯子专卖",
        goods:[
          {
            goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:229.00,
            count:1
          }
        ]
      }
    ]
  },
  methods:{
      handleReduce:function (index) {
          if(this.listItems[index].goods[index].count === 1) return;
          this.listItems[index].goods[index].count--;
      },
      handleAdd:function (index) {
          this.listItems[index].goods[index].count++;
      },
      handleRemove:function (index) {
          this.listItems[index].goods.splice(index,1);
      }
  }
})
