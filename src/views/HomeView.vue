<template>
  <div class="home">
    <HeaderComp />
    <IconsComp />
    <ToutiaoComp />
  </div>
</template>

<script>
import HeaderComp from "@/assets/components/home/HeaderComp.vue";
import IconsComp from "@/assets/components/home/IconsComp.vue";
import ToutiaoComp from "@/assets/components/home/ToutiaoComp.vue";
export default {
  name: "HomeView",
  components: {
    HeaderComp,
    IconsComp,
    ToutiaoComp,
  },
};
</script>
