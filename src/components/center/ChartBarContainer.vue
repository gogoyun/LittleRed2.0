<template>
	<ion-row class="ion-justify-content-center">
		<ion-col size="10" class="grid-padding">
			<div class="chart-top">
				<div class="chart-label ion-text-center">
					<ion-icon :icon="ellipseSharp" />
					<div>影片動態</div>
				</div>
				<div class="chart-label ion-text-center">
					<div>幽默強烈</div>
				</div>
				<div class="chart-label ion-text-center">
					<div>專業介紹</div>
				</div>
				<div class="chart-label ion-text-center">
					<ion-icon :icon="ellipseSharp" />
					<div>訂單數多</div>
				</div>
				<div class="chart-label ion-text-center">
					<ion-icon :icon="ellipseSharp" />
					<div>親身體驗</div>
				</div>
			</div>
			<div class="chart">
				<Bar :data="data" :options="options" style="width:100%;height: 25vh;" />
			</div>
			<div class="chart-bottom">
				<div class="chart-label ion-text-center">
					<div>圖文靜態</div>
				</div>
				<div class="chart-label ion-text-center">
					<div>知性溫和</div>
					<ion-icon :icon="ellipseSharp" />
				</div>
				<div class="chart-label ion-text-center">
					<div>生活美照</div>
					<ion-icon :icon="ellipseSharp" />
				</div>
				<div class="chart-label ion-text-center">
					<div>利潤高</div>
				</div>
				<div class="chart-label ion-text-center">
					<div>不需體驗</div>
				</div>
			</div>
			<div class="bottom">
				<ion-avatar>
					<ion-img src="assets/icon/logo.svg"></ion-img>
				</ion-avatar>
				<div class="title">你的代言</div>
				<div class="green-icon"></div>
				<div class="title">TOP10網紅的代言</div>
				<ion-icon :icon="informationCircle" />
			</div>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { IonRow, IonCol, IonAvatar, IonImg, IonIcon } from '@ionic/vue';
import { informationCircle, ellipseSharp } from 'ionicons/icons';
// chart
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
	Filler,
  BarElement,
	PointElement,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { options } from "@/components/center/barConfig.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler)
//chart1
const pointImage = new Image(20, 20);
pointImage.src = "/assets/icon/logo_chart.svg";
const data = {
	labels: [1, 2, 3, 4, 5],
	datasets: [
		{
			data: [100, 100, 100, 100, 100],
			backgroundColor: 'rgba(226, 226, 226, 0.2)',
			borderWidth: 0,
			borderRadius: 30,
			barThickness: 25,
			order: 0,
		},
		{
			data: [-100, -100, -100, -100, -100],
			backgroundColor: 'rgba(226, 226, 226, 0.2)',
			borderWidth: 0,
			borderRadius: 30,
			barThickness: 25,
			order: 0,
		},
		{
			yAxisID: 'y',
			type: 'line',
			data: [60, -85, -85, 35, 38],
			borderColor: '#de534e',
			borderDash: [2, 2],
			borderWidth: 0.8,
			pointStyle: pointImage,
			pointBackgroundColor: '#fff',
      pointRadius: 10,
		},
		{
			yAxisID: 'y1',
			type: 'line',
			data: [60, 10, 20, 40, 30],
			borderColor: '#6fbbac',
			borderDash: [2, 2],
			borderWidth: 0.8,
			pointStyle: 'circle',
			pointBackgroundColor: '#6fbbac',
			pointBorderWidth: 10,
		},
	]
}
</script>

<style scoped>
	.grid-padding {
		padding-left: 2em;
		padding-right: 2em;
	}
	.chart-top, .chart-bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 2em;
		margin-top: 2%;
		color: var(--color-white);
	}
	.chart-bottom {
		align-items: flex-start;
	}
	.chart-label ion-icon {
		font-size: 0.7em;
	}
	.chart-label div {
		width: 2.6em;
		font-size: 1.3em;
	}
	.bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-white);
		font-size: 1.2em;
		margin: 15px 0;
	}
	ion-avatar, .green-icon {
		background: var(--color-white);
		padding: 2px;
		width: 2em;
		height: 2em;
		margin: 0 5px 0 15px;
	}
	.green-icon {
		background: var(--ion-text-color-g);
		border-radius: 50%;
	}
	ion-icon {
		margin-left: 3px;
	}
	@media all and (max-width: 390px) {
		.grid-padding {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
