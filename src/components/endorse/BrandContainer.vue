<template>
  <ion-row class="items">
		<ion-list>
			<ion-item button lines="none" detail="false">
				<ion-img class="main-image" slot="start" src="https://image-cdn-flare.qdm.cloud/q675ddc4931068/image/data/2020/09/11/356fd101f5c56b071618e344a9e0ee3d.jpg"></ion-img>
				<ion-label>
					<div class="content">
						<div class="item-left flex-1">
							<div class="sub">皇博數位股份有限公司</div>
							<div class="title ion-text-wrap hide-line">好料 台灣文化合作社</div>
							<div class="item-bottom">
								<div class="count">
									<div class="value ion-text-center">325</div>
									<div class="title ion-text-center">商品數</div>
								</div>
								<div class="count">
									<div class="value ion-text-center">1</div>
									<div class="title ion-text-center">已代言</div>
								</div>
							</div>
						</div>
						<div class="item-right">
							<div class="score">
								AA+
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
</template>

<script setup>
import { IonRow, IonItem, IonImg, IonLabel, IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
</script>

<style scoped>
	ion-list {
		padding-bottom: 30px;
	}
	ion-item {
		justify-content: space-between;
		align-items: center;
		--background: var(--color-white);
		--background-hover: none;
		--padding-start: 15px;
		--inner-padding-end: 0;
		border-radius: 6px;
		margin-bottom: 10px;
	}
	ion-item .main-image {
		width: 23%;
		margin-inline-end: 5px;
	}
	ion-item ion-label {
		margin: 0;
	}
	ion-label .content {
		display: flex;
		flex-wrap: nowrap;
	}
	.content .item-left {
		margin: 20px 20px 20px 5px;
	}
	.sub {
		font-size: 0.7em;
		margin-bottom: 3px;
	}
	ion-item .item-left>.title {
		font-size: 0.95em;
		font-weight: bold;
		color: var(--ion-text-color-purple);
		margin-bottom: 10px;
	}
	.hide-line {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.item-bottom {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.item-bottom .count {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-around;
	}
	.item-bottom .title {
		font-size: 0.7em;
		font-weight: normal;
		margin-top: 3px;
	}
	.value {
		color: var(--ion-text-color-g);
		font-size: 1.1em;
		font-family: var(--ion-font-family-number);
	}
	.item-right {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #eee;
	}
	.item-right .score {
		font-family: var(--ion-font-family-score);
		font-weight: bold;
		font-size: 2em;
		color: var(--ion-text-color-r-dark);
		padding: 15px;
	}
</style>
