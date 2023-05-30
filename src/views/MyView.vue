<template>
  <div class="my">
    个人中心

    <Tabard></Tabard>
  </div>
</template>

<script>
import Tabard from "@/assets/components/common/Tabard.vue";
export default {
  name: `MyView`,
  comments: {
    Tabard,
  },
};
</script>
