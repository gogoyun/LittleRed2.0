<template>
	<ion-modal
		ref="modal"
		trigger="open-modal"
		:handle="false"
		:is-open="true"
		:initial-breakpoint="0.1"
		:breakpoints="[0.1, 0.5, 0.87]"
		:backdrop-dismiss="false"
		:backdrop-breakpoint="0.1"
	>
		<div class="modal">
			<div class="top">
				<div class="bg">
					<ion-img src="assets/image/register_top.svg"></ion-img>
				</div>
				<div class="register-title">
					<ion-button fill="clear">
						我要註冊小紅帳號&ensp;
						<ion-thumbnail slot="end">
							<img src="assets/icon/logo_white.svg" />
						</ion-thumbnail>
					</ion-button>
				</div>
			</div>
			<ion-grid>
				<ion-row class="ion-justify-content-center">
					<ion-col size="9" sizeMd="6" class="ion-no-padding">
						<ion-row>
							<ion-col class="ion-no-padding">
								<h1 class="ion-text-center">加入小紅 SIGN UP</h1>
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col class="register">
								<ion-row class="ion-align-items-center">
									<ion-col class="ion-no-padding">
										<ion-item lines="full">
											<ion-thumbnail slot="start">
												<img src="assets/icon/login/account.svg" />
											</ion-thumbnail>
											<ion-input placeholder="註冊手機號碼&ensp;09-"></ion-input>
										</ion-item>
									</ion-col>
									<ion-col class="ion-no-padding" size="auto">
										<ion-button size="small" shape="round" class="sendmsg">發送驗證簡訊</ion-button>
									</ion-col>
								</ion-row>
								<ion-row class="ion-align-items-center">
									<ion-col class="ion-no-padding">
										<ion-item lines="full">
											<ion-thumbnail slot="start">
												<img src="assets/icon/login/validcode.svg" />
											</ion-thumbnail>
											<ion-input placeholder="輸入驗證碼" type="password"></ion-input>
										</ion-item>
									</ion-col>
									<ion-col class="ion-no-padding" size="auto">
										<ion-button size="small" shape="round" class="resendmsg">重新發送驗證</ion-button>
									</ion-col>
								</ion-row>
								<ion-row>
									<ion-col class="ion-no-padding">
										<ion-item lines="full">
											<ion-thumbnail slot="start">
												<img src="assets/icon/login/password.svg" />
											</ion-thumbnail>
											<ion-input placeholder="密碼&ensp;半形英文數字符號8字以上" type="password"></ion-input>
										</ion-item>
									</ion-col>
								</ion-row>
								<ion-row>
									<ion-col class="ion-no-padding">
										<ion-item lines="full">
											<ion-thumbnail slot="start">
												<img src="assets/icon/login/password.svg" />
											</ion-thumbnail>
											<ion-input placeholder="再次輸入密碼確認" type="password"></ion-input>
											<ion-thumbnail slot="end">
												<img src="assets/icon/login/check.svg" />
											</ion-thumbnail>
										</ion-item>
									</ion-col>
								</ion-row>
								<ion-button size="small" shape="round" expand="block" class="sendbtn">加入小紅</ion-button>
							</ion-col>
						</ion-row>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col>
						<div class="agreement ion-text-center">點擊「加入小紅」即表示你已經閱讀並且同意本公司<span>【小紅條款】</span>所有的規定</div>
					</ion-col>
				</ion-row>
				<ion-row class="ion-padding-vertical ion-justify-content-center">
					<ion-col size="12" sizeMd="7">
						<ion-row>
							<ion-col class="ion-align-self-center">
								<div style="height: 0.5px;width: 100%;background: #ccc;"></div>
							</ion-col>
							<ion-col size="auto">
								<div style="color: #ccc;">或&emsp;以其他帳號登入</div>
							</ion-col>
							<ion-col class="ion-align-self-center">
								<div style="height: 0.5px;width: 100%;background: #ccc;"></div>
							</ion-col>
						</ion-row>
					</ion-col>
				</ion-row>
				<ion-row class="ion-justify-content-center">
					<ion-col size="9" sizeMd="6">
						<ion-row class="social">
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
		</div>
	</ion-modal>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonImg, IonModal, IonButton, IonThumbnail, IonItem, IonInput } from '@ionic/vue';
</script>
<style scoped>
	ion-modal {
		--background: rgba(255,255,255,0);
		--border-radius: 0;
		color: var(--color-white);
	}
	.modal {
		height: 100%;
	}
	.top {
		position: relative;
		margin-bottom: -1px;
	}
	.bg ion-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.register-title {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.register-title ion-button {
		--box-shadow: none;
		color: var(--color-white);
		font-size: 1.3em;
	}
	.register-title ion-thumbnail {
		--size: 1.5em;
	}
	ion-grid {
		position: relative;
		height: 100%;
		flex-direction:column;
		display: flex;
		background: var(--color);
		padding-top: 0;
	}
	h1 {
		font-size: 1.7em;
		margin-top: 0;
		margin-bottom: 30px;
	}
	.register ion-thumbnail {
		--size: 15px;
		margin-inline-end: 10px;
	}
	.register ion-item {
		font-size: 1.2em;
		color: #ccc;
		--border-color: #ccc;
		--inner-padding-end: 0;
		--inner-padding-bottom: 0;
		--min-height: 40px;
		padding-top: 5px;
		
	}
	.register ion-input {
		min-height: 40px;
	}
	.sendmsg {
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		font-size: 0.9em;
		--box-shadow: none;
		--padding-start: 10px;
		--padding-end: 10px;
		--padding-top: 13px;
		--padding-bottom: 13px;
		margin: 0 0 0 5px;
	}
	.resendmsg {
		--background: #333;
		--background-hover: #333;
		--background-focused: #333;
		--background-activated: #333;
		font-size: 0.9em;
		--box-shadow: none;
		--padding-start: 10px;
		--padding-end: 10px;
		--padding-top: 13px;
		--padding-bottom: 13px;
		margin: 0 0 0 5px;
	}
	.sendbtn {
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		font-size: 1.4em;
		letter-spacing: 5px;
		--box-shadow: none;
		margin-top: 30px;
		--padding-top: 15px;
		--padding-bottom: 15px;
	}
	.agreement {
		font-size: 0.75em;
		color: #ccc;
	}
	.agreement span {
		color: #7ac710;
	}
</style>