<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://pic.netbian.com/uploads/allimg/230603/002539-16857231398d51.jpg",
        "https://pic.netbian.com/uploads/allimg/230522/200438-1684757078e034.jpg",
      ],
    };
  },
};
const Base64 = require("js-base64").Base64;
console.log(
  Base64.encode(
    "https://pic.netbian.com/uploads/allimg/230604/003655-16858102157402.jpg"
  )
);
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  /* height: 100%; */
}
</style>
