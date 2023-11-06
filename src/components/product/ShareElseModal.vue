<template>
	<ion-modal
		ref="modal"
		:initial-breakpoint="1"
		:breakpoints="[0, 1]"
		:handle="false"
		:is-open="isOpenElse"
		:enter-animation="enterAnimation"
		:leave-animation="leaveAnimation"
		@ionModalDidDismiss="setOpen('isOpenElse', false)"
	>
    <div class="modal">
			<ion-grid>
				<ion-row style="margin: -5px -5px 0;">
					<ion-col class="ion-no-padding">
						<ion-list>
							<ion-item class="back" @click="setOpen('isOpenElse', false)" lines="none" button detail="true">
								<ion-label>或 直接分享至社群</ion-label>
							</ion-item>
						</ion-list>
					</ion-col>
				</ion-row>
				<ion-row class="ion-padding">
					<ion-col>
						<div class="title">
							STEP.取得連結。按鈕 | 
							<div><span>直接複製連結、按鈕，「貼上」至您要曝光的位置</span></div>
						</div>
						<div class="shart-content">
							<ion-item lines="none">
								<ion-input value="https://www.holio.tw/"></ion-input>
								<ion-button slot="end" fill="clear">
									取得連結
									<ion-icon slot="end" size="small" :icon="copyOutline" />
								</ion-button>
							</ion-item>
						</div>
						<div class="share">
							<div class="preview ion-text-center">
								<ion-button size="small">買單去</ion-button>
							</div>
							<div class="title ion-text-center">| 此為按鈕預覽頁面 |</div>
							<ion-button class="copy" fill="clear">
								取得按鈕
								<ion-icon slot="end" size="small" :icon="copyOutline" />
							</ion-button>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
  </ion-modal>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonModal, IonList, IonItem, IonLabel, createAnimation, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
// import modal
import { isOpenElse, setOpen } from '@/utils/common.js';
const enterAnimation = (baseEl) => {
	const root = baseEl.shadowRoot;

	const backdropAnimation = createAnimation()
		.addElement(root.querySelector('ion-backdrop'))
		.fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

	const wrapperAnimation = createAnimation()
		.addElement(root.querySelector('.modal-wrapper'))
		.keyframes([
			{ transform: 'translateX(100%)' },
			{ transform: 'translateX(80%)' },
			{ transform: 'translateX(20%)' },
			{ transform: 'translateX(0)' },
		]);

	return createAnimation()
		.addElement(baseEl)
		.easing('ease-in-out')
		.duration(500)
		.addAnimation([backdropAnimation, wrapperAnimation]);
};

const leaveAnimation = (baseEl) => {
	return enterAnimation(baseEl).direction('reverse');
};
</script>
<style scoped>
	ion-modal {
		--height: auto;
	}
	ion-item.back {
		font-size: 1.5em;
		--background: #eee;
		--detail-icon-font-size: 1.6em;
		--inner-padding-top: 5px;
		--inner-padding-bottom: 5px;
		--inner-padding-start: 10px;
		--inner-padding-end: 20px;
	}
	.title {
		font-size: 1.5em;
		line-height: 1em;
		margin-bottom: 20px;
	}
	.title span {
		font-size: 0.65em;
		color: var(--ion-text-color-r-dark);
	}
	.shart-content ion-item {
		margin-bottom: 25px;
		--background: #eee;
		--border-radius: 6px;
		--padding-start: 20px;
		--padding-end: 0;
		font-size: 1em;
	}
	.share {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #eee;
		border-radius: 6px;
		padding: 20px 0;
	}
	.share .title {
		font-size: 1em;
		margin: 10px 0 0;
	}
	.preview ion-button {
		--background: var(--ion-text-color-g);
		--background-hover: var(--ion-text-color-g);
		--background-focused: var(--ion-text-color-g);
		--background-activated: var(--ion-text-color-g);
		--border-radius: 6px;
		--padding-start: 50px;
		--padding-end: 50px;
		--padding-top: 15px;
		--padding-bottom: 15px;
		font-size: 1.5em;
	}
	.share .copy {
		position: absolute;
		right: 10px;
		bottom: 0;
		font-size: 1em;
	}
</style>
