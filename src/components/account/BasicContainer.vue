<template>
	<ion-row class="ion-no-padding">
		<ion-col class="padding-horizontal-10">
			<ion-row>
				<ion-col class="title">個人資料設定</ion-col>
			</ion-row>
			<ion-row class="basic">
				<ion-col>
					<div class="photo-area">
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
						<div class="photo-right">
							<ion-item>
								<ion-input aria-label="name" value="小紅暱稱"></ion-input>
							</ion-item>
							<ion-item>
								<ion-input label="E-mail" value="sample@gmail.com"></ion-input>
							</ion-item>
						</div>
					</div>
					<div>
						<ion-item>
							<ion-input aria-label="phone" value="0910-000-120"></ion-input>
							<div class="segment" slot="end">
								<ion-segment value="show" @ionChange="segmentChange">
									<ion-segment-button value="hide">
										<ion-label>隱藏</ion-label>
									</ion-segment-button>
									<ion-segment-button value="show">
										<ion-label>顯示</ion-label>
									</ion-segment-button>
								</ion-segment>
							</div>
						</ion-item>
						<ion-item>
							<ion-input label="LINE ID @" value="AAA-0123"></ion-input>
							<div class="segment" slot="end">
								<ion-segment value="show" @ionChange="segmentChange">
									<ion-segment-button value="hide">
										<ion-label>隱藏</ion-label>
									</ion-segment-button>
									<ion-segment-button value="show">
										<ion-label>顯示</ion-label>
									</ion-segment-button>
								</ion-segment>
							</div>
						</ion-item>
					</div>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col class="title">形象圖上傳<span> 建議尺寸 1080x720px</span></ion-col>
			</ion-row>
			<pictureUpload />
			<ion-row>
				<ion-col>
					<ion-label>語言</ion-label>
					<ion-select
						value="zh-TW"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="zh-TW">繁體中文</ion-select-option>
						<ion-select-option value="en-US">美國</ion-select-option>
						<ion-select-option value="zh-CN">簡體中文</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col>
					<ion-label>居住國家</ion-label>
					<ion-select
						value="台灣"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="台灣">台灣</ion-select-option>
						<ion-select-option value="美國">美國</ion-select-option>
						<ion-select-option value="日本">日本</ion-select-option>
					</ion-select>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<ion-label>居住城市</ion-label>
					<ion-select
						value="高雄市"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option
							v-for="item in cityTW"
							:key="item"
							:value="item.id"
						>
							{{ item.text }}
						</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col size="8" class="address">
					<ion-item>
						<ion-input aria-label="address" placeholder="請輸入完整正確地址" ></ion-input>
					</ion-item>
				</ion-col>
			</ion-row>
			<div class="social">
				<ion-row>
					<ion-col class="title">我的社群&emsp;<span class="red">＊</span><span>如何串聯我的社群</span>&emsp;<span class="red">教學</span></ion-col>
				</ion-row>
				<ion-row class="ion-align-items-center">
					<ion-col class="input">
						<ion-item lines="full">
							<ion-thumbnail slot="start">
								<img src="assets/icon/social/facebook_dg.svg" />
							</ion-thumbnail>
							<ion-input aria-label="facebook" placeholder="用戶名稱/網址"></ion-input>
						</ion-item>
					</ion-col>
					<ion-col size="auto" class="ion-no-padding">
						<ion-button class="green">串連</ion-button>
					</ion-col>
				</ion-row>
				<ion-row class="ion-align-items-center">
					<ion-col class="input">
						<ion-item lines="full">
							<ion-thumbnail slot="start">
								<img src="assets/icon/social/instagram_dg.svg" />
							</ion-thumbnail>
							<ion-input aria-label="instagram" placeholder="用戶名稱/網址"></ion-input>
						</ion-item>
					</ion-col>
					<ion-col size="auto" class="ion-no-padding">
						<ion-button class="red">完成</ion-button>
					</ion-col>
				</ion-row>
				<ion-row class="ion-align-items-center">
					<ion-col class="input">
						<ion-item lines="full">
							<ion-thumbnail slot="start">
								<img src="assets/icon/social/youtube_dg.svg" />
							</ion-thumbnail>
							<ion-input aria-label="youtube" placeholder="用戶名稱/網址"></ion-input>
						</ion-item>
					</ion-col>
					<ion-col size="auto" class="ion-no-padding">
						<ion-button class="red">完成</ion-button>
					</ion-col>
				</ion-row>
				<ion-row class="ion-align-items-center">
					<ion-col class="input">
						<ion-item lines="full">
							<ion-thumbnail slot="start">
								<img src="assets/icon/social/twitter_dg.svg" />
							</ion-thumbnail>
							<ion-input aria-label="twitter" placeholder="用戶名稱/網址"></ion-input>
						</ion-item>
					</ion-col>
					<ion-col size="auto" class="ion-no-padding">
						<ion-button class="red">完成</ion-button>
					</ion-col>
				</ion-row>
			</div>
			<ion-row>
				<ion-col class="title">代表作（選填）</ion-col>
			</ion-row>
			<ion-row>
				<ion-col class="portfolio">
					<ion-item>
						<ion-input aria-label="portfolio" value="holio.tw" placeholder="請貼網址"></ion-input>
					</ion-item>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-center">
				<ion-col size="11" class="bottom">
					<ion-button size="small" shape="round" expand="block" class="previewbtn">預覽我的名片</ion-button>
					<ion-button size="small" shape="round" expand="block" class="sendbtn">儲存個人資料</ion-button>
				</ion-col>
			</ion-row>
		</ion-col>
	</ion-row>
