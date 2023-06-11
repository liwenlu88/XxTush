<template>
  <div class="icon">
    <ul class="iconComp">
      <li v-for="(item, index) in iconList" :key="index">
        <i
          :class="
            $route.path === item.path
              ? item.selected + ' active'
              : item.active + ''
          "
        ></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IconsComp",
  data() {
    return {
      iconList: [
        {
          id: 1,
          title: "购物券",
          active: "bi bi-credit-card-2-back",
          selected: "bi bi-credit-card-2-back-fill",
        },
        {
          id: 2,
          title: "积分",
          active: "bi bi-award",
          selected: "bi bi-award-fill",
        },
        {
          id: 3,
          title: "会员",
          active: "bi bi bi-mailbox",
          selected: "bi bi-mailbox2",
        },
        {
          id: 4,
          title: "通知",
          active: "bi bi-megaphone",
          selected: "bi bi-megaphone-fill",
        },
        {
          id: 5,
          title: "官方",
          active: "bi bi-person-exclamation",
          selected: "bi bi-person-fill-check",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 美化ul */
.iconComp {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0.313rem 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
}

/* 美化li */
.iconComp li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 1rem;
  color: #666;
}

/* icon图标大小 */
.iconComp li i {
  font-size: 1.5rem;
}
</style>
