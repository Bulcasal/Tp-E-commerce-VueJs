<template>
  <div v-if="active" class="modal-overlay">
    <div class="modal-overlay-content">
      <span class="close" @click="$emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div v-if="selectedProduct" class="modal-content">
        <div class="card mb-3">
          <h2 class="card-header">{{ selectedProduct.name }}</h2>
          <img :src="selectedProduct.image" alt="Product Image" class="product-image" />
          <div class="card-body">
            <p class="card-text">
            <p>Description:</p> {{ selectedProduct.description }}</p>
            <p class="card-text">Prix: {{ selectedProduct.unit_price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  active: Boolean,
  selectedProduct: Object,
});

defineEmits(["close"]);

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-overlay-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(235, 235, 235, 0.92);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: auto;
}

.modal-content {
  margin-top: 20px;
}

.close {
  margin-top: 0px;
  right: 0;
  position: absolute;
  color: #ff4076;
  top: 1;
  cursor: pointer;
}

.close i {
  font-size: xx-large;
}

.product-image {
  display: block;
  margin: 0 auto;
  width: 60%;
  height: auto;
  margin-bottom: 10px;
}

.card-header {
  margin-top: 50px;
}

.card-body {
  padding: 0;
}

.card-text {
  margin: 20px;
  text-align: left;
}

.card-text p {
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  .modal-overlay {
    width: 90%;
  }

  .modal-content {
    margin-top: 40px;
  }

  .product-image {
    width: 80%;
  }

  .card-text {
    font-size: large;
  }
}
</style>
