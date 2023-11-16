<template>
  <ion-grid>
    <ion-row class="ion-align-items-center padding-horizontal-10">
			<ion-col class="hello" size="12">
        <h1>HELLO, <span>小紅暱稱</span></h1>
      </ion-col>
		</ion-row>
		<ion-row class="list-bar ion-justify-content-between">
			<ion-col size="7" class="tabs ion-no-padding">
				<ion-segment :scrollable="true" @ionChange="segmentChange($event)" :value="segmentStatus">
					<ion-segment-button value="message">
						<ion-label>代言洽談</ion-label>
					</ion-segment-button>
					<ion-segment-button value="product">
						<ion-label>代言商品</ion-label>
					</ion-segment-button>
					<ion-segment-button value="brand">
						<ion-label>代言品牌</ion-label>
					</ion-segment-button>
				</ion-segment>
				<div class="tabs-border-right"></div>
			</ion-col>
			<ion-col size="3" class="total ion-text-right ion-padding-end">
				<div>共計 <span>0,000</span> 件</div>
			</ion-col>
			<div class="border-bottom"></div>
		</ion-row>
		<div class="scroll">
			<ion-row class="search ion-align-items-center padding-horizontal-10">
				<ion-col>
					<ion-item class="search-bar" lines="none">
						<ion-input :placeholder="`搜尋 ${searchTitle}名稱`"></ion-input>
						<ion-thumbnail slot="end">
							<img src="assets/icon/search.svg" />
						</ion-thumbnail>
					</ion-item>
				</ion-col>
				<ion-col size="auto" class="filter">
					<ion-segment value="6">
						<ion-segment-button value="6">
							<ion-label>近六個月</ion-label>
						</ion-segment-button>
						<ion-segment-button value="3">
							<ion-label>近三個月</ion-label>
						</ion-segment-button>
					</ion-segment>
				</ion-col>
				<ion-col size="auto" class="sort ion-hide">
					<ion-row class="ion-align-items-center">
						<ion-col class="ion-no-padding" style="margin-right: 10px;">
							<ion-button size="small">匯出</ion-button>
						</ion-col>
						<ion-col class="ion-no-padding">
							<ion-select
								label="排序"
								:toggle-icon="caretDownOutline"
							>
								<ion-select-option value="">依類型:代言中、洽談中</ion-select-option>
								<ion-select-option value="">代言日期:新⸺舊</ion-select-option>
								<ion-select-option value="">分潤/轉換金額:高⸺低</ion-select-option>
							</ion-select>
						</ion-col>
					</ion-row>
				</ion-col>
				<ion-col size="auto" class="brand ion-hide">
					<ion-row class="ion-align-items-center">
						<ion-col>
							<ion-button size="small">匯出</ion-button>
						</ion-col>
						<ion-col>
							<ion-select
								label="排序"
								:toggle-icon="caretDownOutline"
							>
								<ion-select-option value="">依評等:高⸺低</ion-select-option>
								<ion-select-option value="">已代言數:高⸺低</ion-select-option>
								<ion-select-option value="">商品數:高⸺低</ion-select-option>
							</ion-select>
						</ion-col>
					</ion-row>
				</ion-col>
			</ion-row>
			<ion-row class="list padding-horizontal-10">
				<ion-col class="ion-no-padding">
					<!-- 代言商品 -->
					<MsgContainer v-if="segmentStatus=='message'" />
					<ProductDetail v-if="segmentStatus=='product'" />
					<BrandDetail v-if="segmentStatus=='brand'" />
				</ion-col>
			</ion-row>
		</div>
  </ion-grid>
</template>

