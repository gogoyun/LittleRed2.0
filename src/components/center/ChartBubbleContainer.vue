<template>
	<ion-row class="ion-justify-content-center">
		<ion-col size="10" class="grid-padding">
			<div class="chart">
				<highcharts :options="chartOptions"></highcharts>
			</div>
			<ion-row class="bottom ion-justify-content-around">
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #f8ea21" /> 觀光旅遊 40%
				</ion-col>
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #c3ae95" /> 居家生活 10%
				</ion-col>
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #f7ac3b" /> 運動健身 24%
				</ion-col>
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #a27c52" /> 營養保健 5%
				</ion-col>
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #88c23f" /> 親子教育 15%
				</ion-col>
				<ion-col size="5">
					<ion-icon :icon="squareSharp" style="color: #ebdcce" /> 其他
				</ion-col>
			</ion-row>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { IonRow, IonCol, IonIcon } from '@ionic/vue';
import { squareSharp } from 'ionicons/icons';
// high chart
import hc from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
highchartsMore(hc);
const chartOptions = {
	chart: {
		type: 'packedbubble',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		height: '100%'
	},
	title: {
		text: undefined, //隱藏圖表標題
	},
	tooltip: {enabled: false},
	accessibility: {enabled: false}, //無障礙警告關閉
	credits: {enabled: false}, //浮水印關閉
	legend: {enabled: false},
	plotOptions: {
		packedbubble: {
			maxSize: '100%',
			zMin: 0,
			zMax: 10,
			layoutAlgorithm: {
				bubblePadding: 10,
				splitSeries: false,
				gravitationalConstant: 0.02,
				enableSimulation: false, //停止動畫
			},
			dataLabels: {
				enabled: true,
				format: '{point.value}%<br>{point.name}',
				filter: {
					property: 'y',
					operator: '>',
					value: 5
				},
				useHTML: true,
				style: {
					color: 'white',
					textOutline: 'none',
					fontWeight: 'normal',
					fontFamily: 'MElle HK Medium',
					textAlign: 'center',
				}
			},
		}
	},
	series: [{
		data: [
			{
				name: '觀光旅遊',
				value: 40,
				color: 'rgba(248, 234, 33, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},
			{
				name: '居家生活',
				value: 10,
				color: 'rgba(195, 174, 149, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},
			{
				name: '運動健身',
				value: 24,
				color: 'rgba(247, 172, 59, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},
			{
				name: '營養保健',
				value: 1,
				color: 'rgba(162, 124, 82, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},
			{
				name: '親子教育',
				value: 15,
				color: 'rgba(136, 194, 63, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},
			{
				name: '其他',
				value: 100-40-10-24-5-15,
				color: 'rgba(235, 220, 206, 0.4)',
				dataLabels: {
					style: {
						fontSize: '1.5em',
					}
				}
			},

		],
		
	}],
}
</script>

<style scoped>
	.grid-padding {
		padding-left: 2em;
		padding-right: 2em;
	}
	.bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-white);
		font-size: 1.2em;
		margin: 15px 0;
	}
	ion-icon {
		margin-right: 3px;
		opacity: 0.4;
	}
	@media all and (max-width: 390px) {
		.grid-padding {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
