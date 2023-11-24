<template>
  <ion-grid class="ion-no-padding">
		<ion-row class="ion-justify-content-center">
			<ion-col size="8">
				<ion-row>
					<ion-col>
						<h1 class="ion-text-center">小紅</h1>
						<p class="ion-text-center">0910-002-003</p>
					</ion-col>
				</ion-row>
				<ion-row class="social ion-justify-content-between">
					<ion-col class="ion-align-self-center">
						<div class="whiteBg">
							<ion-thumbnail>
								<img src="assets/icon/social/facebook_c.svg" />
							</ion-thumbnail>
						</div>
					</ion-col>
					<ion-col>
						<div class="whiteBg">
							<ion-thumbnail>
								<img src="assets/icon/social/instagram_c.svg" />
							</ion-thumbnail>
						</div>
					</ion-col>
					<ion-col>
						<div class="whiteBg">
							<ion-thumbnail>
								<img src="assets/icon/social/youtube_c.svg" />
							</ion-thumbnail>
						</div>
					</ion-col>
					<ion-col>
						<div class="whiteBg">
							<ion-thumbnail>
								<img src="assets/icon/social/line_g.svg" />
							</ion-thumbnail>
						</div>
					</ion-col>
				</ion-row>
			</ion-col>
		</ion-row>
  </ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonThumbnail } from '@ionic/vue';
</script>

<style scoped>
	h1, p {
		color: var(--color-white);
	}
	h1 {
		font-size: 2.1em;
		margin-top: 14px;
		margin-bottom: 0;
	}
	p {
		margin: 2px 0 14px;
	}
	.social ion-col {
		display: flex;
		justify-content: center;
	}
	.whiteBg {
		width: 3.8em;
		height: 3.8em;
		border-radius: 50%;
		background: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.whiteBg ion-thumbnail {
		--size: 3.2em;
	}
</style>
