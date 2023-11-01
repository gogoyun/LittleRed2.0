<template>
	<div class="canvas">
		<Doughnut :data="data" :options="optionsInfo" style="width:90px; height: 50px;" :plugins="overlapDlice" />
	</div>
	<div class="score ion-text-center" :style="chartColorStyle">
		<span class="value">{{ chartValue }}</span>
		<span> 分</span>
		<div class="title">我的契合度評分</div>
	</div>
</template>
<script setup>
// chart
import {
	Chart as ChartJS,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { optionsInfo, overlapDlice } from "@/components/product/doughnutConfig.js";
ChartJS.register(ArcElement, Tooltip, Legend)
//chart1
const chart1Max = 100;
const chartValue = 93;
const chartColor = chartValue >= 60 ? "#de534e" : "#39b04a";
const chartColorStyle = { 'color': chartColor };
const data = {
	datasets: [
		{
			borderWidth: 0,
      borderRadius: [50],
			backgroundColor: [chartColor],
			hoverBackgroundColor: [chartColor],
			data: [chartValue],
			circumference: (ctx) => {
				return ctx.dataset.data / chart1Max * 180
			},
			datalabels: {
				display: false
			}
		},
		{
			borderWidth: 0,
      borderRadius: [50],
			backgroundColor: ["#fff"],
			hoverBackgroundColor: ["#fff"],
			data: [chart1Max],
			circumference: (ctx) => {
				return ctx.dataset.data / chart1Max * 180
			},
			datalabels: {
				display: false
			}
		}
	]
}
</script>

<style scoped>
	.canvas {
		position: absolute;
		top: 2px;
	}
	.score {
		position: absolute;
		top: 48%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100px;
	}
	.score .value {
		font-size: 2.7em;
		font-weight: bold;
		font-family: var(--ion-font-family-number);
	}
	.score .title {
		font-size: 0.7em;
	}
</style>
