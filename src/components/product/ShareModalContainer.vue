<template>
	<ion-modal
		ref="modal"
		trigger="share-modal"
		:initial-breakpoint="1"
		:breakpoints="[0, 1]"
		:handle="false"
		:is-open="true"
	>
    <div class="modal share-modal">
			<ion-grid>
				<ion-row class="ion-padding">
					<ion-col>
						<div class="title">
							STEP.1 編輯內容 | <span>請輸入您想推播的內文</span>
						</div>
						<div class="shart-content">
							<ion-textarea label-placement="floating" value="我發現超棒的東西『黑網透氣布吸盤貓掛床』，售價$188！分享給你(最後自動帶連結)"></ion-textarea>
						</div>
						<div class="title">
							STEP.2 選擇分享至--- | <span>請選擇您想曝光的管道</span>
						</div>
						<div class="social">
							<swiper
								:slidesPerView="4.6"
								:spaceBetween="5"
								:freeMode="true"
								class="shareSwiper"
							>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/facebook.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Facebook</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/instagram.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Instagram</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/line.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Line</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/facebook.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">簡訊</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/facebook.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">更多</div>
									</div>
								</swiper-slide>
							</swiper>
						</div>
					</ion-col>
				</ion-row>
				<ion-row style="margin: 0 -5px -5px;">
					<ion-col class="ion-no-padding">
						<ion-list>
							<ion-item href="#" lines="none" button detail="true">
								<ion-label>或 取得購買連結・按鈕</ion-label>
							</ion-item>
						</ion-list>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
  </ion-modal>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonModal, IonTextarea, IonThumbnail, IonList, IonItem, IonLabel } from '@ionic/vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import '@/theme/swiper.css';
</script>
<style scoped>
	ion-modal {
		--height: auto;
	}
	.title {
		font-size: 1.5em;
		margin-bottom: 10px;
	}
	.title span {
		font-size: 0.7em;
		color: var(--ion-text-color-r-dark);
	}
	ion-textarea {
		margin-bottom: 25px;
		--background: #eee;
		--border-radius: 6px;
		--padding-start: 20px;
		--padding-end: 20px;
	}
	.social {
		margin: 0 -25px 0 10px;
		padding: 5px 0 15px;
	}
	.swiper-list {
		display:flex;
		flex-direction: column;
	}
	ion-thumbnail {
		--size: 46px;
	}
	.text {
		margin-top: 5px;
		width: 100%;
	}
	ion-item {
		font-size: 1.6em;
		--background: #eee;
		--detail-icon-font-size: 1.6em;
		--inner-padding-top: 10px;
		--inner-padding-bottom: 10px;
		--inner-padding-start: 10px;
		--inner-padding-end: 20px;
	}
</style>
