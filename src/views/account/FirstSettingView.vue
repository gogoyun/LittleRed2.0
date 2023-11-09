<template>
  <ion-page>
    <ion-content :fullscreen="true" scroll-y="false">
      <div class="bg">
        <ion-img
          src="assets/image/account_first_bg.svg"
        ></ion-img>
      </div>
      <FirstSettingContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import FirstSettingContainer from '@/components/account/FirstSettingContainer.vue';
</script>
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: #ebdcce;
}
</style>