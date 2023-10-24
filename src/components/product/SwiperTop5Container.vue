<template>
  <div>
		<swiper
			:slidesPerView="3.3"
			:spaceBetween="12"
			:grabCursor="true"
			:slidesOffsetBefore="15"
			class="top5Swiper"
		>
			<swiper-slide>
				<div>
					<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
					<div class="text ion-text-right">947<span> 筆</span></div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div>
					<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
					<div class="text ion-text-right">687<span> 筆</span></div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div>
					<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
					<div class="text ion-text-right">357<span> 筆</span></div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div>
					<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
					<div class="text ion-text-right">947<span> 筆</span></div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div>
					<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
					<div class="text ion-text-right">947<span> 筆</span></div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { IonImg } from '@ionic/vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
</script>

<style scoped>
	ion-img::part(image) {
		border-radius: 6px;
	}
	.text {
		color: var(--ion-text-color-r-dark);
	}
	.text span {
		font-size: 0.7em;
	}
</style>
