<template>
  <ion-grid class="ion-no-padding">
		<ion-row>
			<ion-col>
				<div class="info">
					<div class="main-image" style="background-image: url('https://image-cdn-flare.qdm.cloud/q675ddc4931068/image/data/2020/09/11/356fd101f5c56b071618e344a9e0ee3d.jpg');"></div>
					<div class="circle">
						<ChartContainer />
					</div>
					<div class="content">
						<div class="chip">
							<div class="red">熱門</div>
						</div>
						<div class="title">
							<h1 class="ion-text-center">獨家訂製。物理抗菌雙層便當盒</h1>
						</div>
					</div>
				</div>
			</ion-col>
		</ion-row>
  </ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import ChartContainer from '@/components/product/ChartContainer.vue';
</script>

<style scoped>
.info {
	position: relative;
}
.main-image {
	height: 35vh;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: top;
	background-size: cover;
}
.circle {
	position: absolute;
	top: 25vh;
	left: 50%;
	transform: translateX(-50%);
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9;
}
.content {
	position: absolute;
	top: 32vh;
	border-radius: 15px;
	background: #fff;
	width: 100%;
	min-height: 100%;
	padding: 10px;
}
h1 {
	font-size: 1.75em;
}
</style>
