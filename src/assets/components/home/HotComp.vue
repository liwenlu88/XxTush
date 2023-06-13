<template>
	<div class="hotlist">
		<h2 class="hotlistTitle">
			<span> · </span>
			爆款推荐
			<span> · </span>
		</h2>
		<ul class="productList">
			<li v-for="(item, index) in hotList" :key="index">
				<div class="productImage">
					<img :src="item.image" alt="" />
				</div>
				<div class="productTitle">{{ item.title }}</div>
				<div class="productDec">{{ item.dec }}</div>
				<div class="productPrice">￥{{ item.price }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HotComp',
	data() {
		return {
			hotList: [
				{
					id: 1,
					title: '【京东超市】奥利奥软点小草莓夹心饼干 137g',
					dec: '口感酥脆，奶香浓郁，软点夹心，美味可口',
					image: './image/swiper/1.jpg',
					price: '9.9',
				},
				{
					id: 2,
					title: '【京东超市】',
					dec: '口感酥脆，奶香浓郁',
					image: './image/swiper/2.jpg',
					price: '99',
				},
			],
		};
	},
};
</script>

<style scoped>
.hotlistTitle {
	height: 3.125rem;
	line-height: 3.125rem;
	text-align: center;
	padding: 0 0.625rem;
	background-color: #fff;
	margin: 1rem 0;
}

.hotlist span {
	color: #ff6700;
	font-size: 2rem;
	height: 3.125rem;
	line-height: 3.125rem;
	font-weight: 700;
}

/* 美化productList */
.productList {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 0.625rem;
	background-color: #fff;
}

.productList li {
	width: 48%;
	margin-bottom: 0.625rem;
	background-color: #fff;
}

.productImage {
	width: 100%;
	height: 12.5rem;
	overflow: hidden;
	border-radius: 0.313rem;
}

.productImage img {
	width: 100%;
	height: 100%;
	border-radius: 0.313rem;
}

.productTitle {
	font-size: 0.875rem;
	color: #333;
	margin-top: 0.313rem;
	height: 1.5rem;
	line-height: 1.25rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.productDec {
	font-size: 0.75rem;
	color: #999;
	height: 1.25rem;
	line-height: 1.25rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.productPrice {
	font-size: 0.875rem;
	color: #ff6700;
	height: 1.25rem;
	line-height: 1.25rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
