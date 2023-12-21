<template>
  <ion-row class="items">
		<ion-col size="6" class="item padding-vertical-0">
			<div class="chip">
				<div class="red-gradient">代言中</div>
			</div>
			<div class="item-right copy" @click="setOpen('isOpen', true)">
				<div class="image">
					<ion-icon :icon="copyOutline" />
				</div>
				<div class="title">取得連結</div>
			</div>
			<ion-img src="https://placehold.co/130x130/FFF/FFF"></ion-img>
			<div class="text">
				<div class="title">分潤成數</div>
				<div class="percent">2-10 %</div>
			</div>
		</ion-col>
		<ion-col size="6" class="item padding-vertical-0">
			<div class="chip">
				<div class="red">洽談中</div>
			</div>
			<div class="item-right msg">
				<div class="image">
					<ion-img src='assets/icon/message.svg' />
					<div class="count ion-text-center">99</div>
				</div>
			</div>
			<ion-img src="https://placehold.co/130x130/FFF/FFF"></ion-img>
			<div class="text">
				<div class="title">分潤成數</div>
				<div class="percent">5 %</div>
			</div>
		</ion-col>
	</ion-row>
	<ion-row class="horizental-line ion-align-items-center">
		<ion-col><div class="gray-border"></div></ion-col>
		<ion-col size="auto">已完成</ion-col>
		<ion-col><div class="gray-border"></div></ion-col>
	</ion-row>
	<ion-row class="items">
		<ion-col size="6" class="item padding-vertical-0">
			<div class="chip">
				<div class="green">已完成</div>
			</div>
			<div class="item-right reendorse" id="card-modal">
				<div class="image">
					<ion-img src='assets/icon/message_w.svg' />
				</div>
				<div class="title">再次代言</div>
			</div>
			<ion-img src="https://placehold.co/130x130/FFF/FFF"></ion-img>
			<div class="text">
				<div class="title">累積轉換</div>
				<div class="percent"><span>$</span>18,500</div>
			</div>
		</ion-col>
	</ion-row>
	<!-- 取得連結 -->
	<ShareModal ref="setOpenFun" />
	<!-- 再次代言 -->
	<CardModal from="send" />
</template>

<script setup>
import { IonRow, IonCol, IonImg, IonIcon } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
// import modal
import ShareModal from '@/components/common/ShareModal.vue';
import { setOpen } from '@/utils/common.js';
import CardModal from '@/components/common/CardModal.vue';
</script>

<style scoped>
	.item {
		position: relative;
		margin-bottom: 20px;
	}
	.chip {
		position: absolute;
		top: 8px;
		left: 13px;
	}
	.chip div {
		padding: 4px 10px 5px;
		font-size: 0.9em;
	}
	.item-right {
		position: absolute;
		top: 0;
		right: 5px;
		width: 35%;
		display: flex;
		flex-direction: column;
		border-radius: 0 6px 0 15px;
		padding: 8px 5px 12px;
		margin-bottom: 10px;
		font-size: 1em;
	}
	.item-right.msg {
		justify-content: flex-start;
		align-items: flex-end;
		background: #fff;
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
	.item-right.copy {
		justify-content: center;
		align-items: center;
		background: var(--ion-text-color-purple);
		color: var(--color-white);
	}
		.item-right.copy ion-icon {
			font-size: 1.4em;
		}
	.item-right.reendorse {
		justify-content: center;
		align-items: center;
		background: var(--ion-text-color-g);
		color: var(--color-white);
	}
	.item-right .image {
		position: relative;
		width: 55%;
		padding: 5px;
	}
	.item ion-img::part(image) {
		border-radius: 6px;
	}
	.item .text {
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}
	.item .text .title {
		font-size: 0.9em;
		padding-top: 3px;
	}
	.item .text .percent {
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		color: var(--ion-text-color-r-dark);
		font-size: 1.6em;
		font-family: var(--ion-font-family-number);
		margin-left: 10px;
	}
	.item .text .percent span {
		font-size: 0.5em;
		margin: 3px 3px 0 0;
	}
</style>
