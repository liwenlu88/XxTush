<template>
  <div id="app">
    <router-view></router-view>
    <TabardComp />
  </div>
</template>

<script>
import TabardComp from "@/assets/components/common/TabardComp.vue";
export default {
  name: "App",
  components: {
    TabardComp,
  },
};
</script>
