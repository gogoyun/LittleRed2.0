<template>
	<div class="chart">
		<Line :data="data" :options="options" style="width:100%;max-height: 120px;" />
		<div class="chart-line">
			<div class="line">
				<div class="percent">100%</div>
			</div>
			<div class="line">
				<div class="percent">50%</div>
			</div>
			<div>
				<div class="percent">20%</div>
			</div>
		</div>
		<div class="label">
			<div class="title">銷售漏斗 Product Funnel</div>
			<div class="tag">
				<div>
					<ion-icon :icon="square" style="color: var(--ion-text-color-g)" /> <span>TOP10平均</span>
				</div>
				<div>
					<ion-icon :icon="square" style="color: var(--ion-text-color-r-dark)" /> <span>我的銷售</span>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom">
		<div><span class="value" style="color: #f17456;">129,456</span><span class="title"> 瀏覽數</span></div>
		<div><span class="value" style="color: #ff9933;">30,422</span><span class="title"> 點擊數</span></div>
		<div><span class="value" style="color: #ffa800;">1,923</span><span class="title"> 購買數</span></div>
	</div>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { square } from 'ionicons/icons';
// chart
import {
	Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
	Filler,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { options } from "@/components/dashboard/funnelConfig.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
//chart1
const data = {
	labels: ['瀏覽數','點擊數','購買數','購買數'],
	datasets: [
		{
			data: [100, 60, 35, 35],
			borderColor: '#6fbbac',
			borderWidth: 1.5,
			pointRadius: 0,
			tension: 0.5,
			datalabels: {
				display: false
			}
		},
		{
			data: [100, 50, 20, 20],
			backgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(0,100,300,100);
				gradient.addColorStop(0, "rgba(241, 116, 86, 0.6)");
				gradient.addColorStop(1, "rgba(255, 168, 0, 0.6)");
				return gradient;
			},
			borderWidth: 0,
			pointRadius: 0,
			tension: 0.5,
			fill: {
				target: 'origin',
			},
			datalabels: {
				display: false
			}
		}
	]
}
</script>

<style scoped>
	.chart {
		position: relative;
		padding-top: 5%;
		padding-right: 5px;
	}
	.chart-line {
		position: absolute;
		padding: 8% 5px calc(2% + 1px) 10px;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
	}
	.chart-line > div {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.chart-line .percent {
		position: absolute;
		bottom: 5px;
		left: 5px;
		padding: 4px 5px;
		font-family: var(--ion-font-family-number);
		font-size: 0.8em;
		font-weight: bold;
		color: var(--color-white);
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}
	.chart-line .line {
		border-right: 2px solid #eee;
	}
	.chart .label {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 140px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.label .tag {
		margin-top: 10px;
		width: 80px;
	}
	.tag div {
		margin-bottom: 5px;
	}
	.bottom {
		margin-bottom: 15px;
		margin-left: 10px;
		display: flex;
	}
	.bottom div {
		width: 100%;
	}
	.bottom .value {
		font-family: var(--ion-font-family-number);
		font-weight: bold;
		font-size: 1.3em;
		
	}
	.bottom .title {
		font-size: 0.9em;
	}
</style>
