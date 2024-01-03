<template>
	<ion-header class="ion-no-border">
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-button id="menu-modal" expand="block">
					<ion-icon :icon="menuOutline" :class="logoColor" />
				</ion-button>
			</ion-buttons>
			<ion-buttons>
				<ion-button>
					<ion-avatar class="logo">
						<ion-img :class="`mainLogo ${changeLogo}`" :src='`assets/icon/logo.svg`' alt="小紅2.0"></ion-img>
						<ion-img :class="`mainLogoWhite ${changeLogo}`" :src='`assets/icon/logo_white.svg`' alt="小紅2.0"></ion-img>
					</ion-avatar>
				</ion-button>
			</ion-buttons>
			<ion-buttons slot="end">
				<ion-button :style="avatarClick">
					<ion-avatar :class="avatarHide">
						<ion-img src='assets/icon/avatar.jpg'></ion-img>
					</ion-avatar>
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
	<ion-modal
		ref="modal"
		trigger="menu-modal"
		:initial-breakpoint="1"
		:breakpoints="[0, 1]"
		:handle="false"
	>
    <div class="modal ion-padding">
			<ion-grid>
				<ion-row class="flex-1">
					<ion-col>
						<div id="menu">
							<ion-list>
								<ion-item href="#" lines="none" button detail="false">
									<ion-img slot="start" src="assets/icon/menu/center.svg" alt="個人資料設定" />
									<ion-label>個人資料設定</ion-label>
								</ion-item>
							</ion-list>
							<ion-list>
								<ion-item href="#" lines="none" button detail="false">
									<ion-img slot="start" src="assets/icon/menu/billing.svg" alt="帳務中心" />
									<ion-label>帳務中心</ion-label>
								</ion-item>
							</ion-list>
							<ion-list>
								<ion-item href="#" lines="none" button detail="false">
									<ion-img slot="start" src="assets/icon/menu/cooperate.svg" alt="代言管理|洽談進度" />
									<ion-badge slot="end">99+</ion-badge>
									<ion-label>代言管理|洽談進度</ion-label>
								</ion-item>
							</ion-list>
							<ion-list>
								<ion-item href="#" lines="none" button detail="false">
									<ion-img slot="start" src="assets/icon/menu/message.svg" alt="訊息紀錄" />
									<ion-badge slot="end">3</ion-badge>
									<ion-label>訊息紀錄</ion-label>
								</ion-item>
							</ion-list>
							<ion-list>
								<ion-item href="#" lines="none" button detail="false">
									<ion-img slot="start" src="assets/icon/menu/faq.svg" alt="教學區" />
									<ion-label>教學區</ion-label>
								</ion-item>
							</ion-list>
						</div>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col>
						<div class="menu-user">
							<ion-item lines="none" button detail="false">
								<ion-avatar slot="start">
									<ion-img src="assets/icon/avatar.jpg" />
								</ion-avatar>
								<ion-label>
									<h1>小紅</h1>
									<p>0910-002-003</p>
								</ion-label>
								<ion-button slot="end">登出</ion-button>
							</ion-item>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
		<div class="red-border"></div>
  </ion-modal>
</template>

<script setup>
import { IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonButton, IonIcon, IonModal, IonAvatar, IonImg, IonList, IonItem, IonLabel, IonBadge } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';
const props = defineProps({
  opacity: { type: Number, default: 1 },
	logoColor: { type: String, default: '' },
	avatarHide: { type: String, default: '' },
	changeLogo: { type: String, default: '' },
	avatarClick: { type: Object, default() { return { display: 'block' } } }
})
</script>

<style scoped>
	ion-toolbar {
		--background: rgba(255, 255, 255, v-bind(props.opacity));
		box-shadow: 0px rgba(255, 255, 255, 0) !important;
		--padding-end: 5px;
		--min-height: 80px;
	}
	ion-modal {
		--height: auto;
		--border-radius: 0;
	}
	.modal {
		background-color: #ececec;
		width: 100%;
	}
	ion-grid {
		height: 53%;
		flex-direction:column;
		display: flex;
	}
	ion-header #menu-modal ion-icon.white {
		animation: changeWhite 0.5s ease-in-out forwards;
	}
		@keyframes changeWhite {
			0% {
				color: var(--color);
			}
			100% {
				color: var(--color-white);
			}
		}
	ion-header .logo {
		position: relative;
	}
	ion-img.mainLogo.changeLogo {
		animation: logoHide 0.5s ease-in-out forwards;
	}
		@keyframes logoHide {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	ion-img.mainLogoWhite {
		position: absolute;
		top: 0;
		opacity: 0;
	}
	ion-img.mainLogoWhite.changeLogo {
		animation: logoShow 0.5s ease-in-out forwards;
	}
		@keyframes logoShow {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	#menu ion-list {
		margin: 8px 0;
	}
	#menu ion-item {
		--padding-start: 0;
		--inner-padding-end: 0;
	}
	#menu ion-img {
		max-width: 30px;
	}
	#menu ion-img[slot='start'] {
		margin-inline: 0 20px;
	}
	#menu .item .sc-ion-label-ios-h, #menu .item .sc-ion-label-md-h {
		--color: gray;
	}
	#menu ion-badge {
		--background: #f17456;
		--padding-bottom: 5px;
	}
	.menu-user {
		margin-top: 20px;
		padding: 10px 0;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0px 0px 10px 1px rgba(128, 128, 128, 0.1);
	}
	.menu-user ion-avatar {
		width: 55px;
		height: 55px;
	}
	.menu-user .item .sc-ion-label-ios-h, .menu-user .item .sc-ion-label-md-h {
		--color: var(--ion-text-color);
	}
	.menu-user .sc-ion-label-ios-s h1, .menu-user .sc-ion-label-md-s h1 {
		font-size: 1.3em;
	}
	.menu-user .sc-ion-label-ios-s>p, .menu-user .sc-ion-label-md-s>p {
		color: var(--ion-text-color-rgb);
		font-size: 0.7em;
		font-family: var(--ion-font-family-bold);
	}
	.menu-user ion-button {
		width: 40%;
    max-width: 70px;
    height: 30px;
		--background: var(--ion-text-color-g);
		--background-hover: var(--ion-text-color-g);
    --background-focused: var(--ion-text-color-g);
		--background-activated: var(--ion-text-color-g);
		--padding-bottom: 5px;
	}
</style>
