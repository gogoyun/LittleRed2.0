<template>
	<ion-row>
		<ion-col class="uploadArea" @click="$refs.picArea.click()">
			<div class="area">
				<div class="flex-1">
					<div class="camera ion-text-center">
						<ion-img src="assets/icon/account/upload_camera.svg" />
						拍照
					</div>
				</div>
				<div class="border-right"></div>
				<div class="flex-1">
					<div class="upload ion-text-center">
						<ion-img src="assets/icon/account/upload_picture.svg" />
						上傳
					</div>
				</div>
				<div class="preview" :style="{ background: pic ? 'rgba(204, 204, 204, 1)' : 'rgba(204, 204, 204, 0)' }">
					<input type="file" ref="picArea" id="picID" @change="handleFiles">
					<ion-img :src="pic" v-if="pic"/>
				</div>
			</div>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { ref } from 'vue';
import { IonRow, IonCol, IonImg } from '@ionic/vue';
const pic = ref(null);
const handleFiles = (event) => {
	const uploadFile = event.target.files[0]
	if (/.*(png)|(jpg)|(jpeg)/.test(uploadFile.name) === false) return alert('檔案格式錯誤： 副檔名必須是 .png / .jpg / .jpeg')
	let reader = new FileReader();
	reader.onload = e => pic.value = e.target.result
  reader.readAsDataURL(uploadFile)
}
</script>
<style scoped>
	input[type='file'] {
		display: none;
	}
	.uploadArea {
		color: #959595;
		font-size: 1.2em;
		min-height: 30vh;
	}
	.uploadArea .area {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		background: #eee;
		border-radius: 10px;
		height: 100%;
	}
	.uploadArea .area .flex-1 {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.camera, .upload {
		width: 40%;
	}
	.preview {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.preview ion-img {
		height: 100%;
	}
	.border-right {
		background: #959595;
		width: 1px;
		height: 90%;
	}
</style>