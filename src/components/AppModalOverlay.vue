<!-- <script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  active: Boolean,
  selectedProduct: Object,
});

defineEmits(["close"]);

const closeModal = () => {
  emit('close');
};
</script>
<template>
  <div v-if="active" class="modal-overlay">
   <div class="modal-overlay-bg" @click="$emit('close')"></div>
    <div class="modal-overlay-content">
      <span class="close" @click="$emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div v-if="selectedProduct">
        <div class="card mb-3">
          <h3 class="card-header">{{ selectedProduct.name }}</h3>
          <img :src="selectedProduct.image" alt="Product Image" />
          <div class="card-body">
            <p class="card-text">{{ selectedProduct.description }}</p>
            <p class="card-text">Prix: {{ selectedProduct.unit_price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.close {
  position: fixed;
  font-size: xx-large;
  margin-top: -20px;
}

.modal-overlay {
  max-width: 500px;
  max-height: fit-content;
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(235, 235, 235, 0.858);
  font-family: 'Pt Sans';
}
/* 
.modal-overlay-content {
  max-width: 50%;
  max-height: 80%;
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
} */

.modal-overlay img {
  margin-left: 100px;
  width: 50%;
  height: 50%;
}

.modal-overlay-content {
  top: 50%;
  left: 50%;
  /* transform: translate(-10%, -50%); */
}

.modal-overlay i {
  color: #ff4076;
  margin-bottom: 20px !important;
}
.card mb-3 {
  max-width: 500px !important;
}

/* @media (min-width: 1000px) {
  .modal-overlay-content {
    max-width: 50%;
    height: 700px;
    z-index: 9999;
    background-color: rgba(235, 235, 235, 0.858);
  }
} */
</style> -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  active: Boolean,
  selectedProduct: Object,
});

defineEmits(["close"]);

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div v-if="active" class="modal-overlay">
    <!--<div class="modal-overlay-bg" @click="$emit('close')"></div>-->
    <div class="modal-overlay-content">
      <span class="close" @click="$emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div v-if="selectedProduct" class="modal-content">
        <div class="card mb-3">
          <h3 class="card-header">{{ selectedProduct.name }}</h3>
          <img :src="selectedProduct.image" alt="Product Image" class="product-image" />
          <div class="card-body">
            <p class="card-text">{{ selectedProduct.description }}</p>
            <p class="card-text">Prix: {{ selectedProduct.unit_price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h3 {
  text-align: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-overlay-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-overlay-content {
  position: relative;
  max-width: 50%;
  max-height: 90%;
  overflow: auto;
  background-color: rgba(235, 235, 235, 0.92);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {
  float: right;
  position: absolute;
  color: #ff4076;
  /* top: 10px; */
  cursor: pointer;
}

.product-image {
  display: block; /* Pour centrer l'image */
  margin: 0 auto; /* Pour centrer l'image horizontalement */
  max-width: 70%;
  height: auto;
  margin-bottom: 10px;
}

.card-header {
  margin-top: 0;
}

.card-body {
  padding: 0;
}

.card-text {
  margin-bottom: 10px;
}
</style>
