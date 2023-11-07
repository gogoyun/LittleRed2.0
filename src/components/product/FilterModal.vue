<template>
	<div class="modal">
		<ion-grid class="padding-horizontal-10">
			<ion-row style="margin-bottom: 10px;">
				<ion-col>
					<ion-select
						label="商品類別"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="">藝術設計</ion-select-option>
						<ion-select-option value="">內容創作</ion-select-option>
						<ion-select-option value="">家電電玩</ion-select-option>
						<ion-select-option value="">3C耳機</ion-select-option>
						<ion-select-option value="">電腦週邊</ion-select-option>
						<ion-select-option value="">保健醫療</ion-select-option>
						<ion-select-option value="">美食生鮮</ion-select-option>
						<ion-select-option value="">保養彩妝</ion-select-option>
						<ion-select-option value="">服飾鞋襪</ion-select-option>
						<ion-select-option value="">精品珠寶</ion-select-option>
						<ion-select-option value="">日用餐廚</ion-select-option>
						<ion-select-option value="">寵物生活</ion-select-option>
						<ion-select-option value="">母嬰文具</ion-select-option>
						<ion-select-option value="">家具修繕</ion-select-option>
						<ion-select-option value="">戶外運動</ion-select-option>
						<ion-select-option value="">圖書影音</ion-select-option>
						<ion-select-option value="">票券服務</ion-select-option>
					</ion-select>
				</ion-col>
				<ion-col>
					<ion-select
						label="商品所在地"
						:toggle-icon="caretDownSharp"
					>
						<ion-select-option value="">臺北市</ion-select-option>
						<ion-select-option value="">新北市</ion-select-option>
						<ion-select-option value="">桃園市</ion-select-option>
						<ion-select-option value="">臺中市</ion-select-option>
						<ion-select-option value="">臺南市</ion-select-option>
						<ion-select-option value="">高雄市</ion-select-option>
						<ion-select-option value="">基隆市</ion-select-option>
						<ion-select-option value="">新竹市</ion-select-option>
						<ion-select-option value="">嘉義市</ion-select-option>
						<ion-select-option value="">新竹縣</ion-select-option>
						<ion-select-option value="">苗栗縣</ion-select-option>
						<ion-select-option value="">彰化縣</ion-select-option>
						<ion-select-option value="">南投縣</ion-select-option>
						<ion-select-option value="">雲林縣</ion-select-option>
						<ion-select-option value="">嘉義縣</ion-select-option>
						<ion-select-option value="">屏東縣</ion-select-option>
						<ion-select-option value="">宜蘭縣</ion-select-option>
						<ion-select-option value="">花蓮縣</ion-select-option>
						<ion-select-option value="">臺東縣</ion-select-option>
						<ion-select-option value="">澎湖縣</ion-select-option>
						<ion-select-option value="">金門縣</ion-select-option>
						<ion-select-option value="">連江縣</ion-select-option>
					</ion-select>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-col size="4" class="padding-vertical-0">
					<div class="title">售價 NT.</div>
				</ion-col>
				<ion-col size="8" class="padding-vertical-0">
					<div class="bar">
						<ion-range :min="2500" :max="4500" :dual-knobs="true" :value="{ lower: 3000, upper: 3800 }">
							<div slot="start" class="start">2500</div>
							<div slot="end" class="end">4500</div>
						</ion-range>
					</div>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-col size="4" class="padding-vertical-0 porfit">
					<div class="title">分潤</div>
					<div class="type">
						<span class="active">元</span>
						<span>%</span>
					</div>
				</ion-col>
				<ion-col size="8" class="padding-vertical-0">
					<div class="bar">
						<ion-range :min="20" :max="60" :dual-knobs="true" :value="{ lower: 25, upper: 35 }">
							<div slot="start" class="start">20</div>
							<div slot="end" class="end">60</div>
						</ion-range>
					</div>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center">
				<ion-col size="4" class="padding-vertical-0">
					<div class="title">契合度</div>
				</ion-col>
				<ion-col size="8" class="padding-vertical-0">
					<div class="bar">
						<ion-range :min="0" :max="100" :dual-knobs="true" :value="{ lower: 60, upper: 80 }">
							<div slot="start" class="start">20</div>
							<div slot="end" class="end">60</div>
						</ion-range>
					</div>
				</ion-col>
			</ion-row>
			<ion-row class="ion-justify-content-between ion-align-items-center" style="margin-bottom: 5px;">
				<ion-col size="auto" class="label">
					<span class="active">組合</span>
					<span>優惠</span>
					<span>熱賣</span>
					<span>條件</span>
				</ion-col>
				<ion-col size="auto">
					<ion-button class="reset" fill="outline" size="small">重設</ion-button>
					<ion-button class="submit" size="small">篩選</ion-button>
				</ion-col>
			</ion-row>
		</ion-grid>
	</div>
	<div class="red-border"></div>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonRange, IonButton } from '@ionic/vue';
import { caretDownSharp } from 'ionicons/icons';
</script>
<style scoped>
	.modal {
		background: var(--color);
	}
	ion-select {
		--background: #fff;
		--border-radius: 6px;
		--padding-start: 15px;
		--padding-end: 10px;
	}
	.title {
		color: var(--color-white);
	}
	.porfit {
		display: flex;
	}
	.porfit .type {
		margin-left: 5px;
	}
	.porfit span {
		color: var(--color-white);
		border-radius: 4px;
		border: 1px solid #ccc;
		padding: 4px 5px;
		margin: 0 2px;
	}
	.porfit span.active {
		background: rgba(255, 255, 255, 0.2);
	}
	.bar {
		font-size: 1.2em;
		color: var(--color-white);
	}
	.bar .start {
		width: 40px;
		text-align: right;
		margin-inline-end: 10px;
	}
	.bar .end {
		width: 40px;
		text-align: left;
		margin-inline-start: 10px;
	}
	ion-range {
    --bar-background: rgba(255, 255, 255, 0.1);
    --bar-background-active: var(--color-white);
    --bar-height: 4px;
    --bar-border-radius: 8px;
    --knob-size: 10px;
    --pin-background: var(--color-white);
    --pin-color: var(--color);
  }
	ion-range::part(knob) {
    background: var(--color);
		border: 4px solid #fff;
		top: 1px;
  }
	.label {
		display: flex;
	}
	.label span {
		color: var(--color-white);
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
		padding: 12px;
		margin: 0 3px;
	}
	.label span.active {
		border: 1px solid #ccc;
	}
	.reset {
		color: var(--color-white);
		border: 1px solid var(--color-white);
		border-radius: 6px;
		--padding-top: 12px;
		--padding-bottom: 12px;
	}
	.submit {
		--background: var(--ion-text-color-r-light);
		border: 1px solid var(--color-white);
		border-radius: 6px;
		--padding-top: 12px;
		--padding-bottom: 12px;
	}
</style>
