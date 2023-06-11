<template>
  <div class="carousel">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      @change="onChange"
      style="overflow: hidden; height: 12rem; position: relative"
    >
      <van-swipe-item
        v-for="(item, index) in swiperList"
        :key="index"
        style="float: left"
      >
        <img v-lazy="item.image" style="width: 100%" />
      </van-swipe-item>

      <template #indicator>
        <div
          class="custom-indicator"
          style="
            position: absolute;
            right: 0.313rem;
            bottom: 0.313rem;
            padding: 0.125 0.313rem;
            font-size: 0.75rem;
            background: rgba(0, 0, 0, 0.1);
          "
        >
          {{ current + 1 }}/{{ swiperList.length }}
        </div>
      </template>
    </van-swipe>
  </div>
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
      current: 0,
      swiperList: [
        {
          id: 1,
          image: "./image/swiper/1.jpg",
        },
        {
          id: 2,
          image: "./image/swiper/2.jpg",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
.carousel {
  margin-top: 5.063rem;
}
</style>
