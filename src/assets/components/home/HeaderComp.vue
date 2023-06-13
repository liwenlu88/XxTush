<template>
  <div class="headers">
    <div class="searchbox">
      <ul>
        <li>
          <img src="@/assets/logo.png" alt="logo" class="logo" />
        </li>
        <li class="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="在这搜索哦～"
          />
          <i class="bi bi-search"></i>
        </li>
        <li>
          <i class="bi bi-headset"></i>
        </li>
      </ul>

      <!-- 导航 -->
      <ly-tabs v-model="value" id="ly-tabs">
        <ly-tab-item
          v-for="(item, index) in topBarList"
          :key="index"
          :name="index == value ? value : index"
          :title="item.title"
        />
      </ly-tabs>
    </div>
    <!-- 轮播图 -->
    <HeaderSwiper />
  </div>
</template>

<script>
import { LyTabs, LyTabItem } from "ly-tab";
import HeaderSwiper from "@/assets/components/home/HeaderSwiper.vue";
export default {
  components: {
    LyTabs,
    LyTabItem,
    HeaderSwiper,
  },
  data() {
    return {
      value: "0",
      topBarList: [
        {
          title: "推荐",
        },
        {
          title: "专业图书",
        },
        {
          title: "博学",
        },
        {
          title: "童书",
        },
        {
          title: "工具书",
        },
        {
          title: "手册",
        },
        {
          title: "小说",
        },
        {
          title: "学习用书",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 美化header */
.searchbox {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

/* 美化ul */
.searchbox ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem;
  height: 2.5rem;
  background-color: #cfe52caf;
}

/* 美化li */
.searchbox ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 美化logo */
.searchbox ul li .logo {
  height: 2.2rem;
}

/* 美化input */
.searchbox ul li input {
  width: 16rem;
  height: 1.8rem;
  border-radius: 0.9rem;
  border: 1px solid #ccc;
  padding-left: 2.2rem;
  padding-right: 1rem;
  outline: none;
  font-size: 1.1rem;
}

.searchbox .search {
  position: relative;
}

/* 美化客服图标 */
.searchbox ul li i {
  font-size: 1.5rem;
  color: rgb(222, 72, 72);
}

/* 美化搜索图标 */
.searchbox ul li .bi-search {
  font-size: 1.2rem;
  color: #ccc;
  /* 将搜索图标定位到input框内 */
  position: absolute;
  left: 0.5rem;
}
</style>
