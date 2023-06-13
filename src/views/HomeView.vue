<template>
	<div class="home">
		<HeaderComp />
		<IconsComp />
		<ToutiaoComp />
		<HotComp />
	</div>
</template>

<script>
import HeaderComp from '@/assets/components/home/HeaderComp.vue';
import IconsComp from '@/assets/components/home/IconsComp.vue';
import ToutiaoComp from '@/assets/components/home/ToutiaoComp.vue';
import HotComp from '@/assets/components/home/HotComp.vue';

export default {
	name: 'HomeView',
	components: {
		HeaderComp,
		IconsComp,
		ToutiaoComp,
		HotComp,
	},
};
</script>

<style scoped>
.home {
	margin-bottom: 60px;
}
</style>
