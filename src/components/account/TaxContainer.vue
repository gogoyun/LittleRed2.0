<template>
	<ion-row class="ion-no-padding">
		<ion-col class="padding-horizontal-10">
			<ion-row>
				<ion-col class="form-title">撥款銀行帳戶設定&emsp;<span class="red">＊</span><span>請上傳或拍攝存摺帳戶資訊</span>&emsp;<span class="red">拍攝範例</span></ion-col>
			</ion-row>
			<pictureUpload />
			<ion-row class="basic">
				<ion-col>
					<ion-select
						label="匯款銀行"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="">合作金庫</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col size="7">
					<ion-item>
						<ion-input aria-label="account-name" placeholder="帳戶戶名" ></ion-input>
					</ion-item>
				</ion-col>
				<ion-col>
					<ion-item>
						<ion-input aria-label="account" placeholder="收款帳戶" ></ion-input>
					</ion-item>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col class="form-title" style="margin-top: 15px;">稅務與發票資料 設定</ion-col>
			</ion-row>
			<ion-row>
				<ion-col class="form-title">身分證照上傳&emsp;<span class="red">＊</span><span>請上傳或拍攝身分證正反面</span>&emsp;<span class="red">拍攝範例</span></ion-col>
			</ion-row>
			<pictureUpload />
			<div class="ion-text-center" style="font-size: 1.2em">正面</div>
			<pictureUpload />
			<div class="ion-text-center" style="font-size: 1.2em">背面</div>
			<ion-row class="basic" style="margin-top: 15px;">
				<ion-col size="12">
					<ion-select
						value="A"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="A">個人工作室 | 適用個人勞務所得與二聯式發票</ion-select-option>
						<ion-select-option value="B">公司行號 | 需要打統編的三聯式發票</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col>
					<ion-select
						value="3"
						interface="action-sheet"
						justify="space-between"
						:toggle-icon="caretDownSharp"
						@ionChange="invoiceChange"
					>
						<ion-select-option value="1">電子發票載具</ion-select-option>
						<ion-select-option value="2">自然人憑證號碼</ion-select-option>
						<ion-select-option value="3">手機條碼載具</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col size="7">
					<ion-item>
						<ion-input aria-label="invoice-number" :placeholder="invoiceNumPlace" ></ion-input>
					</ion-item>
				</ion-col>
				<ion-col size="12">
					<ion-item>
						<ion-input aria-label="account" placeholder="真實姓名 | 需與帳戶同一人" ></ion-input>
					</ion-item>
				</ion-col>
				<ion-col>
					<ion-item>
						<ion-input aria-label="account" placeholder="身分證字號 | 申請個人勞務所得使用" ></ion-input>
					</ion-item>
				</ion-col>
			</ion-row>
			<ion-row class="basic ion-align-items-center">
				<ion-col class="input">
					<ion-item lines="full">
						<ion-input aria-label="validate" placeholder="輸入驗證碼"></ion-input>
					</ion-item>
				</ion-col>
				<ion-col size="auto" class="ion-no-padding">
					<ion-button class="green" shape="round">發送驗證簡訊</ion-button>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-center">
				<ion-col size="11">
					<ion-button size="small" shape="round" fill="full" class="sendbtn">儲存帳務設定</ion-button>
				</ion-col>
				<ion-col size="12">
					<div class="notice ion-text-center">
						該帳戶僅作為每月撥款入帳使用，並無任何扣款功能。<br/>
						按下儲存按鈕及代表同意QDM小紅2.0的<a href="">隱私權聲明</a>和<a href="">服務條款</a>
					</div>
				</ion-col>
			</ion-row>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { ref } from 'vue';
import { IonRow, IonCol, IonSelect, IonSelectOption, IonItem, IonInput, IonButton } from '@ionic/vue';
import pictureUpload from '@/components/common/pictureUpload.vue';
import { caretDownSharp } from 'ionicons/icons';
const invoiceNumPlace = ref("請輸入「/」開頭的載具號碼");
const invoiceChange = ({ detail }) => {
	if(detail.value=='2') {
		invoiceNumPlace.value = "前兩碼為大寫英文，共16位英數字";
	}else if(detail.value=='3') {
		invoiceNumPlace.value = "請輸入「/」開頭的載具號碼";
	}else{
		invoiceNumPlace.value = "";
	}
}
</script>
<style scoped>
	ion-item {
		font-size: 1.2em;
		--border-color: #808080;
		--inner-padding-end: 0;
		--inner-padding-bottom: 0;
		--padding-start: 0;
		--inner-padding-start: 5px;
		--min-height: 30px;
	}
	ion-input {
		--min-height: 30px;
	}
	ion-select {
		border: 1px solid #eee;
		border-radius: 8px;
		font-size: 1.2em;
		min-height: 35px;
	}
	ion-select::part(label) {
		padding-left: 10px;
	}
	ion-select::part(container) {
		padding: 0 10px;
		width: 100%;
	}
	ion-select::part(icon) {
		width: 15px;
	}
	ion-button.green {
		--padding-top: 10px;
		--padding-bottom: 10px;
		--padding-start: 15px;
		--padding-end: 15px;
		font-size: 1.2em;
		--background: var(--ion-text-color-g);
		--background-hover: var(--ion-text-color-g);
		--background-focused: var(--ion-text-color-g);
		--background-activated: var(--ion-text-color-g);
	}
	.sendbtn {
		color: var(--color-white);
		font-size: 1.7em;
		--box-shadow: none;
		--padding-top: 15px;
		--padding-bottom: 15px;
		--padding-start: 1.2em;
		--padding-end: 1.2em;
		margin-inline-start: 5px;
		margin-inline-end: 5px;
		margin-top: 5vh;
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	}
	.notice {
		color: #ccc;
	}
	.notice a {
		color: var(--ion-text-color-g);
		text-decoration: none;
	}
</style>