<template>
	<ion-page>
		<HeaderContainer />
		<ion-content :fullscreen="true" :scroll-events="true" @ionScroll="logScrolling($event)">
			<InfoContainer />
		</ion-content>
	</ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import InfoContainer from '@/components/product/InfoContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
const lastScrollTop = ref(0);
const logScrolling = (event) => {
	const scrollTop = event.detail.scrollTop;
	if (scrollTop > lastScrollTop.value) {
		// 向下滾動
		if(!document.querySelector(".fixed-bottom").classList.contains("hide")){
			document.querySelector(".fixed-bottom").classList.add("hide");
		}
	} else if (scrollTop < lastScrollTop.value) {
		// 向上滾動
		if(document.querySelector(".fixed-bottom").classList.contains("hide")){
			document.querySelector(".fixed-bottom").classList.remove("hide");
		}
	}
	lastScrollTop.value = scrollTop;
}
</script>