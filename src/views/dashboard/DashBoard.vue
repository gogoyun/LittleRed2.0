<template>
  <ion-page>
    <HeaderContainer />
    <ion-content :fullscreen="true">
      <div class="bg">
        <ion-img
          src="assets/image/dashboard_bg.svg"
        ></ion-img>
      </div>
      <MainContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import MainContainer from '@/components/dashboard/MainContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
</script>
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  top: 0;
}
</style>