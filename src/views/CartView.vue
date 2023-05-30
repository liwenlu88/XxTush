<template>
  <div class="cart">
    购物车

    <Tabard></Tabard>
  </div>
</template>

<script>
import Tabard from "@/assets/components/common/Tabard.vue";
export default {
  name: "CartView",
  components: {
    Tabard,
  },
};
</script>
