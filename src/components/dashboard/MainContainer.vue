<template>
	<ion-grid class="ion-no-padding">
		<ion-row>
			<ion-col class="ion-padding hello" size="12">
				<h1>HELLO, <span>小紅暱稱</span></h1>
				<div class="top-slider">
					<div class="title-area">
						<div class="title">你今天不代言&emsp;錯過就是錯過了</div>
						<div class="line flex-1"></div>
					</div>
					<SwiperContainer />
				</div>
			</ion-col>
			<ion-col class="ion-no-padding current-slider" size="12">
				<h2 class="ion-padding-start">父親節大家都在買什麼</h2>
				<SwiperCurrentContainer :size="5" />
			</ion-col>
			<ion-col class="ion-no-padding" size="12">
				<div style="height: 0.5px;width: 100%;background: #eee;"></div>
			</ion-col>
			<ion-col class="ion-no-padding ion-padding-horizontal" size="12">
				<div class="cooperate-msg">
					<ion-row class="ion-padding ion-align-items-center">
						<ion-col>
							<ion-row class="ion-align-items-center">
								<ion-col size="4">
									<div class="count ion-text-center">29</div>
								</ion-col>
								<ion-col>
									<div class="title">代言中</div>
									<div class="sub">累績訂單<span> 12,345 </span>筆</div>
								</ion-col>
							</ion-row>
						</ion-col>
						<ion-col>
							<ion-row class="ion-align-items-center">
								<ion-col size="4">
									<div class="count ion-text-center">1</div>
								</ion-col>
								<ion-col>
									<div class="title">洽談中</div>
									<div class="sub">未讀訊息<span> 12 </span>則</div>
								</ion-col>
							</ion-row>
						</ion-col>
						<ion-col size="auto">
							<a href="#" class="go">
								GO
							</a>
						</ion-col>
					</ion-row>
				</div>
			</ion-col>
			<ion-col class="ion-no-padding ion-padding-horizontal" size="12">
				<div class="average">
					<div class="label ion-justify-content-end">
						<div><ion-icon :icon="square" style="color: var(--ion-text-color-r-dark)" /> <span>我的平均</span></div>
						<div><ion-icon :icon="square" style="color: var(--ion-text-color-g)" /> <span>TOP10平均</span></div>
						<div><ion-icon :icon="informationCircle" /></div>
					</div>
					<ChartContainer />
				</div>
			</ion-col>
			<ion-col class="ion-no-padding ion-padding-horizontal" size="12">
				<div class="funnel">
					銷售漏斗位置
				</div>
			</ion-col>
			<ion-col class="ion-no-padding ion-padding-horizontal" size="12">
				<div class="recommend ion-margin-bottom">
					<ion-img src="https://placehold.co/130x130"></ion-img>
					<div class="intro">
						<div class="title">因為你代言過</div>
						<p>這些商品可能很適合你，立刻洽詢代言機會吧！</p>
						<a href="" class="more ion-align-self-end">MORE</a>
					</div>
				</div>
				<div class="recommend ion-margin-bottom">
					<ion-img src="https://placehold.co/130x130"></ion-img>
					<div class="intro">
						<div class="title">挖掘新代言</div>
						<p>你沒代言過，但可能會喜歡的商品</p>
						<a href="" class="more ion-align-self-end">MORE</a>
					</div>
				</div>
			</ion-col>
			<ion-col size="12">
				<div class="daily">
					<h2>每日新發現</h2>
					<SwiperCurrentContainer :size="3" />
				</div>
			</ion-col>
			<ion-col class="ion-no-padding">
				<ion-button class="start-btn">
					立即開始 小紅賣瓜&ensp;
					<ion-thumbnail slot="end">
						<img src="assets/icon/logo_white.svg" />
					</ion-thumbnail>
				</ion-button>
			</ion-col>
		</ion-row>
	</ion-grid>
</template>

<script setup>
import { IonGrid, IonImg, IonRow, IonCol, IonIcon, IonButton, IonThumbnail } from '@ionic/vue';
import { square, informationCircle } from 'ionicons/icons';
import SwiperCurrentContainer from '@/components/dashboard/SwiperCurrentContainer.vue';
import SwiperContainer from '@/components/dashboard/SwiperContainer.vue';
import ChartContainer from '@/components/dashboard/ChartContainer.vue';
</script>

<style scoped>
	h1, h2 {
		margin-top: 0;
	}
	h1 {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 15px;
		font-size: 1.5em;
	}
	.hello span {
		font-size: 0.75em;
	}
	.top-slider {
		background: linear-gradient(#5b5b5b, #333 50%);
		border-radius: 8px;
		padding-bottom: 5px;
	}
	.title-area {
		display: flex;
		padding: 20px 15px 12px;
		color: #fff;
	}
	.title-area .line {
		border-bottom: 1px solid #fff;
	}
	.current-slider {
		margin-bottom: 10px;
	}
	.cooperate-msg {
		background: #FFF0ED;
		border-radius: 50px;
		padding: 4px 0;
		margin: 10px 0;
	}
	.cooperate-msg .count {
		font-size: 2.2em;
		font-family: var(--ion-font-family-number);
		font-weight: 600;
		color: var(--ion-text-color-r-dark);
	}
	.cooperate-msg .title {
		font-size: 1.2em;
	}
	.cooperate-msg .sub {
		font-size: 0.9em;
	}
	.cooperate-msg .sub span {
		font-size: 0.9em;
		color: var(--ion-text-color-r-dark); 
	}
	.cooperate-msg .go {
		border-radius: 50%;
		background: var(--ion-text-color-r-light);
		padding: 8px 6px;
		color: #fff; 
		font-size: 1.3em;
		font-weight: bold;
		font-family: var(--ion-font-family-number);
		text-decoration: none;
	}
	.average .label {
		display: flex;
		margin-bottom: 5px;
	}
	.average .label div {
		padding-right: 5px;
	}
	.average .chart {
		min-height: 160px;
		background: #eee;
		border-radius: 10px;
		margin: 0 5px;
	}
	.funnel {
		min-height: 200px;
		margin: 10px 0;
		border: 1px solid #eee;
		border-radius: 10px;
	}
	.recommend {
		display: flex;
		background: #eee;
		border-radius: 10px;
		padding: 10px;
	}
	.recommend ion-img {
		min-width: 130px;
	}
	.recommend ion-img::part(image) {
		border-radius: 10px;
	}
	.recommend .intro {
		display: flex;
		flex-direction:column;
		padding: 10px 0 0 20px; 
	}
	.recommend .title {
		font-size: 1.7em;
	}
	.recommend p {
		margin-left: 8px;
		font-size: 1em;
		color: #808080;
		min-height: 40px;
		margin-bottom: 0;
	}
	.recommend .more {
		border-radius: 50px;
		background: linear-gradient(90deg, var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		padding: 12px 14px;
		color: #fff;
		font-size: 1.2em;
		font-family: var(--ion-font-family-number);
		text-decoration: none;
	}
	.daily {
		margin-bottom: 30px;
	}
	.daily h2 {
		padding-left: 16px;
	}
	.start-btn {
		width: 100%;
		background: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		--background: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		--background-hover: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		--background-activated: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		--background-focused: linear-gradient(var(--ion-text-color-r-light), var(--ion-text-color-r-dark) 50%);
		margin-top: 0;
		margin-bottom: 0;
		margin-inline: 0;
		font-size: 1.1em;
		--padding-top: 1.4em;
		--padding-bottom: 1.4em;
		clip-path: inset(0 0 round 0 100px 0 0);
	}
	.start-btn ion-thumbnail {
		--size: 2em;
	}
</style>
