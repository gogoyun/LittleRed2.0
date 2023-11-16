<template>
  <ion-row class="items">
		<ion-list>
			<ion-item button lines="none" detail="false">
				<ion-img class="main-image" slot="start" src="https://image-cdn-flare.qdm.cloud/q675ddc4931068/image/data/2020/09/11/356fd101f5c56b071618e344a9e0ee3d.jpg"></ion-img>
				<ion-label>
					<div class="trangle"></div>
					<div class="content">
						<div class="item-left flex-1">
							<div class="chip">
								<div class="red">洽談中</div>
								<div class="gray">查看修改</div>
							</div>
							<div class="title ion-text-wrap hide-line">獨家訂製。物理抗菌雙層便當盒</div>
							<div class="sku">ABC002</div>
						</div>
						<div class="item-right msg">
							<div class="image">
								<ion-img src='assets/icon/message.svg' />
								<div class="count ion-text-center">99</div>
							</div>
						</div>
						<div class="item-bottom gray">
							<div class="count" style="width: 20%;">
								<div class="count-content">
									<div class="value">45</div><div class="unit">筆</div>
									<div class="title">訂單數量</div>
								</div>
							</div>
							<div class="count" style="width: 35%;">
								<div class="unit">$</div>
								<div class="count-content">
									<div class="value">1,422</div>
									<div class="title">轉換分潤金額</div>
								</div>
							</div>
							<div class="count" style="width: 25%;">
								<div class="unit">$</div>
								<div class="count-content flex-1">
									<div class="value">0</div>
									<div class="title">入帳金額</div>
								</div>
							</div>
						</div>
					</div>
				</ion-label>
			</ion-item>
			<ion-item button lines="none" detail="false">
				<ion-img class="main-image" slot="start" src="https://image-cdn-flare.qdm.cloud/q675ddc4931068/image/data/2020/09/11/356fd101f5c56b071618e344a9e0ee3d.jpg"></ion-img>
				<ion-label>
					<div class="trangle"></div>
					<div class="content">
						<div class="item-left flex-1">
							<div class="chip">
								<div class="red-gradient">代言中</div>
							</div>
							<div class="title ion-text-wrap hide-line">獨家訂製。物理抗菌雙層便當盒</div>
							<div class="sku">ABC002</div>
						</div>
						<div class="item-right copy" @click="setOpen('isOpen', true)">
							<div class="image">
								<ion-icon :icon="copyOutline" />
							</div>
							<div class="title">取得連結</div>
						</div>
						<div class="item-middle">
							<ion-icon :icon="radioButtonOnOutline" />
							商家未付款<span>預計付款日2023/07/20</span>
						</div>
						<div class="item-bottom">
							<div class="count" style="width: 20%;">
								<div class="count-content">
									<div class="value">45</div><div class="unit">筆</div>
									<div class="title">訂單數量</div>
								</div>
							</div>
							<div class="count" style="width: 35%;">
								<div class="unit">$</div>
								<div class="count-content">
									<div class="value">1,422</div>
									<div class="title">轉換分潤金額</div>
								</div>
							</div>
							<div class="count" style="width: 25%;">
								<div class="unit">$</div>
								<div class="count-content flex-1">
									<div class="value">0</div>
									<div class="title">入帳金額</div>
								</div>
							</div>
						</div>
					</div>
				</ion-label>
			</ion-item>
			<ion-row class="horizental-line ion-align-items-center">
				<ion-col><div class="gray-border"></div></ion-col>
				<ion-col size="auto">已完成</ion-col>
				<ion-col><div class="gray-border"></div></ion-col>
			</ion-row>
			<ion-item button lines="none" detail="false">
				<ion-img class="main-image" slot="start" src="https://image-cdn-flare.qdm.cloud/q675ddc4931068/image/data/2020/09/11/356fd101f5c56b071618e344a9e0ee3d.jpg"></ion-img>
				<ion-label>
					<div class="trangle"></div>
					<div class="content">
						<div class="item-left flex-1">
							<div class="chip">
								<div class="red">洽談中</div>
								<div class="gray">明細</div>
							</div>
							<div class="title ion-text-wrap hide-line">獨家訂製。物理抗菌雙層便當盒</div>
							<div class="sku">ABC002</div>
						</div>
						<div class="item-right reendorse">
							<div class="image">
								<ion-img src='assets/icon/message_w.svg' />
							</div>
							<div class="title">再次代言</div>
						</div>
						<div class="item-middle success">
							<ion-icon :icon="radioButtonOnOutline" />
							已撥款<span>2023/06/20</span>
						</div>
						<div class="item-bottom">
							<div class="count" style="width: 20%;">
								<div class="count-content">
									<div class="value">300</div><div class="unit">筆</div>
									<div class="title">訂單數量</div>
								</div>
							</div>
							<div class="count" style="width: 35%;">
								<div class="unit">$</div>
								<div class="count-content">
									<div class="value">23,456</div>
									<div class="title">轉換分潤金額</div>
								</div>
							</div>
							<div class="count" style="width: 25%;">
								<div class="unit">$</div>
								<div class="count-content flex-1">
									<div class="value">23,456</div>
									<div class="title">入帳金額</div>
								</div>
							</div>
						</div>
					</div>
				</ion-label>
			</ion-item>
		</ion-list>
		<ion-infinite-scroll>
			<ion-infinite-scroll-content></ion-infinite-scroll-content>
		</ion-infinite-scroll>
	</ion-row>
	<ShareModal ref="setOpenFun" />
