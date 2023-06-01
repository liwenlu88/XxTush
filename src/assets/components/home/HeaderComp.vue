<template>
  <div class="header">
    <ul>
      <li>
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </li>
      <li class="search">
        <input type="search" name="search" id="search" />
        <i class="bi bi-search"></i>
      </li>
      <li>
        <i class="bi bi-person-exclamation"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 美化header */
.header {
  height: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #1a5c03af;
}

/* 美化ul */
.header ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem;
  height: 2.5rem;
}

/* 美化li */
.header ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 美化logo */
.header ul li .logo {
  height: 1.8rem;
}

/* 美化input */
.header ul li input {
  width: 16rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding-left: 2.2rem;
  outline: none;
  font-size: 1.1rem;
}

.search {
  position: relative;
}

/* 美化客服图标 */
.header ul li i {
  font-size: 1.5rem;
}

/* 美化搜索图标 */
.header ul li .bi-search {
  font-size: 1.5rem;
  color: #ccc;
  /* 将搜索图标定位到input框内 */
  position: absolute;
  left: 0.5rem;
}
</style>
