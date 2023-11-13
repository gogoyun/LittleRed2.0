<template>
  <ion-page>
    <HeaderContainer :opacity="0" />
    <ion-content :fullscreen="true" scroll-y="false">
      <div class="bg">
        <ion-img
          src="https://placehold.co/400x700"
        ></ion-img>
      </div>
      <ListContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import ListContainer from '@/components/endorse/ListContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
</script>
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  top: 0;
}
</style>