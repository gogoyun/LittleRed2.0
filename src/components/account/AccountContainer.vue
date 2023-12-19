<template>
	<ion-grid>
		<ion-row class="ion-padding-vertical">
			<ion-col class="tabs">
				<ion-segment @ionChange="segmentChange($event)" :value="segmentStatus">
					<ion-segment-button value="basic">
						<ion-label>基本資料</ion-label>
					</ion-segment-button>
					<ion-segment-button value="tax">
						<ion-label>帳務設定</ion-label>
					</ion-segment-button>
					<ion-segment-button value="habit">
						<ion-label>專屬推薦</ion-label>
					</ion-segment-button>
					<ion-segment-button value="achieve">
						<ion-label>我的成就</ion-label>
					</ion-segment-button>
				</ion-segment>
			</ion-col>
		</ion-row>
		<BasicContainer v-if="segmentStatus=='basic'" />
		<TaxContainer v-if="segmentStatus=='tax'" />
	</ion-grid>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
import BasicContainer from '@/components/account/BasicContainer.vue';
import TaxContainer from '@/components/account/TaxContainer.vue';
const segmentStatus = ref('basic');
const segmentChange = (event) => {
	const value = event.detail.value;
	segmentStatus.value = value;
}
onMounted(() => {
	const event = {
		detail: {
			value: segmentStatus.value
		}
	};
	segmentChange(event);
});
</script>
<style>
.form-title {
	font-size: 1.2em;
	margin: 5px 0;
}
.form-title span {
	color: #ccc;
}
.form-title span.red {
	color: var(--ion-text-color-r-dark)
}
</style>
<style scoped>
.tabs ion-segment {
	border-radius: 50px;
	background: linear-gradient(90deg, var(--color-white), #eee 50%);
}
.tabs ion-segment-button {
	font-size: 1.4em;
	color: #808080;
	--indicator-color: rgba(0, 0, 0, 0);
	--indicator-box-shadow: none;
	--padding-top: 13px;
	--padding-bottom: 13px;
	margin-top: 0;
	margin-bottom: 0;
}
.tabs ion-segment-button::part(indicator) {
	padding-inline-start: 0;
	padding-inline-end: 0;
}
.tabs ion-segment-button::part(indicator-background) {
	background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
	border-radius: 50px;
}
.tabs .segment-button-checked::part(native) {
	color: var(--color-white);
}
.tabs ion-segment-button::before {
	display: none;
}
</style>