<script setup>
import { onMounted, defineAsyncComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonItem, IonInput, IonThumbnail, IonSegment, IonSegmentButton, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
import { caretDownOutline } from 'ionicons/icons';
import MsgContainer from '@/components/endorse/MsgContainer.vue';
const segmentStatus = ref('message');
const searchTitle = ref('商品');
const ProductDetail = defineAsyncComponent(() =>
	import('@/components/endorse/ProductContainer.vue')
);
const BrandDetail = defineAsyncComponent(() =>
	import('@/components/endorse/BrandContainer.vue')
);
const segmentChange = (event) => {
	const value = event.detail.value;
	const filter = document.querySelector('.filter');
	const sort = document.querySelector('.sort');
	const brand = document.querySelector('.brand');
	if (value=='product') { //代言商品
		filter.classList.add("ion-hide");
		sort.classList.remove("ion-hide");
		brand.classList.add("ion-hide");
		searchTitle.value = '商品';
	}else if (value=='brand') { //代言品牌
		filter.classList.add("ion-hide");
		sort.classList.add("ion-hide");
		brand.classList.remove("ion-hide");
		searchTitle.value = '品牌';
	}else {
		filter.classList.remove("ion-hide");
		sort.classList.add("ion-hide");
		brand.classList.add("ion-hide");
		searchTitle.value = '商品';
	}
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

<style scoped>
	ion-grid {
		position: relative;
		padding: 0;
		height: 100%;
	}
	h1 {
    margin-top: 0;
		margin-bottom: 10px;
		font-size: 2.4em;
		color: var(--color-white);
  }
	.hello span {
    font-size: 0.8em;
  }
	.list-bar {
		position: sticky;
		top: 0;
		z-index: 9;
		background: #e0cfc1;
		box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.2);
		border-radius: 0 20px 0 0;
	}
	.list-bar .tabs {
		display: flex;
	}
	.list-bar ion-segment {
		--background: rgba(0, 0, 0, 0);
		border-radius: 0;
		
	}
	.list-bar ion-segment-button {
		color: var(--color);
		font-size: 1em;
		--border-radius: 0;
    --indicator-color: rgba(0, 0, 0, 0);
		--indicator-box-shadow: none;
		--padding-top: 15px;
		--padding-bottom: 15px;
		margin-top: 0;
		margin-bottom: 0;
  }
	.list-bar ion-segment-button::before, .tabs-border-right {
		margin: 10px 0;
		border-left: 1px solid rgba(0, 0, 0, 0.12);
	}
	.list-bar ion-segment-button::part(indicator) {
		border-bottom: 4px solid var(--color-white);
		background: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
	}
	.list-bar .segment-button-checked::part(native) {
		color: var(--color-white);
	}
	.total {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.border-bottom {
		width: 100%;
		height: 3px;
		background: rgba(255, 255, 255, 0.3);
	}
	.scroll {
		overflow-y: auto;
		height: 100%;
		background: #ebdcce;
	}
	.search {
		margin: 10px 0;
	}
  .search ion-thumbnail {
		--size: 20px;
	}
	.search ion-item {
		--border-radius: 10px;
		--background: #eee;
		--min-height: 40px;
		--padding-start: 10px;
		--inner-padding-end: 0;
		font-size: 1em;
	}
	.search ion-input {
		border-right: 0.8px solid #4d4d4d;
		min-height: 34px;
	}
	.search ion-segment {
		border-radius: 50px;
		background: var(--color-white);
	}
	.search ion-segment-button {
		font-size: 1.3em;
		color: #808080;
		--indicator-color: rgba(0, 0, 0, 0);
		--indicator-box-shadow: none;
		--padding-top: 8px;
		--padding-bottom: 8px;
		margin-top: 0;
		margin-bottom: 0;
	}
	.search ion-segment-button::part(indicator) {
		padding-inline-start: 0;
		padding-inline-end: 0;
	}
	.search ion-segment-button::part(indicator-background) {
		background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		border-radius: 50px;
	}
	.search .segment-button-checked::part(native) {
		color: var(--color-white);
	}
	.search ion-segment-button::before {
		display: none;
	}
	.sort ion-button, .brand ion-button {
		--background: rgba(255, 255, 255, 0.3);
		--background-hover: rgba(255, 255, 255, 0.3);
		--background-activated: rgba(255, 255, 255, 0.3);
		--background-focused: rgba(255, 255, 255, 0.3);
		--box-shadow: none;
		--color: var(--color);
		--padding-top: 12px;
		--padding-bottom: 12px;
		--padding-start: 20px;
		--padding-end: 20px;
		margin: 0;
	}
	.sort ion-select, .brand ion-select {
		--background: rgba(255, 255, 255, 0.3);
		--padding-start: 15px;
		--padding-end: 15px;
		--border-radius: 6px;
		min-height: 38px;
	}
	.sort ion-select::part(label), .brand ion-select::part(label) {
		margin-inline-end: 0;
	}
	.sort ion-select::part(icon), .brand ion-select::part(icon) {
		margin-inline-start: 0;
	}
</style>
