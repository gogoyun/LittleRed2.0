<template>
  <ion-page>
    <HeaderContainer />
    <ion-content :fullscreen="true">
      <AccountContainer />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import HeaderContainer from '@/components/common/HeaderContainer.vue';
import AccountContainer from '@/components/account/AccountContainer.vue';
</script>