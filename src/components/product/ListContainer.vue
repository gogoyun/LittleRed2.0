<template>
  <ion-grid>
    <ion-row class="search ion-align-items-center padding-horizontal-10">
			<ion-col class="hello" size="12">
        <h1>HELLO, <span>小紅暱稱</span></h1>
      </ion-col>
			<ion-col>
				<ion-item class="search-bar" lines="none">
					<ion-input placeholder="粉底、雨衣、團購美食..."></ion-input>
					<ion-thumbnail slot="end">
						<img src="assets/icon/search.svg" />
					</ion-thumbnail>
				</ion-item>
			</ion-col>
			<ion-col size="auto">
				<ion-button size="small" shape="round" class="filter" id="filter-modal">
					篩選&ensp;
					<ion-icon :icon="optionsOutline" style="color:#fff" />
				</ion-button>
				<ion-modal
					ref="modal"
					trigger="filter-modal"
					:initial-breakpoint="1"
					:breakpoints="[0, 1]"
					:handle="false"
				>
					<FilterModal />
				</ion-modal>
			</ion-col>
		</ion-row>
		<div class="scroll">
			<ion-row class="top-slider">
				<ion-col class="ion-no-padding">
					<h2>近期熱賣的商品 | TOP5</h2>
					<SwiperTop5Container />
				</ion-col>
			</ion-row>
			<ion-row class="list">
				<ion-col class="ion-no-padding">
					<ion-row class="list-bar">
						<ion-col size="12" class="tabs ion-no-padding">
							<ion-segment :scrollable="true" value="all">
								<ion-segment-button value="all">
									<ion-label>所有代言</ion-label>
								</ion-segment-button>
								<ion-segment-button value="star">
									<ion-label>明星商品排行</ion-label>
								</ion-segment-button>
								<ion-segment-button value="sale">
									<ion-label>銷售排行</ion-label>
								</ion-segment-button>
								<ion-segment-button value="CR">
									<ion-label>轉換率最高</ion-label>
								</ion-segment-button>
								<ion-segment-button value="price">
									<ion-label>售價最高</ion-label>
								</ion-segment-button>
								<ion-segment-button value="order">
									<ion-label>累計訂單數</ion-label>
								</ion-segment-button>
								<ion-segment-button value="performance">
									<ion-label>業績暴衝</ion-label>
								</ion-segment-button>
								<ion-segment-button value="steady">
									<ion-label>穩健型</ion-label>
								</ion-segment-button>
								<ion-segment-button value="profit">
									<ion-label>分潤金額最高</ion-label>
								</ion-segment-button>
								<ion-segment-button value="hot">
									<ion-label>熱門組合</ion-label>
								</ion-segment-button>
							</ion-segment>
						</ion-col>
						<ion-col class="sort padding-horizontal-10">
							<ion-row>
								<ion-col><span>所有代言</span> | <span>搜尋度</span> <span>高———低</span></ion-col>
								<ion-col size="auto" class="sortbtn">
									排序<span class="sort-icon"></span>
								</ion-col>
							</ion-row>
						</ion-col>
					</ion-row>
					<!-- 代言商品 -->
					<ProductContainer />
				</ion-col>
			</ion-row>
			
		</div>
  </ion-grid>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonItem, IonInput, IonThumbnail, IonButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonModal } from '@ionic/vue';
import { optionsOutline } from 'ionicons/icons';
import ProductContainer from '@/components/product/ProductContainer.vue';
import SwiperTop5Container from '@/components/product/SwiperTop5Container.vue';
import FilterModal from './FilterModal.vue';
</script>

<style scoped>
	ion-grid {
		position: relative;
		padding: 0;
		height: 100%;
	}
	h1 {
    margin-top: 0;
		margin-bottom: 5px;
		font-size: 1.6em;
  }
	.hello span {
    font-size: 1.2em;
  }
	.search {
		position:sticky;
		top: 0;
		background: #fff;
	}
  .search ion-thumbnail {
		--size: 20px;
	}
	.search ion-item {
		--border-radius: 10px;
		--background: #eee;
		--min-height: 30px;
		--padding-start: 10px;
		--inner-padding-end: 0;
		font-size: 1em;
	}
	.search ion-input {
		border-right: 0.8px solid #4d4d4d;
		min-height: 24px;
	}
	.filter {
		--background: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-hover: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-focused: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--background-activated: linear-gradient(90deg, var(--ion-text-color-r-dark),var(--ion-text-color-r-light),var(--ion-text-color-r-light));
		--box-shadow: none;
		--padding-start: 12px;
		--padding-end: 12px;
		--padding-top: 10px;
		--padding-bottom: 10px;
	}
	ion-modal {
		--height: auto;
		--border-radius: 0;
	}
	.top-slider {
		margin-bottom: 15px;
	}
	.top-slider h2 {
    margin-bottom: 15px;
    font-size: 1.5em;
		padding-left: 15px;
		padding-right: 15px;
  }
	.scroll {
		overflow-y: auto;
		height: 100%;
	}
	.list {
		background: #fff;
		box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.2);
	}
	.list-bar {
		position: sticky;
		top: 0;
		z-index: 9;
		background: #fff;
	}
	.tabs, .sort {
		background: #eee;
	}
	.list-bar ion-segment {
		--background: rgba(0, 0, 0, 0);
		border-radius: 0;
	}
	.list-bar ion-segment-button {
		color: #808080;
		--border-radius: 0;
    --indicator-color: rgba(0, 0, 0, 0);
		--indicator-box-shadow: none;
		--padding-top: 15px;
		--padding-bottom: 15px;
		margin-top: 0;
		margin-bottom: 0;
  }
	.list-bar ion-segment-button::before {
		border: none;
	}
	.list-bar ion-segment-button::part(indicator) {
		border-bottom: 5px solid var(--ion-text-color-r-dark);
	}
	.segment-button-checked {
		color: var(--color);
	}
	.sort {
		font-size: 1em;
		margin: 5px 0;
	}
	.sortbtn {
		color: var(--ion-text-color-purple);
		position: relative;
		display: flex;
	}
	.sort-icon {
		width: 15px;
	}
	.sort-icon::before {
		content: "";
		position: absolute;
		top: 5px;
		right: 5px;
		width: 0;
		height: 0;
		border-color: rgba(76, 64, 114, 0.5) rgba(0, 0, 0, 0);
		border-style: solid solid solid;
		border-width: 0 4px 7px 4px;
	}
	.sort-icon::after {
		content: "";
		position: absolute;
		bottom: 5px;
		right: 5px;
		width: 0;
		height: 0;
		border-color: rgba(76, 64, 114, 1) rgba(0, 0, 0, 0);
		border-style: solid solid none;
		border-width: 7px 4px 0 4px;
	}
</style>
