<template>
	<ion-row>
		<ion-col class="uploadArea" @click="$refs.picArea.click()">
			<div class="area">
				<div class="preview">
					<div>{{ title }} {{ filename }}</div>
					<ion-thumbnail>
						<img src='assets/icon/common/trash.svg'>
					</ion-thumbnail>
				</div>
				<input type="file" ref="picArea" id="picID" @change="handleFiles">
			</div>
		</ion-col>
	</ion-row>
</template>

<script setup>
import { ref } from 'vue';
import { IonRow, IonCol, IonThumbnail } from '@ionic/vue';
const bg = ref("#eee");
const title = ref("上傳附件檔案");
const filename = ref(null);
const handleFiles = (event) => {
	const uploadFile = event.target.files[0]
	if (/.*(png)|(jpg)|(jpeg)|(pdf)/.test(uploadFile.name) === false) return alert('檔案格式錯誤： 副檔名必須是 .png / .jpg / .jpeg / .pdf')
	let reader = new FileReader();
  reader.readAsDataURL(uploadFile)
	filename.value = event.target.files[0].name
	bg.value = "#ebdcce";
	title.value = "已上傳";
}
</script>
<style scoped>
	input[type='file'] {
		display: none;
	}
	.uploadArea {
		color: #959595;
		font-size: 1.2em;
		min-height: 45px;
	}
	.uploadArea .area {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		background: v-bind(bg);
		border-radius: 45px;
		height: 100%;
	}
	.uploadArea .preview {
		padding: 0 10px 0 3em;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	ion-thumbnail {
		--size: 20px;
	}
</style>