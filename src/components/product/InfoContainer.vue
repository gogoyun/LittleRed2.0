<template>
  <ion-grid class="ion-no-padding">
		<ion-row>
			<ion-col>
				<div class="product-info">
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
						<div class="price-price-block">
							<div class="price">NT.12,399</div><div class="sale">33% OFF</div>
						</div>
						<ion-row>
							<ion-col class="profit ion-text-center">
								<div class="value">7,320</div>
								<div class="title">可分潤金額 / 筆</div>
							</ion-col>
							<ion-col class="profit ion-text-center">
								<div class="value">129,487</div>
								<div class="title">曝光次數</div>
							</ion-col>
							<ion-col class="profit ion-text-center gray">
								<div class="value">***</div>
								<div class="title">代言轉換率 / %</div>
							</ion-col>
						</ion-row>
						<div class="tags">
							<div class="outline">影片</div>
							<div class="outline">圖文</div>
							<div class="outline">幽默</div>
							<div class="outline">理性</div>
							<div class="outline">兒童用品</div>
							<div class="outline">有體驗商品</div>
						</div>
						<div class="description" style="height: 500px">
							<p class="ion-text-center" style="font-size: 2em">以下為商品資訊範圍</p>
						</div>
					</div>
				</div>
			</ion-col>
		</ion-row>
  </ion-grid>
	<!-- button  -->
	<div class="fixed-bottom">
		<ion-button size="small" shape="round" class="endorsBtn">我要洽談</ion-button>
		<ion-button size="small" shape="round" class="shareBtn" id="share-modal">我要代言</ion-button>
	</div>
	<!-- 我要代言 -->
	<ShareModalContainer />
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import ChartContainer from '@/components/product/ChartContainer.vue';
import ShareModalContainer from '@/components/product/ShareModalContainer.vue';
</script>

<style scoped>
.product-info {
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
	padding: 15px;
}
h1 {
	font-size: 1.75em;
	margin-bottom: 5px;
}
.price-price-block {
	justify-content: center;
}
.profit {
	padding: 30px 10px;
	margin: 20px 5px 15px;
	background: rgba(76, 64, 114, 0.2);
	border-radius: 6px;
	color: var(--ion-text-color-purple);
}
.profit .value {
	font-family: var(--ion-font-family-number);
	font-weight: bold;
	font-size: 2.6em;
}
.profit.gray {
	background: #eee;
	color: #ccc;
}
.tags {
	display: flex;
	justify-content: center;
	margin-bottom: 15px;
}
.tags div {
	padding: 8px 5px;
	margin: 0 1px;
	border: 1px solid #ccc;
	border-radius: 8px;
  color: #4d4d4d;
}
.fixed-bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 16px 0;
	background: #fff;
	box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.2);
	transition: bottom .4s ease-in-out
}
.fixed-bottom.hide {
	bottom: -90px;
}
.fixed-bottom ion-button {
	font-size: 1.4em;
	--box-shadow: none;
	--padding-top: 15px;
	--padding-bottom: 15px;
	--padding-start: 40px;
	--padding-end: 40px;
	margin-inline-start: 4px;
	margin-inline-end: 4px;
}
.endorsBtn {
	--background: var(--ion-text-color-purple);
	--background-hover: var(--ion-text-color-purple);
	--background-focused: var(--ion-text-color-purple);
	--background-activated: var(--ion-text-color-purple);
}
.shareBtn {
	--background: linear-gradient(-90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-hover: linear-gradient(-90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-focused: linear-gradient(-90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
	--background-activated: linear-gradient(-90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
}
</style>
