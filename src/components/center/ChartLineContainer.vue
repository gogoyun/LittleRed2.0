<template>
	<div class="chart">
		<Line :data="data" :options="options" style="width:100%;max-height: 120px;" />
	</div>
	<div class="bottom">
		<div class="title">營業額成長率 月平均</div>
		<div class="trend">
			<div class="trangle"></div>
			<div class="percent">54<span>%</span></div>
		</div>
	</div>
</template>

<script setup>
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
import { options } from "@/components/center/lineConfig.js";
const trangleH = '7px';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
//chart1
const data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	datasets: [
		{
			data: [19, 20, 40, 40, 19, 60, 70, 65, 60],
			backgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(50,0,50,100);
				gradient.addColorStop(0, "rgba(222, 83, 78, 1)");
				gradient.addColorStop(1, "rgba(222, 83, 78, 0)");
				return gradient;
			},
			borderColor: 'rgba(222, 83, 78, 0.5)',
			borderWidth: 1,
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
		padding-top: 2%;
	}
	.bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-white);
	}
	.trend {
		position: relative;
		padding-left: calc(v-bind(trangleH) + 2px);
		margin: 5px 0 6px 10px;
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
</style>
