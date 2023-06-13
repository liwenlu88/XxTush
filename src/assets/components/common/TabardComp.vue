<template>
  <div class="tabard">
    <ul>
      <li
        v-for="(item, index) in routerList"
        :key="index"
        @click="switchTab(item.path)"
      >
        <i
          :class="
            $route.path === item.path
              ? item.selected + ' active'
              : item.active + ''
          "
        ></i>
        <span :class="$route.path === item.path ? 'active' : ''">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        {
          name: "首页",
          path: "/",
          active: "bi bi-house",
          selected: "bi bi-house-fill",
        },
        {
          name: "分类",
          path: "/list",
          active: "bi bi-list",
          selected: "bi bi-view-list",
        },
        {
          name: "购物车",
          path: "/cart",
          active: "bi bi-cart-plus",
          selected: "bi bi-cart-plus-fill",
        },
        {
          name: "我",
          path: "/my",
          active: "bi bi-person-check",
          selected: "bi bi-person-check-fill",
        },
      ],
    };
  },
  methods: {
    switchTab(path) {
      //判断是否点击的是当前路由
      if (this.$route.path === path) return;
      //对应跳转页面
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
.tabard {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  border-top: 1px solid #ccc;
  z-index: 999;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.active {
  color: red;
  font-weight: bold;
}
</style>
