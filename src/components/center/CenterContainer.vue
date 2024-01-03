<template>
  <ion-grid>
		<ion-row class="ion-justify-content-around ion-align-items-center">
			<ion-col>
				<div class="count">
					<div class="value ion-text-center">672,027</div>
					<div class="title">
						潛在受眾人數
						<ion-icon :icon="informationCircle" />
					</div>
				</div>
			</ion-col>
			<ion-col size="auto">
				<div class="border-right"></div>
			</ion-col>
			<ion-col>
				<div class="count">
					<div class="value ion-text-center">94,724</div>
					<div class="title">
						累計追蹤數
						<ion-icon :icon="informationCircle" />
					</div>
				</div>
			</ion-col>
			<ion-col size="auto">
				<div class="border-right"></div>
			</ion-col>
			<ion-col>
				<div class="count">
					<div class="value ion-text-center">13.5%</div>
					<div class="title">
						社群互動率
						<ion-icon :icon="informationCircle" />
					</div>
				</div>
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col size="6">
				<div class="social-count">
					<div class="social-data">
						<div class="value">54,567</div>
						<div class="title">總追蹤數</div>
						<div class="trend">
							<div class="trangle"></div>
							<div class="percent">24<span>%</span></div>
						</div>
					</div>
					<div class="social-icon">
						<ion-thumbnail>
							<img src="assets/icon/social/facebook_g.svg" />
						</ion-thumbnail>
					</div>
				</div>
			</ion-col>
			<ion-col size="6">
				<div class="social-count">
					<div class="social-data">
						<div class="value">23,567</div>
						<div class="title">總追蹤數</div>
						<div class="trend">
							<div class="trangle"></div>
							<div class="percent">234<span>%</span></div>
						</div>
					</div>
					<div class="social-icon">
						<ion-thumbnail>
							<img src="assets/icon/social/instagram_g.svg" />
						</ion-thumbnail>
					</div>
				</div>
			</ion-col>
			<ion-col size="6">
				<div class="social-count">
					<div class="social-data">
						<div class="value">234,567</div>
						<div class="title">總追蹤數</div>
						<div class="trend down">
							<div class="trangle"></div>
							<div class="percent">10<span>%</span></div>
						</div>
					</div>
					<div class="social-icon">
						<ion-thumbnail>
							<img src="assets/icon/social/youtube_g.svg" />
						</ion-thumbnail>
					</div>
				</div>
			</ion-col>
			<ion-col size="6">
				<div class="social-count no-info">
					<div>未串連</div>
					<div></div>
					<ion-button size="small">串連</ion-button>
				</div>
			</ion-col>
		</ion-row>
		<div class="border-bottom"></div>
		<ion-row>
			<ion-col>
				<ChartLineContainer />
			</ion-col>
		</ion-row>
  </ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonThumbnail, IonButton } from '@ionic/vue';
import { informationCircle } from 'ionicons/icons';
import ChartLineContainer from '@/components/center/ChartLineContainer.vue';
const trangleH = '7px';
</script>

<style scoped>
	ion-grid {
		padding: 8%;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}
	.count {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: var(--color-white);
	}
	.count .value {
		font-size: 1.8em;
		font-family: var(--ion-font-family-number);
		font-weight: bold;
		margin-bottom: 5px;
	}
	.count .title {
		display: flex;
		align-items: center;
		font-size: 0.9em;
	}
		.count .title ion-icon {
			font-size: 1.4em;
			margin-left: 2px;
		}
	.border-right {
		background: #808080;
		width: 1px;
		height: 3.2em;
	}
	.social-count {
		background: var(--color-white);
		padding: 8px 7px 7px 15px;
		border-radius: 6px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.social-count .value {
		font-size: 1.8em;
		font-family: var(--ion-font-family-number);
		font-weight: bold;
		margin-bottom: 3px;
	}
	.trend {
		position: relative;
		padding-left: calc(v-bind(trangleH) + 2px);
		margin: 5px 0 6px;
		color: var(--ion-text-color-r-dark);
	}
	.trend.down {
		color: var(--ion-text-color-g);
	}
	.trangle::before {
		content: "";
		position: absolute;
		top: 5px;
		left: 0;
		width: 0;
		height: 0;
		border-color: var(--ion-text-color-r-dark) rgba(0, 0, 0, 0);
		border-style: solid solid solid;
		border-width: 0 4px v-bind(trangleH) 4px;
	}
	.trend.down .trangle::before {
		border-color: var(--ion-text-color-g) rgba(0, 0, 0, 0);
		transform: rotate(180deg);
	}
	.trend .percent {
		font-size: 1.8em;
		font-weight: bold;
		font-family: var(--ion-font-family-number);
	}
	.trend .percent span {
		font-size: 0.6em;
		padding-left: 2px;
	}
	.social-icon ion-thumbnail {
		--size: 3em;
	}
	.social-count.no-info {
		background: #808080;
		color: var(--color-white);
		font-size: 1.1em;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.no-info ion-button {
		font-size: 1.1em;
		--background: var(--ion-text-color-g);
		--padding-top: 8px;
		--padding-bottom: 10px;
		--padding-start: 6px;
		--padding-end: 6px;
		--box-shadow: none;
	}
	.border-bottom {
		width: 100%;
		height: 1px;
		background: #808080;
	}
</style>
