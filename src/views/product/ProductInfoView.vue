<template>
  <ion-page>
    <HeaderContainer />
    <ion-content :fullscreen="true">
      <ListContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import ListContainer from '@/components/product/InfoContainer.vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
</script>