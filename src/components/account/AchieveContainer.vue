<template>
	<ion-row class="ion-no-padding">
		<ion-col>
			<div class="achieve">
				<ion-row class="ion-justify-content-start ion-align-items-start">
					<ion-col size="3" v-for="item in achieveData" :key="item">
						<div class="item">
							<ion-thumbnail>
								<img :src="`assets/icon/account/achieve/${ item.image }`" />
							</ion-thumbnail>
							<div class="title ion-text-center">{{ item.title }}</div>
							<div class="description ion-text-center">{{ item.description }}</div>
						</div>
					</ion-col>
				</ion-row>
			</div>
		</ion-col>
	</ion-row>
</template>
<script setup>
import { IonRow, IonCol, IonThumbnail } from '@ionic/vue';
import { achieveData } from "@/utils/commonData.js";
</script>
<style scoped>
.achieve {
	margin-top: 5px;
}
.achieve .item {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.achieve ion-thumbnail {
	--size: 25vw;
	max-width:80px;
	max-height:80px;
}
.achieve .active ion-thumbnail {
	background: rgba(241, 116, 86, 0.2);
}
.achieve .item .title {
	font-size: 1.2em;
	color: #77c414;
}
.achieve .item .description {
	font-size: 0.9em;
	color: #ccc;
}
</style>