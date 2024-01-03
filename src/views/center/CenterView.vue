	<template>
		<ion-page>
			<HeaderContainer :opacity="0" :logoColor="logoColor" :avatarHide="avatarHide" :changeLogo="changeLogo" :avatarClick="avatarClick" />
			<ion-content :fullscreen="true">
				<div id="basicBg" class="bg">
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
					<CenterContainer v-if="showLayer==1" />
					<SwiperContainer v-if="showLayer==2" @change-back="cssChangeBack" />
				</div>
			</ion-content>
		</ion-page>
	</template>

	<script setup>
	import { ref, reactive, onMounted } from 'vue';
	import { IonPage, IonContent, IonImg, IonThumbnail } from '@ionic/vue';
	import SocialConteiner from '@/components/center/SocialConteiner.vue';
	import CenterContainer from '@/components/center/CenterContainer.vue';
	import SwiperContainer from '@/components/center/SwiperContainer.vue';
	import HeaderContainer from '@/components/common/HeaderContainer.vue';
	const showLayer = ref(1);
	const avatarHide = 'ion-hide';
	const avatarClick = reactive({display: 'none'});
	const logoColor = ref('');
	const bgStyle = ref('');
	const avatarStyle = ref('');
	const hide = ref('');
	const changeLogo = ref('');
	const cssChange = () => {
		showLayer.value = 2;
		logoColor.value = 'white';
		bgStyle.value = 'toFull';
		avatarStyle.value = 'toHeader';
		avatarClick.value = {
			width: '48px',
			height: '48px',
		}
		hide.value = 'ion-hide';
		changeLogo.value = 'changeLogo';
		//底部背景
		setTimeout(() => {
			document.getElementById("basicBg").classList.add("ion-hide");
		}, 500);
		document.querySelector("ion-content").classList.add("changeBg");
	}
	const cssChangeBack = () => {
		showLayer.value = 1;
		logoColor.value = '';
		bgStyle.value = 'leaveFull';
		avatarStyle.value = 'leaveHeader';
		avatarClick.value = {display: 'none'}
		setTimeout(() => {
			hide.value = '';
		}, 500);
		changeLogo.value = '';
		//底部背景
		document.getElementById("basicBg").classList.remove("ion-hide");
		document.querySelector("ion-content").classList.remove("changeBg");
	}
	onMounted(() => {
		let items = document.querySelector('ion-content');
		let isActive = false
		let startX; //滑鼠所在位置
		let locationNow; //卷軸現在位置
		items.addEventListener('dragstart', (e) => {
			isActive = true
			locationNow = items.scrollLeft
			startX = e.pageX //點下去就先取得起點位置
		});
		items.addEventListener('dragend',()=>{
			isActive = false
		})
		items.addEventListener('drag',(e)=>{
			if(!isActive) return
			let moveafter = e.pageX
			let move = moveafter - startX //實際要移動的量
			//滑鼠移動後的位置-剛開始的位置(startX)= 卷軸移動的距離
			const target = locationNow - move;
			//向右移動超過10，轉至第二頁
			if(target> 10){cssChange()}
		})
	});
	</script>
	<style scoped>
	ion-content::part(background) {
		background: #ebdcce;
	}
	ion-content.changeBg::part(background) {
		background: var(--color);
	}
	.bg {
		position: absolute;
		width: 100%;
		top: 0;
	}
	.bg.toFull {
		display: none;
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
	.photo.leaveHeader {
		animation: leaveToHeader 0.5s ease-in-out forwards;
	}
		@keyframes leaveToHeader {
			0% {
				width: 48px;
				top: 18px;
				right: 18px;
			}
			100% {
				top: 13%;
				right: 0;
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
	.photo ion-thumbnail.leaveHeader {
		animation: sizeLeaveHeader 0.5s ease-in-out forwards;
	}
		@keyframes sizeLeaveHeader {
			0% {
				width: 4.2em;
				height: 4.2em;
			}
			100% {
				width: 8.5em;
				height: 8.5em;
			}
		}
	.transform {
		background: var(--color);
		position: absolute;
		right: 0;
		top: 44%;
		width: 90%;
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
	.transform.leaveFull {
		animation: sizeLeaveFull 0.5s ease-in-out forwards;
	}
		@keyframes sizeLeaveFull {
			0% {
				right: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}
			100% {
				right: 0;
				top: 44%;
				width: 90%;
				border-radius: 10px 0 0 10px;
			}
		}
	@media all and (max-width: 390px) {
		.photo ion-thumbnail {
			width: 7em;
			height: 7em;
		}
	}
	</style>