<template>
	<div>
		<swiper
			:modules="modules"
			:pagination="pagination"
			class="mainSwiper"
		>
			<swiper-slide>
				<div class="swiper-list">
					<div class="tag ion-text-center">專屬打造</div>
					<div class="half-circle"></div>
					<div class="info-area" style="background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://image-cdn-flare.qdm.cloud/q676af567a5c1f/image/data/2023_%E6%AA%9C%E6%9C%A8%E7%B3%BB%E5%88%97/_DSC0622_2000_02.jpg');">
						<div class="profit">
							<div class="title">每筆訂單 可分潤金額</div>
							<div class="value"><span class="unit">$&ensp;</span><span class="price">6,999</span></div>
						</div>
						<div class="order">
							<div class="title">已售出訂單</div>
							<div class="value"><span class="price">1,929</span><span class="unit">&ensp;筆</span></div>
						</div>
						<div class="product">
							<div class="title">獨家訂製。壓花玻璃檜木置物盤</div>
							<div class="button">
								<ion-button size="small">影片</ion-button>
								<ion-button size="small">圖文</ion-button>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="swiper-list">
					<div class="tag ion-text-center">專屬打造</div>
					<div class="half-circle"></div>
					<div class="info-area" style="background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://image-cdn-flare.qdm.cloud/q676af567a5c1f/image/data/2023_%E6%AA%9C%E6%9C%A8%E7%B3%BB%E5%88%97/_DSC0622_2000_02.jpg');">
						<div class="profit">
							<div class="title">每筆訂單 可分潤金額</div>
							<div class="value"><span class="unit">$&ensp;</span><span class="price">6,999</span></div>
						</div>
						<div class="order">
							<div class="title">已售出訂單</div>
							<div class="value"><span class="price">1,929</span><span class="unit">&ensp;筆</span></div>
						</div>
						<div class="product">
							<div class="title">獨家訂製。壓花玻璃檜木置物盤</div>
							<div class="button">
								<ion-button size="small">影片</ion-button>
								<ion-button size="small">圖文</ion-button>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="swiper-list">
					<div class="tag ion-text-center">專屬打造</div>
					<div class="half-circle"></div>
					<div class="info-area" style="background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://image-cdn-flare.qdm.cloud/q676af567a5c1f/image/data/2023_%E6%AA%9C%E6%9C%A8%E7%B3%BB%E5%88%97/_DSC0622_2000_02.jpg');">
						<div class="profit">
							<div class="title">每筆訂單 可分潤金額</div>
							<div class="value"><span class="unit">$&ensp;</span><span class="price">6,999</span></div>
						</div>
						<div class="order">
							<div class="title">已售出訂單</div>
							<div class="value"><span class="price">1,929</span><span class="unit">&ensp;筆</span></div>
						</div>
						<div class="product">
							<div class="title">獨家訂製。壓花玻璃檜木置物盤</div>
							<div class="button">
								<ion-button size="small">影片</ion-button>
								<ion-button size="small">圖文</ion-button>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { IonButton } from "@ionic/vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '@/theme/swiper.css';
// import required modules
import { Pagination } from "swiper/modules";
const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '"></span>';
	},
};
const modules = [Pagination]
</script>
<style scoped>
	.swiper-list {
		margin: 0 8px;
		padding: 10px 10px 28px;
		position: relative;
	}
	.tag {
		width: 42px;
		padding: 2px 8px;
		border-radius: 8px;
		background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		position: absolute;
		top: 0;
		left: 0;
		line-height: 1.5em;
		color: var(--color-white);
	}
	.half-circle {
		width: 40px;
		height: 20px;
		background: var(--ion-text-color-r-dark);
		border-radius: 40px 40px 0 0;
		position: absolute;
		top: 10px;
		right: 10%;
		transform: rotate(180deg);
	}
	.info-area {
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: top;
		background-size: cover;
		border-radius: 8px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding-left: 30px;
		padding-top: 15px;

	}
	.profit, .order {
		color: #fff;
		margin: 0 10px 15px;
	}
	.profit .title, .order .title {
		margin-bottom: 5px;
	}
	.profit .value, .order .value {
		font-size: 2.4em;
		display: flex;
	}
	.profit .value .price, .order .value .price {
		font-family: var(--ion-font-family-number);
		font-weight: bold;
	}
	.profit .value .unit, .order .value .unit {
		font-size: 0.5em;
		padding-top: 5px;
	}
	.product {
		width: 100%;
		margin: 0 10px 15px;
	}
	.product .title {
		margin-bottom: 10px;
		color: #fff;
	}
	ion-button {
		--color: var(--color);
		background: #ccc;
		--background: #ccc;
		--background-hover: #ccc;
		--background-activated: #ccc;
		--background-focused: #ccc;
		--box-shadow: none;
		border-radius: 8px;
	}
</style>