</template>

<script setup>
import { IonRow, IonCol, IonItem, IonImg, IonLabel, IonList, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
import { copyOutline, radioButtonOnOutline } from 'ionicons/icons';
const trangleH = '8px';
// import modal
import ShareModal from '@/components/common/ShareModal.vue';
import { setOpen } from '@/utils/common.js';
</script>

<style scoped>
	ion-list {
		padding-bottom: 30px;
	}
	ion-item {
		--padding-start: 5px;
		--inner-padding-end: 0;
		margin-bottom: 10px;
		--background-hover: none;
		align-items: start;
	}
	ion-item .main-image {
		max-width: 20%;
		margin-inline-end: 5px;
	}
	ion-item .main-image::part(image) {
		border-radius: 6px;
	}
	ion-item ion-label {
		position: relative;
		margin: 0 5px 0 0;
		padding-left: v-bind(trangleH);
	}
	.trangle {
		width: 15px;
	}
	.trangle::before {
		content: "";
		position: absolute;
		top: 20px;
		left: 0;
		width: 0;
		height: 0;
		border-color: #fff rgba(0, 0, 0, 0);
		border-style: solid solid solid;
		border-width: 0 5px v-bind(trangleH) 5px;
		transform: rotate(270deg);
	}
	ion-label .content {
		display: flex;
		flex-wrap: wrap;
		background: var(--color-white);
		border-radius: 6px;
	}
	.content .item-left {
		padding: 8px 0 0 8px;
	}
	.chip {
		justify-content: flex-start;
		margin-bottom: 5px;
	}
	.chip div {
		padding: 4px 10px;
		font-size: 0.8em;
	}
	ion-item .title {
		font-size: 0.8em;
		font-weight: bold;
	}
	.hide-line {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.sku {
		font-size: 0.7em;
	}
	.content .item-right {
		width: 25%;
		display: flex;
		flex-direction: column;
		border-radius: 0 6px 0 6px;
		padding: 8px 10px;
		margin-bottom: 10px;
		font-size: 0.9em;
	}
	.content .item-right.msg {
		justify-content: flex-start;
		align-items: flex-end;
		background: #fff;
	}
	.content .item-right.copy {
		justify-content: center;
		align-items: center;
		background: var(--ion-text-color-purple);
		color: var(--color-white);
	}
		.item-right.copy ion-icon {
			font-size: 1.4em;
		}
	.content .item-right.reendorse {
		justify-content: center;
		align-items: center;
		background: var(--ion-text-color-g);
		color: var(--color-white);
	}
	.item-right .image {
		position: relative;
		width: 60%;
		padding: 5px;
	}
	.item-right ion-image {
		max-width: 100%;
	}
	.item-right .count {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 0.6em;
		color: var(--color-white);
		background: var(--ion-text-color-r-light);
		border-radius: 50%;
		width: 14px;
		height: 14px;
	}
	.item-right .title {
		font-size: 0.9em;
	}
	.item-middle {
		width: 100%;
		font-size: 0.7em;
		padding: 15px 15px 0;
	}
	.item-middle ion-icon {
		color: var(--ion-text-color-r-dark);
	}
	.item-middle.success ion-icon {
		color: var(--ion-text-color-g);
	}
	.item-middle span {
		margin-left: 10px;
		color: #808080;
	}
	.item-bottom {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 20px;
		margin-right: 35px;
		padding: 0 15px 15px;
	}
	.item-bottom.gray, .item-bottom.gray .value, .item-bottom.gray .unit {
		color: #ccc !important;
	}
	.item-bottom .count {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.item-bottom .count-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
	}
	.item-bottom .title {
		width: 100%;
	}
	.item-bottom .title {
		font-size: 0.7em;
		font-weight: normal;
		margin-top: 5px;
	}
	.value {
		color: var(--ion-text-color-r-dark);
		font-size: 1.2em;
		font-family: var(--ion-font-family-number);
	}
	.unit {
		color: var(--ion-text-color-r-dark);
		font-size: 0.6em;
		padding: 2px 2px 0 0;
	}
</style>
