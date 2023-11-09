<template>
  <div>
		<swiper
			:slidesPerView="1.2"
			:spaceBetween="12"
			:centeredSlides="true"
			:grabCursor="true"
			:initialSlide="1"
			class="firstSetting"
		>
			<swiper-slide>
				<div class="slider welcome">
					<div class="title ion-text-center">
						HELLO<br>
						歡迎加入小紅計畫
					</div>
					<div class="form-group">
						<div class="slogen">Let's Get Started!</div>
						<ion-item lines="full">
							<ion-input placeholder="小紅暱稱"></ion-input>
						</ion-item>
						<ion-item lines="full">
							<ion-input placeholder="E-mail sample@gmail.com"></ion-input>
						</ion-item>
						<ion-item lines="full">
							<ion-input placeholder="0911-234-567"></ion-input>
						</ion-item>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="slider expertise">
					<div class="title ion-text-center">
						請選擇較符合你的選項
						<p>以下呈現方式，哪個較屬於你的專長？</p>
					</div>
					<div class="nest-slider">
						<swiper
						:modules="modules"
						:pagination="pagination"
						class="nestSwiper"
						>
							<swiper-slide v-for="item in expertiseData" :key="item">
								<div class="items">
									<div class="item" v-for="item2 in item" :key="item2" @click="active($event)">
										<ion-thumbnail>
											<img :src="`assets/icon/account/${ item2.image }`" />
										</ion-thumbnail>
										<div class="title ion-text-center">{{ item2.title }}</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
					<div class="skip flex-1">
						<ion-button fill="clear" size="small" id="finish-modal">跳過</ion-button>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="slider interest">
					<div class="scroll">
						<div class="title">
							<p>你最有興趣/專業的項目（請選擇5項）</p>
						</div>
						<ion-row class="ion-justify-content-center ion-align-items-center">
							<ion-col size="auto" v-for="item in interestData" :key="item">
								<div class="item" @click="active($event)">
									<ion-thumbnail>
										<img :src="`assets/icon/account/${ item.image }`" />
									</ion-thumbnail>
									<div class="title ion-text-center">{{ item.title }}</div>
								</div>
							</ion-col>
						</ion-row>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<ion-modal
		ref="modal"
		trigger="finish-modal"
	>
		<div class="modal">
			<ion-row class=ion-justify-content-center>
				<ion-col size="12" class="logo">
					<ion-thumbnail>
						<img src='assets/icon/logo.svg' alt="小紅2.0">
					</ion-thumbnail>
				</ion-col>
				<ion-col size="12">
					<div class="title ion-text-center">您可以開始使用小紅計畫</div>
				</ion-col>
				<ion-col size="12" class="buttons">
					<ion-button shape="round" fill="clear" expand="block" class="accountBtn">前往設定帳務及社群</ion-button>
					<ion-button shape="round" fill="clear" expand="block" class="dashBtn">前往首頁</ion-button>
				</ion-col>
			</ion-row>
		</div>
	</ion-modal>
</template>

<script setup>
import { IonItem, IonInput, IonThumbnail, IonButton, IonRow, IonCol, IonModal } from '@ionic/vue';
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
import { expertiseData, interestData } from "@/utils/commonData.js";
const active = (event) => {
	if(event.target.parentNode.parentNode.classList.contains('active')){
		event.target.parentNode.parentNode.classList.remove('active');
	}else{
		event.target.parentNode.parentNode.classList.add('active');
	}
}
</script>

<style scoped>
	.slider {
		height: calc(92vh - 125px);
		background: var(--color-white);
		border-radius: 6px 6px 0 0;
		padding: 100px 20px 10px;
	}
	.title {
		font-size: 1.7em;
	}
	.title p {
		font-size: 0.65em;
		margin: 10px 0;
		color: #808080;
	}
	.form-group {
		margin-top: 10vh;
	}
	.slogen {
		color: var(--ion-text-color-r-light);
		font-size: 1.8em;
		font-family: Arial Black, Arial Bold, sans-serif;
	}
	ion-input {
		--color: var(--color);
	}
	.expertise {
		display: flex;
		flex-direction: column;
		background: #eee;
	}
	ion-item {
		font-size: 1em;
		--border-color: #808080;
		--inner-padding-top: 10px;
		--inner-padding-end: 0;
		--inner-padding-bottom: 0;
		--padding-start: 5px;
		--min-height: 35px;
	}
	.items {
		display: flex;
		justify-content: center;
		height: 25vh;
		max-height: 300px;
	}
	.nest-slider {
		margin-top: 30px;
	}
	.nest-slider .item {
		margin: 0 15px;
	}
	.nest-slider ion-thumbnail {
		background: var(--color-white);
		--border-radius: 50%;
		--size: 25vw;
		max-width: 90px;
		max-height: 90px;
	}
	.nest-slider .active ion-thumbnail {
		background: rgba(241, 116, 86, 0.2);
	}
	.item .title {
		margin-top: 10px;
		font-size: 1.2em;
	}
	.skip {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		margin-bottom: 5vh;
	}
	.skip ion-button{
		color: #808080;
		font-size: 1.2em;
		border-bottom: 2px solid #ccc;
		--padding-start: 5px;
		--padding-end: 5px;
	}
	.scroll {
		overflow-y: auto;
		height: 100%;
	}
	.interest {
		padding-left: 0;
		padding-right: 0;
	}
	.interest > .scroll > .title {
		margin: 0 20px 20px;
	}
	.interest .item {
		padding: 0 5px 5px;
	}
	.interest ion-thumbnail {
		background: #f7f8f8;
		--border-radius: 50%;
		--size: 25vw;
		max-width: 70px;
		max-height: 70px;
	}
	.interest .active ion-thumbnail {
		background: rgba(241, 116, 86, 0.2);
	}
	.interest .item .title {
		font-size: 1em;
	}
	ion-modal {
		--width: 80vw;
    --max-width: 280px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	}
	.modal {
		padding: 20px;
	}
	.logo {
		display: flex;
		justify-content: center;
	}
	.modal .buttons {
		margin-top: 5px;
	}
	.modal ion-button {
		margin-top: 15px;
	}
	ion-button.accountBtn {
		color: var(--color-white);
		--background: linear-gradient(90deg, var(--ion-text-color-g), #59aa9b);
		--background-hover: linear-gradient(90deg, var(--ion-text-color-g), #59aa9b);
		--background-activated: linear-gradient(90deg, var(--ion-text-color-g), #59aa9b);
		--background-focused: linear-gradient(90deg, var(--ion-text-color-g), #59aa9b);
		min-height: 47px;
	}
	ion-button.dashBtn {
		color: var(--color-white);
		--background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark));
		min-height: 47px;
	}
</style>
