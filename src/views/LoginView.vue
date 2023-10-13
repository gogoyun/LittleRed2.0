<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <LoginContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import LoginContainer from '@/components/LoginContainer.vue';
</script>