<template>
  <ion-page>
    <HeaderContainer />
    <ion-content :fullscreen="true">
      <MainContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import MainContainer from '@/components/dashboard/MainContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
</script>