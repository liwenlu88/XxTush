<template>
  <div class="toutiao">
    <span class="toutiao-title">小小头条</span>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">{{ text.val }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  //   name: "scroll",
  data() {
    return {
      textArr: [
        "第一条公告",
        "第二条公告第二条公告",
        "第三条公告第三条公告第三条公告第三条公告第三条公告第三条公告第三条公告",
      ],
      number: 0,
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number],
      };
    },
  },
  mounted() {
    this.startMove();
  },
  methods: {
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    },
  },
};
</script>

<style scoped>
/* 美化toutiao */
.toutiao {
  padding: 0 0.625rem;
  overflow: hidden;
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.toutiao-title {
  /* 使用漫画字体 */
  font-family: "Comic Sans MS", cursive, sans-serif;
  float: left;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
}

.textBox {
  color: rgb(197, 5, 5);
  margin: 0 auto;
  max-width: 17.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.textBox p {
  /* 文字超出一行显示省略号 */
  height: 2.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

.text {
  width: 100%;
  position: absolute;
  /* bottom: 0; */
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-enter {
  transform: translateY(20px) scale(1);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-20px) scale(0.8);
  opacity: 0;
}
</style>
