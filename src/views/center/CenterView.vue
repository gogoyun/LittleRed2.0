	<template>
		<ion-page>
			<HeaderContainer :opacity="0" :menuColor="menuColor" :avatarHide="avatarHide" :changeLogo="changeLogo" :avatarClick="avatarClick" />
			<ion-content :fullscreen="true">
				<div class="bg">
					<ion-img src="assets/image/center_bg.svg"></ion-img>
				</div>
				<div :class="`photo ${ avatarStyle }`">
					<ion-thumbnail :class="avatarStyle">
						<img src='assets/icon/avatar.jpg'>
					</ion-thumbnail>
					<div :class="`info ${hide}`">
						<SocialConteiner />
					</div>
				</div>
				<div :class="`transform ${ bgStyle }`">
					<CenterContainer />
				</div>
			</ion-content>
		</ion-page>
	</template>

	<script setup>
	import { ref, reactive, onMounted } from 'vue';
	import { IonPage, IonContent, IonImg, IonThumbnail } from '@ionic/vue';
	import SocialConteiner from '@/components/center/SocialConteiner.vue';
	import CenterContainer from '@/components/center/CenterContainer.vue';
	import HeaderContainer from '@/components/common/HeaderContainer.vue';
	const avatarHide = 'ion-hide';
	const avatarClick = reactive({display: 'none'});
	const menuColor = ref('');
	const bgStyle = ref('');
	const avatarStyle = ref('');
	const hide = ref('');
	const changeLogo = ref('');
	const cssChange = () => {
		menuColor.value = 'white';
		bgStyle.value = 'toFull';
		avatarStyle.value = 'toHeader';
		avatarClick.value = {
			width: '48px',
			height: '48px',
		}
		hide.value = 'ion-hide';
		changeLogo.value = 'changeLogo';
	}
	const cssChangeBack = () => {
		menuColor.value = '';
		bgStyle.value = '';
		avatarStyle.value = '';
		avatarClick.value = {display: 'none'}
		hide.value = '';
		changeLogo.value = '';
	}
	onMounted(() => {
		let items = document.querySelector('ion-content');
		let isActive = false
		let startX; //滑鼠所在位置
		let locationNow; //卷軸現在位置
		items.addEventListener('mousedown', (e) => {
			isActive = true
			locationNow = items.scrollLeft
			startX = e.pageX //點下去就先取得起點位置
		});
		items.addEventListener('mouseup',()=>{
			isActive = false
		})
		items.addEventListener('mouseleave',()=>{
			isActive = false
		})
		items.addEventListener('mousemove',(e)=>{
			if(!isActive) return
			let moveafter = e.pageX
			let move = moveafter - startX //實際要移動的量
			//滑鼠移動後的位置-剛開始的位置(startX)= 卷軸移動的距離
			const target = locationNow - move;
			//向右移動超過10，轉至第二頁
			if(target> 10){cssChange()}
			//向左移動超過10，轉回第一頁
			if(target< -10){cssChangeBack()}
		})
	});
	</script>
	<style scoped>
	.bg {
		position: absolute;
		width: 100%;
		top: 0;
	}
	.photo {
		position: absolute;
		z-index: 999;
		width: 100%;
		top: 13%;
		right: 0;
	}
	.photo.toHeader {
		animation: moveToHeader 0.5s ease-in-out forwards;
	}
		@keyframes moveToHeader {
			0% {
				top: 13%;
				right: 0;
			}
			100% {
				width: 48px;
				top: 18px;
				right: 18px;
			}
		}
	.photo ion-thumbnail {
		--border-radius: 50%;
		margin: 0 auto;
		width: 8.5em;
		height: 8.5em;
	}
	.photo ion-thumbnail.toHeader {
		animation: sizeToHeader 0.5s ease-in-out forwards;
	}
		@keyframes sizeToHeader {
			0% {
				width: 8.5em;
				height: 8.5em;
			}
			100% {
				width: 4.2em;
				height: 4.2em;
			}
		}
	.transform {
		background: var(--color);
		position: absolute;
		right: 0;
		top: 44%;
		width: 90%;
		height: 70%;
		border-radius: 10px 0 0 10px;
	}
	.transform.toFull {
		animation: sizeToFull 0.5s ease-in-out forwards;
	}
		@keyframes sizeToFull {
			0% {
				right: 0;
				top: 44%;
				width: 90%;
				height: 70%;
				border-radius: 10px 0 0 10px;
			}
			100% {
				right: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}
		}
	</style>