<template>
	<ion-grid>
		<ion-row class="ion-justify-content-center">
			<ion-col size="9">
				<ion-row>
					<ion-col class="ion-padding-vertical mT90 logo">
						<ion-thumbnail>
							<img src='assets/icon/logo.svg' alt="小紅2.0">
						</ion-thumbnail>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col>
						<h1 class="ion-text-center">登入 LOGIN</h1>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col class="login">
						<ion-item lines="full">
							<ion-thumbnail slot="start">
								<img src="assets/icon/login/account_gray.svg" />
							</ion-thumbnail>
							<ion-input label="帳&emsp;號" placeholder="09-"></ion-input>
						</ion-item>
						<ion-item lines="full" class="passwd">
							<ion-thumbnail slot="start">
								<img src="assets/icon/login/password_gray.svg" />
							</ion-thumbnail>
							<ion-input label="密&emsp;碼"></ion-input>
							<ion-button slot="end" fill="clear">忘記密碼</ion-button>
						</ion-item>
						<div class="checkbox">
							<ion-checkbox label-placement="end">記住我的資料</ion-checkbox>
						</div>
						<ion-button size="small" shape="round" expand="block" class="sendbtn">登&emsp;入</ion-button>
					</ion-col>
				</ion-row>
			</ion-col>
		</ion-row>
		<ion-row class="ion-padding-vertical">
			<ion-col class="ion-align-self-center">
        <div style="height: 0.5px;width: 100%;background: #808080;"></div>
      </ion-col>
			<ion-col size="auto">
				<div style="color: #808080;">或&emsp;以其他帳號登入</div>
			</ion-col>
			<ion-col></ion-col>
		</ion-row>
		<ion-row class="ion-justify-content-center">
			<ion-col size="9">
				<ion-row>
					<ion-col>
						<ion-thumbnail>
							<img src="assets/icon/social/facebook.svg" />
						</ion-thumbnail>
					</ion-col>
					<ion-col>
						<ion-thumbnail>
							<img src="assets/icon/social/instagram.svg" />
						</ion-thumbnail>
					</ion-col>
					<ion-col>
						<ion-thumbnail>
							<img src="assets/icon/social/youtube.svg" />
						</ion-thumbnail>
					</ion-col>
					<ion-col>
						<ion-thumbnail>
							<img src="assets/icon/social/line.svg" />
						</ion-thumbnail>
					</ion-col>
				</ion-row>
			</ion-col>
		</ion-row>
			
	</ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonThumbnail, IonItem, IonInput, IonButton, IonCheckbox } from '@ionic/vue';
</script>
<style scoped>
	ion-grid {
		height: 100%;
		flex-direction:column;
		display: flex;
		background: #ebdcce;
	}
	.mT90 {
		margin-top: 80px;
	}
	.logo {
		display: flex;
		justify-content: center;
	}
	.logo ion-thumbnail {
		--size: 60px;
	}
	h1 {
		font-size: 1.7em;
	}
	.login ion-thumbnail {
		--size: 15px;
		margin-inline-end: 10px;
	}
	.login ion-item {
		font-size: 1.2em;
		--border-color: #808080;
		margin-bottom: 10px;
		--inner-padding-end: 0;
		--inner-padding-bottom: 0;
	}
	.passwd ion-button {
		--color: var(--ion-text-color-r-light);
		font-size: 0.8em;
		--padding-end: 0;
	}
	.checkbox {
		display: flex;
		justify-content: end;
	}
	ion-checkbox {
		--size: 15px;
		color: #808080;
	}
	ion-checkbox::part(container) {
    border-radius: 2px;
    border: 1px solid #808080;
  }
	.sendbtn {
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		font-size: 1.4em;
		--box-shadow: none;
		margin-top: 30px;
		--padding-top: 15px;
		--padding-bottom: 15px;
	}
</style>