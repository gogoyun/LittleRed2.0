<template>
	<div class="wrapper">
		<swiper
			:modules="modules"
			:pagination="pagination"
			class="centerSwiper"
			:initialSlide="1"
		>
			<swiper-slide>
				<div class="swiper-list">
					<h1 class="title ion-text-center">形式・分析建議</h1>
					<div class="chart">
						<ChartBarContainer />
					</div>
					<div class="message">
						<div class="title ion-text-center">Be Better！</div>
						<div class="describe">
							給予文字訊息的建議，內容大約限制在三十至五十個中文字以內，含標點符號。
						</div>
						<div class="button ion-text-end">
							<ion-button size="small">推薦代言</ion-button>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="swiper-list">
					<h1 class="title ion-text-center">商品・類別建議</h1>
					<div class="chart">
						<ChartBubbleContainer />
					</div>
					<div class="message">
						<div class="title red ion-text-center">Be Better！</div>
						<div class="describe">
							給予文字訊息的建議，內容大約限制在三十至五十個中文字以內，含標點符號。
						</div>
						<div class="button red ion-text-end">
							<ion-button size="small">推薦代言</ion-button>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { IonButton } from "@ionic/vue";
import ChartBarContainer from '@/components/center/ChartBarContainer.vue';
import ChartBubbleContainer from '@/components/center/ChartBubbleContainer.vue';
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
	.wrapper {
		margin-top: 80px; /* header height */
		width: 100%;
		height: 100%;
	}
	.swiper-list {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
	}
	h1.title {
		color: var(--color-white);
		font-size: 1.5em;
	}
	.message {
		background: rgba(226, 226, 226, 0.2);
		border-top: 1px solid rgba(255, 255, 255, 1);
		border-bottom: 5px solid rgba(255, 255, 255, 1);
		padding: 2.5em 1.5em 1.5em;
	}
	.message .title {
		font-size: 2em;
		color: var(--ion-text-color-g);
	}
	.message .title.red {
		color: var(--ion-text-color-r-light);
	}
	.message .describe {
		font-size: 1.5em;
		line-height: 1.6em;
		color: var(--color-white);
		padding: 15px 2em 0;
	}
	.button ion-button {
		--background: var(--ion-text-color-g);
		--background-hover: var(--ion-text-color-g);
		--background-activated: var(--ion-text-color-g);
		--background-focused: var(--ion-text-color-g);
		--padding-top: 15px;
		--padding-bottom: 15px;
		--padding-start: 12px;
		--padding-end: 12px;
		font-size: 1em;
	}
	.button.red ion-button {
		--background: var(--ion-text-color-r-light);
		--background-hover: var(--ion-text-color-r-light);
		--background-activated: var(--ion-text-color-r-light);
		--background-focused: var(--ion-text-color-r-light);
	}
</style>
