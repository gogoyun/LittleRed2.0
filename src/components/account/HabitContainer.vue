<template>
	<ion-row class="ion-no-padding">
		<ion-col class="padding-horizontal-10">
			<ion-row>
				<ion-col class="form-title">較符合我的選項</ion-col>
			</ion-row>
			<ion-row class="option">
				<ion-col size="12" v-for="(item, index) in expertiseData" :key="item">
					<ion-label class="title">{{ index }}<span>*</span></ion-label>
					<ion-segment value="0">
						<ion-segment-button :value="item2.value" class="item" v-for="item2 in item" :key="item2">
							<ion-label>{{ item2.title }}</ion-label>
						</ion-segment-button>
					</ion-segment>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col class="form-title">你最有興趣/專業的項目(請選擇5項)</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<div class="interest">
						<ion-row class="ion-justify-content-around ion-align-items-center ion-padding-horizontal">
							<ion-col size="auto" v-for="item in interestData" :key="item">
								<div class="item" @click="active($event)">
									<ion-thumbnail>
										<img :src="`assets/icon/account/interest/${ item.image }`" />
									</ion-thumbnail>
									<div class="title ion-text-center">{{ item.title }}</div>
								</div>
							</ion-col>
						</ion-row>
					</div>
				</ion-col>
			</ion-row>
		</ion-col>
	</ion-row>
</template>
<script setup>
import { IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
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
.option {
	margin: 10px 0 60px;
}
.option .title {
	font-size: 1.2em;
	font-weight: bold;
}
.option .title span {
	color: var(--ion-text-color-r-dark)
}
ion-segment {
	border-radius: 0;
	background: #eee;
	margin-top: 5px;
}
ion-segment-button {
	font-size: 1.7em;
	--indicator-color: rgba(0, 0, 0, 0);
	--indicator-box-shadow: none;
	--padding-start: 0;
	--padding-end: 0;
	margin-top: 0;
	margin-bottom: 0;
	min-width: 0;
}
ion-segment-button::part(indicator) {
	padding-inline-start: 0;
	padding-inline-end: 0;
	color: var(--color-white);
}
ion-segment-button::part(indicator-background) {
	background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
	border-radius: 0;
}
.segment-button-checked::part(native) {
	color: var(--color-white);
}
ion-segment-button::before {
	display: none;
}

.interest {
	background: #eee;
	border-radius: 2em;
	padding: 25px 0;
}
.interest ion-col {
	margin-bottom: 10px;
}
.interest ion-thumbnail {
	background: var(--color-white);
	--border-radius: 50%;
	--size: 35vw;
	max-width: 70px;
	max-height: 70px;
}
.interest .active ion-thumbnail {
	background: rgba(241, 116, 86, 0.2);
}
.interest .item .title {
	font-size: 1.2em;
	margin-top: 5px;
}
</style>