</template>
<script setup>
import { ref } from 'vue';
import { IonRow, IonCol, IonItem, IonInput, IonThumbnail, IonSegment, IonSegmentButton, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';
import { caretDownSharp } from 'ionicons/icons';
import pictureUpload from '@/components/common/pictureUpload.vue';
import { cityTW } from "@/utils/commonData.js";
const segmentBorder = ref('0 10px 10px 0');
const segmentDeg = ref('270deg');
const segmentChange = ({ detail }) => {
	segmentBorder.value = (detail.value == 'hide') ? '0' : '0 10px 10px 0';
	segmentDeg.value = (detail.value == 'hide') ? '90deg' : '270deg';
}
</script>
<style scoped>
.title {
	font-size: 1.1em;
	margin: 5px 0;
}
.title span {
	color: #ccc;
}
.title span.red {
	color: var(--ion-text-color-r-dark)
}
.photo-area {
	display: flex;
	align-items: center;
}
.photo {
	position: relative;
}
.photo > ion-thumbnail {
	--border-radius: 50%;
	--size: 70px;
}
.photo .camera {
	position: absolute;
	right: 0;
	bottom: 0;
}
.photo .camera ion-thumbnail {
	--size: 30px;
}
.photo-right {
	padding-left: 5%;
}
ion-item {
	font-size: 1.2em;
	--border-color: #808080;
	--inner-padding-end: 0;
	--inner-padding-bottom: 0;
	--padding-start: 0;
	--inner-padding-start: 5px;
}
ion-input {
	--min-height: 30px;
}
.segment {
	width: 20%;
}
ion-segment {
	border-radius: 10px;
	background: #eee;
}
ion-segment-button {
	font-size: 0.9em;
	color: var(--color-white);
	--indicator-color: rgba(0, 0, 0, 0);
	--indicator-box-shadow: none;
	--padding-top: 6px;
	--padding-bottom: 6px;
	--padding-start: 0;
	--padding-end: 0;
	margin-top: 0;
	margin-bottom: 0;
	min-width: 0;
	--background-checked: linear-gradient(v-bind(segmentDeg), var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
}
ion-segment-button::part(indicator) {
	padding-inline-start: 0;
	padding-inline-end: 0;
}
ion-segment-button::part(indicator-background) {
	background: linear-gradient(v-bind(segmentDeg), var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
	border-radius: v-bind(segmentBorder);
}
ion-segment-button::before {
	display: none;
}
ion-select {
	border: 1px solid #808080;
	border-radius: 8px;
	font-size: 1.2em;
	min-height: 38px;
}
ion-select::part(container) {
	padding: 0 10px;
	width: 100%;
}
ion-select::part(icon) {
	width: 15px;
}
.address {
	display: flex;
	align-items: flex-end;
}
ion-thumbnail {
	--size: 1.7em;
}
ion-button.green, ion-button.red {
	--border-radius: 8px;
	--padding-top: 10px;
	--padding-bottom: 10px;
	--padding-start: 8px;
	--padding-end: 8px;
	margin: 0;
	font-size: 1em;
}
ion-button.green {
	--background: var(--ion-text-color-g);
	--background-hover: var(--ion-text-color-g);
	--background-focused: var(--ion-text-color-g);
	--background-activated: var(--ion-text-color-g);
}
ion-button.red {
	--background: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-hover: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-focused: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-activated: linear-gradient(270deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
}
.social .input, .portfolio {
	padding: 0 5px;
}
.social ion-item {
	--inner-padding-end: 0;
	--inner-padding-bottom: 0;
	--padding-start: 0;
	--min-height: 35px;
}
.social ion-input {
	--height: 30px;
}
.bottom {
	margin-top: 5vh;
}
.bottom ion-button {
	font-size: 1.7em;
	letter-spacing: 1px;
	--box-shadow: none;
	--padding-top: 15px;
	--padding-bottom: 15px;
	margin-top: 20px;
}
.previewbtn {
	--background: var(--ion-text-color-purple);
	--background-hover: var(--ion-text-color-purple);
	--background-focused: var(--ion-text-color-purple);
	--background-activated: var(--ion-text-color-purple);
}
.sendbtn {
	--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
}
</style>