<template>
	<ion-modal
		ref="modal"
		:initial-breakpoint="1"
		:breakpoints="[0, 1]"
		:handle="false"
		:is-open="isOpen"
		@ionModalDidDismiss="setOpen('isOpen', false)"
		v-if="notReady"
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
											<img src="assets/icon/social/product/facebook.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Facebook</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/product/instagram.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Instagram</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/product/line.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">Line</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/product/sms.svg" />
										</ion-thumbnail>
										<div class="text ion-text-center">簡訊</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="swiper-list ion-align-items-center">
										<ion-thumbnail>
											<img src="assets/icon/social/product/more.svg" />
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
							<ion-item lines="none" button detail="true" @click="setOpen('isOpenElse', true)">
								<ion-label>或 取得購買連結・按鈕</ion-label>
							</ion-item>
						</ion-list>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
	</ion-modal>
	<ion-modal
		ref="modal"
		:initial-breakpoint="1"
		:breakpoints="[0, 1]"
		:handle="false"
		:is-open="isOpen"
		@ionModalDidDismiss="setOpen('isOpen', false)"
		v-else
	>
		<div class="modal notReady-modal">
			<ion-grid>
				<ion-row class="ion-padding">
					<ion-col class="ion-text-center">
						<ion-icon :icon="alertCircleOutline" />
						<div class="msg">
							即將前往設定<span>「撥款帳戶及發票資訊」</span><br>
							請填寫真實個人資料
							<p>以確保您能順利・安全收到您的代言分潤</p>
						</div>
						<ion-button size="small" shape="round" class="setbtn">設定帳戶及發票資訊</ion-button>
						<div></div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
	</ion-modal>
	<!-- 我要代言 -->
	<ShareElse />
</template>

<script setup>
import { ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonTextarea, IonThumbnail, IonList, IonItem, IonLabel, IonModal } from '@ionic/vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import '@/theme/swiper.css';
// import modal
import ShareElse from "./ShareElseModal.vue";
import { isOpen, setOpen } from '@/utils/common.js';
//not ready
import { alertCircleOutline } from 'ionicons/icons';
const notReady = ref(false);
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
		font-size: 1.5em;
		--background: #eee;
		--detail-icon-font-size: 1.6em;
		--inner-padding-top: 5px;
		--inner-padding-bottom: 5px;
		--inner-padding-start: 10px;
		--inner-padding-end: 20px;
	}
	/* not reday */
	ion-icon {
		font-size: 3.8em;
	}
	.msg {
		margin-top: 10px;
		font-size: 1.5em;
		color: var(--ion-text-color-purple);
	}
	.msg span {
		color: var(--ion-text-color-r-light);
	}
	.msg p {
		color: var(--color);
		font-size: 0.75rem;
		margin: 30px 0 25px;
	}
	.setbtn {
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		font-size: 1.4em;
		--box-shadow: none;
		--padding-top: 16px;
		--padding-bottom: 16px;
		margin: 0 0 20px;
	}
</style>
