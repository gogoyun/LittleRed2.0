<template>
	<ion-grid>
		<ion-row class="ion-justify-content-center">
			<ion-col sizeMd="4">
				<ion-row>
					<ion-col>
						<div class="logo">
							<ion-thumbnail>
								<img src='assets/icon/logo.svg' alt="小紅2.0">
							</ion-thumbnail>
						</div>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col class="ion-no-padding">
						<div class="content">
							<div class="photo">
								<ion-thumbnail>
									<img src='assets/icon/avatar.jpg'>
								</ion-thumbnail>
								<div class="camera">
									<ion-thumbnail>
										<img src='assets/icon/account/camera.svg'>
									</ion-thumbnail>
								</div>
							</div>
							<div class="slider">
								<SwiperFirstSetting />
							</div>
						</div>
					</ion-col>
				</ion-row>
			</ion-col>
		</ion-row>
		<div class="border-bottom"></div>
	</ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonThumbnail } from '@ionic/vue';
import SwiperFirstSetting from '@/components/account/SwiperFirstSetting.vue';
</script>
<style scoped>
	ion-grid {
		position: relative;
		height: 100%;
	}
	.logo ion-thumbnail {
		background:var(--color-white);
		--border-radius: 50%;
		--size: 55px;
		padding: 4px;
	}
	.content {
		position: relative;
		margin: 0 -10px;
	}
	.photo {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9;
	}
	.photo > ion-thumbnail {
		--border-radius: 50%;
		--size: 100px;
	}
	.photo .camera {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.photo .camera ion-thumbnail {
		--size: 35px;
	}
	.slider {
		padding-top: 50px;
	}
	.border-bottom {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 8vh;
		background: var(--color);
	}
</style>