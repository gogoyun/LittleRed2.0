<template>
  <ion-row class="items padding-horizontal-10">
		<ion-list>
			<ion-item button lines="none" detail="false">
				<div slot="start" class="chart">
					<Doughnut :data="data" :options="options" style="width:100%;" />
					<div class="percent" style="color: #de534e;">86</div>
				</div>
				<ion-label>
					<div class="title ion-text-wrap hide-line">獨家訂製。壓花玻璃檜木淺盤/飾品收納盤獨家訂製。壓花玻璃檜木淺盤/飾品收納盤</div>
					<div class="item-mid-center">
						<div class="price">NT.12,399</div><div class="sale">33% OFF</div>
					</div>
					<div class="profit-title">可分潤金額 / 筆</div>
					<div class="item-mid-bottom">
						<div class="profit-price"><span class="unit">$</span>732</div>
						<div class="chip">
							<div class="yellow">新品</div>
							<div class="green">暢銷</div>
							<div class="red">熱門</div>
						</div>
					</div>
				</ion-label>
				<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
			</ion-item>
			<ion-item button lines="none" detail="false">
				<div slot="start" class="chart">
					<Doughnut :data="dataGreen" :options="options" style="width:100%;" />
					<div class="percent" style="color: #39b04a;">50</div>
				</div>
				<ion-label>
					<div class="title ion-text-wrap hide-line">獨家訂製。壓花玻璃檜木淺盤/飾品收納盤獨家訂製。壓花玻璃檜木淺盤/飾品收納盤</div>
					<div class="item-mid-center">
						<div class="price" style="color: var(--ion-text-color);">NT.650</div>
					</div>
					<div class="profit-title">可分潤金額 / 筆</div>
					<div class="item-mid-bottom">
						<div class="profit-price"><span class="unit">$</span>21</div>
					</div>
				</ion-label>
				<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
			</ion-item>
			<ion-item button lines="none" detail="false">
				<div slot="start" class="chart">
					<Doughnut :data="data" :options="options" style="width:100%;" />
					<div class="percent" style="color: #de534e;">86</div>
				</div>
				<ion-label>
					<div class="title ion-text-wrap hide-line">獨家訂製。壓花玻璃檜木淺盤/飾品收納盤獨家訂製。壓花玻璃檜木淺盤/飾品收納盤</div>
					<div class="item-mid-center">
						<div class="price">NT.12,399</div><div class="sale">33% OFF</div>
					</div>
					<div class="profit-title">可分潤金額 / 筆</div>
					<div class="item-mid-bottom">
						<div class="profit-price"><span class="unit">$</span>732</div>
					</div>
				</ion-label>
				<ion-img slot="end" src="https://placehold.co/130x130"></ion-img>
			</ion-item>
		</ion-list>
		<ion-infinite-scroll>
			<ion-infinite-scroll-content></ion-infinite-scroll-content>
		</ion-infinite-scroll>
	</ion-row>
</template>

<script setup>
import { IonRow, IonItem, IonImg, IonLabel, IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
// chart
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { options } from "@/components/dashboard/doughnutConfig.js";
ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
	datasets: [
		{
			spacing: -20,
      borderWidth: 0,
      borderRadius: [0, 50],
      backgroundColor: ["#eee", "#de534e"],
      hoverBackgroundColor: ["#eee", "#de534e"],
      data: [100-86, 86],
		}
	]
}
const dataGreen = {
	datasets: [
		{
			spacing: -20,
      borderWidth: 0,
      borderRadius: [0, 50],
      backgroundColor: ["#eee", "#39b04a"],
      hoverBackgroundColor: ["#eee", "#39b04a"],
      data: [100-50, 50],
		}
	]
}
</script>

<style scoped>
	ion-list {
		padding-bottom: 30px;
	}
	ion-item {
		--padding-start: 0;
		--inner-padding-end: 0;
		margin-bottom: 10px;
		--background-hover: none;
	}
	ion-item .title {
		font-size: 0.8em;
	}
	ion-item .chart{
		max-width: 15%;
		position: relative;
	}
	.chart .percent {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.2em;
		font-family: var(--ion-font-family-number);
		font-weight: 500;
	}
	ion-item ion-img {
		max-width: 30%;
	}
	ion-item ion-img::part(image) {
		border-radius: 6px;
	}
	ion-item ion-label {
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.hide-line {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.item-mid-center {
		display: flex;
	}
	ion-item .price, ion-item .sale {
		color: var(--ion-text-color-r-dark);
		font-size: 0.7em;
		font-family: var(--ion-font-family-number);
		margin-right: 5px;
	}
	ion-item .profit-title {
		font-size: 0.7em;
		color: var(--ion-text-color-purple);
		margin-top: 10px;
	}
	.item-mid-bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}
	.profit-price {
		display: flex;
		font-size: 1.2em;
		font-family: var(--ion-font-family-number);
		font-weight: bold;
		color: var(--ion-text-color-purple);
	}
	.unit {
		font-size: 0.6em;
		padding: 2px 2px 0 0;
	}
</style>
