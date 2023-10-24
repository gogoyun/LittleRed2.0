<template>
  <ion-page>
    <HeaderContainer />
    <ion-content :fullscreen="true" scroll-y="false">
      <div class="bg">
        <ion-img
          src="assets/image/product_bg.svg"
        ></ion-img>
      </div>
      <ListContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import ListContainer from '@/components/product/ListContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
</script>
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  top: 0;
}
</style>