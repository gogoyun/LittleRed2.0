<template>
  <div>
		<swiper
			:slidesPerView="3.3"
			:spaceBetween="8"
			:grabCursor="true"
			:slidesOffsetBefore="15"
			class="currentSwiper"
		>
			<swiper-slide v-for="item in props.size" :key="item">
				<div class="item">
					<ion-img src="https://placehold.co/130x130"></ion-img>
					<div class="text">
						<div class="title">{{ overReplace('獨家訂製。壓花玻璃檜木十三字', 14) }}</div>
						<div class="price">NT.650</div>
					</div>
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
import { overReplace } from "@/utils/common.js";
const props = defineProps({
  size: Number
})
</script>

<style scoped>
  ion-img::part(image) {
    border-radius: 6px;
  }
  .text {
    position: relative;
    word-break:break-all;
    min-height: 2.7em;
  }
  .price {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #808080;
    font-family: var(--ion-font-family-number);
    font-weight: bold;
    font-size: 0.9em;
  }
</style>
