<template>
	<ion-row style="margin: 0 -5px;">
		<ion-col>
			<div class="chart">
				<Doughnut :data="data" :options="options" style="width:100%;" :plugins="overlapDlice" />
				<div class="percent" style="color: #de534e;">2.35%</div>
				<div class="label ion-text-center">平均轉換率 | CVR</div>
				<div class="start ion-text-center">0%</div>
				<div class="end ion-text-center">{{ chart1Max }}%</div>
			</div>
		</ion-col>
		<ion-col>
			<div class="chart">
				<Doughnut :data="data2" :options="options" style="width:100%;" :plugins="overlapDlice" />
				<div class="percent" style="color: #de534e;">88%</div>
				<div class="label ion-text-center">營業額成長率/月</div>
				<div class="start ion-text-center">0%</div>
				<div class="end ion-text-center">{{ chart2Max }}%</div>
			</div>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { IonRow, IonCol } from '@ionic/vue';
// chart
import {
	Chart as ChartJS,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { overlapDlice, options } from "@/components/dashboard/doughnutConfig.js";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)
//chart1
const chart1Max = 10;
const chart2Max = 160;
const data = {
	datasets: [
		{
			borderWidth: 0,
			backgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(0,50,100,50);
				gradient.addColorStop(0, "#f17456");
				gradient.addColorStop(1, "#de534e");
				return gradient;
			},
			hoverBackgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(0,50,100,50);
				gradient.addColorStop(0, "#f17456");
				gradient.addColorStop(1, "#de534e");
				return gradient;
			},
			data: [2.35],
			circumference: (ctx) => {
				return ctx.dataset.data / chart1Max * 180
			},
			datalabels: {
				display: false
			}
		},
		{
			borderWidth: 0,
			backgroundColor: ["#6fbbac"],
			hoverBackgroundColor: ["#6fbbac"],
			data: [4.9],
			circumference: (ctx) => {
				return ctx.dataset.data / chart1Max * 180
			},
			datalabels: {
				display: true
			}
		},
		{
			borderWidth: 0,
			backgroundColor: ["#ccc"],
			hoverBackgroundColor: ["#ccc"],
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
const data2 = {
	datasets: [
		{
			borderWidth: 0,
			backgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(0,50,100,50);
				gradient.addColorStop(0, "#f17456");
				gradient.addColorStop(1, "#de534e");
				return gradient;
			},
			hoverBackgroundColor: (ctx) => {
				const canvas = ctx.chart.ctx;
				const gradient = canvas.createLinearGradient(0,50,100,50);
				gradient.addColorStop(0, "#f17456");
				gradient.addColorStop(1, "#de534e");
				return gradient;
			},
			data: [88],
			circumference: (ctx) => {
				return ctx.dataset.data / chart2Max * 180
			},
			datalabels: {
				display: false
			}
		},
		{
			borderWidth: 0,
			backgroundColor: ["#6fbbac"],
			hoverBackgroundColor: ["#6fbbac"],
			data: [67],
			circumference: (ctx) => {
				return ctx.dataset.data / chart2Max * 180
			},
			datalabels: {
				display: true
			}
		},
		{
			borderWidth: 0,
			backgroundColor: ["#ccc"],
			hoverBackgroundColor: ["#ccc"],
			data: [chart2Max],
			circumference: (ctx) => {
				return ctx.dataset.data / chart2Max * 180
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
		border-radius: 6px;
		background: rgba(76, 64, 114, 0.1);
		padding: 15px;
		margin: 0 5px;
	}
	.chart .percent {
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -70%);
		font-size: 2.5em;
		font-family: var(--ion-font-family-number);
		font-weight: 500;
	}
	.chart .label {
		position: absolute;
		left: 50%;
		bottom: 10%;
		transform: translateX(-50%);
		width: 100px;
	}
	.chart .start {
		position: absolute;
		left: 5%;
		bottom: 18%;
		width: 30px;
	}
	.chart .end {
		position: absolute;
		right: 5%;
		bottom: 18%;
		width: 30px;
	}
</style>
