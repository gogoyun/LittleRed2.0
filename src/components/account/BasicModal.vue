<template>
	<ion-modal
		ref="modal"
		trigger="basic-modal"
		class="basic-modal"
	>
		<div class="modal">
			<div class="avatar">
				<ion-thumbnail>
					<img src='assets/icon/avatar.jpg'>
				</ion-thumbnail>
			</div>
			<div class="content">
				<div class="main-image">
					<ion-img src='https://placehold.co/1080x720' />
				</div>
				<ion-grid>
					<ion-row class="ion-justify-content-end">
						<ion-col size="11">
							<div class="score">
								AA+
							</div>
							<div class="middle">
								<ion-button>
									<ion-thumbnail>
										<img src='assets/icon/account/check.png'>
									</ion-thumbnail>
									代表<br>作品
								</ion-button>
								<div class="title">
									小油畫 Little Oil Art
									<div class="phone ion-text-center">
										<div>0910-000-120 | TAIWAN</div>
										<ion-thumbnail>
											<img src='assets/icon/account/phone.svg'>
										</ion-thumbnail>
									</div>
								</div>
							</div>
						</ion-col>
					</ion-row>
					<ion-row class="ion-justify-content-center">
						<ion-col size="10" sizeMd="4">
							<ion-row class="social">
								<ion-col>
									<ion-thumbnail>
										<img src="assets/icon/social/facebook_c.svg" />
									</ion-thumbnail>
								</ion-col>
								<ion-col>
									<ion-thumbnail>
										<img src="assets/icon/social/instagram_c.svg" />
									</ion-thumbnail>
								</ion-col>
								<ion-col>
									<ion-thumbnail>
										<img src="assets/icon/social/youtube_c.svg" />
									</ion-thumbnail>
								</ion-col>
								<ion-col>
									<ion-thumbnail>
										<img src="assets/icon/social/line_c.svg" />
									</ion-thumbnail>
								</ion-col>
								<ion-col>
									<ion-thumbnail>
										<img src="assets/icon/social/messenger_c.svg" />
									</ion-thumbnail>
								</ion-col>
							</ion-row>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col class="ion-padding-horizontal">
							<div class="profit_bg">
								<ion-row class="ion-align-items-center">
									<ion-col class="profit ion-text-center">
										<div class="value">672,027</div>
										<div class="title">潛在受眾人數</div>
									</ion-col>
									<ion-col size="auto">
										<div class="border-right"></div>
									</ion-col>
									<ion-col class="profit ion-text-center">
										<div class="value">94,724</div>
										<div class="title">整體社群</div>
									</ion-col>
									<ion-col size="auto">
										<div class="border-right"></div>
									</ion-col>
									<ion-col class="profit ion-text-center">
										<div class="value">13.5%</div>
										<div class="title">社群互動率</div>
									</ion-col>
								</ion-row>
							</div>
						</ion-col>
					</ion-row>
				</ion-grid>
				<div class="fixed-bottom">
					<ion-button size="small" shape="round" class="sendbtn">儲存我的名片</ion-button>
					<ion-button size="small" shape="round" class="closebtn" @click="cancel()">關閉</ion-button>
				</div>
			</div>
		</div>
	</ion-modal>
</template>
<script setup>
import { ref } from 'vue';
import { IonGrid, IonModal, IonThumbnail, IonImg, IonButton, IonRow, IonCol } from '@ionic/vue';
const modal = ref();
const cancel = () => modal.value.$el.dismiss(null, 'cancel');
</script>
<style scoped>
	ion-modal {
		--width: 100%; 
    --height: 96%;
		--background: rgba(0,0,0,0);
  }
	.modal {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.avatar {
		position: absolute;
		top: 0;
		right: 10%;
		background: #fff;
		border-radius: 50%;
		padding: 5px;
	}
	.avatar ion-thumbnail {
		--border-radius: 50%;
		--size: 7.6em;
	}

	.content {
		width: 90%;
		height: calc(95% - 2em);
		margin-top: 2em;
		border-radius: 6px;
		background: #fff;
		box-shadow: 0 0 8px 5px rgb(0 0 0 / 0.3);
	}
	.main-image ion-img::part(image) {
		border-radius: 6px 6px 0 0;
	}
	.score {
		display: flex;
		align-items: center;
		max-height: 50px;
		font-size: 4em;
		font-family: var(--ion-font-family-score);
		color: var(--ion-text-color-r-dark);
		margin-top: -10px;
	}
	.middle {
		display: flex;
		align-items: center;
	}
	.middle ion-button {
		font-size: 1.2em;
		--padding-top: 8px;
		--padding-bottom: 8px;
		--padding-start: 8px;
		--padding-end: 8px;
		--border-radius: 8px;
		--background: var(--ion-text-color-r-light);
		--background-hover: var(--ion-text-color-r-light);
		--background-focused: var(--ion-text-color-r-light);
		--background-activated: var(--ion-text-color-r-light);
	}
	.middle ion-thumbnail {
		--size: 1.2em;
	}
	.title {
		width: 100%;
		font-size: 1.7em;
		margin-left: 5px;
	}
	.title .phone {
		display: flex;
		justify-content: center;
		font-size: 0.75em;
		font-family: var(--ion-font-family-score);
		color: #39b04a;
	}
	.phone ion-thumbnail {
		--size: 1.6em;
		margin-left: 5px;
	}
	.social ion-col {
		display: flex;
		justify-content: center;
	}
	.social ion-thumbnail {
		--size: 4em;
	}
	.profit_bg {
		background: #eee;
		border-radius: 8px;
		margin-top: 10px;
	}
	.border-right {
		background: #808080;
		width: 1px;
		height: 3.2em;
	}
	.profit {
		padding: 1.8em 10px;
		color: var(--ion-text-color-purple);
	}
	.profit .title {
		font-size: 1em;
		margin: 3px 0 0;
	}
	.profit .value {
		font-family: var(--ion-font-family-number);
		font-weight: bold;
		font-size: 1.8em;
	}
	.fixed-bottom {
		position: absolute;
		bottom: calc(5% - 2em); /* sync content 100% - height */
		width: 90%; /* sync content width */
		display: flex;
		justify-content: center;
		padding: 0 0 5vh;
	}
	.fixed-bottom ion-button {
		font-size: 1.7em;
		--box-shadow: none;
		--padding-top: 15px;
		--padding-bottom: 15px;
		--padding-start: 1.2em;
		--padding-end: 1.2em;
		margin-inline-start: 5px;
		margin-inline-end: 5px;
	}
	.fixed-bottom .closebtn {
		--background: #6fbbac;
		--background-hover: #6fbbac;
		--background-focused: #6fbbac;
		--background-activated: #6fbbac;
	}
	.fixed-bottom .sendbtn {
		--background: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	}
</style>