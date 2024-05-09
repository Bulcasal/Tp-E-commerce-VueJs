<template>
  <div class="product">
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" width="300" />
      <span class="label">
        <p>Prix: {{ product.unit_price }} €</p>
      </span>
    </div>
    <div class="countInput">
      <AppCountInput v-model="count"></AppCountInput>
    </div>
    <div class="buttons">
      <button class="showProductButton" @click="showModal(product)">Description</button>
      <AppButton class="primary addProductCart" @click="$emit('addToCart', count, product), (count = 0)">Ajouter au
        panier</AppButton>
    </div>
  </div>

  <AppModalOverlay :active="active" :selectedProduct="selectedProduct" @close="active = false"></AppModalOverlay>
</template>

<script setup>
import { ref } from 'vue';
import AppCountInput from "./AppCountInput.vue";
import AppModalOverlay from "./AppModalOverlay.vue";

const props = defineProps({
  product: Object,
});

defineEmits(["addToCart"]);

const count = ref(0);
const active = ref(false);
const selectedProduct = ref(null);

const showModal = (product) => {
  active.value = true;
  selectedProduct.value = product;
};
</script>

<style scoped>
.countInput {
  margin: 50px 0 30px 0;
}

h2 {
  font-size: 1.3rem;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  width: calc(100% - 20px);
  max-width: 280px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.label {
  color: #10053e;
}

.product:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.product img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.product p {
  text-align: justify;
  font-size: medium;
  margin: 15px 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.addProductCart {
  background-color: white;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
  transition: background-color 0.4s ease, color 0.3s ease;
}

.addProductCart:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
}

.showProductButton {
  background-color: white;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #10053e;
  color: #10053e;
  transition: background-color 0.4s ease, color 0.3s ease;

}

.showProductButton:hover {
  background-color: #10053e;
  color: white;
}

.product-details {
  margin-bottom: -70px;
}

@media screen and (max-width: 600px) {
  .product p {
    text-align: center;
  }

  .label p {
    font-size: x-large;
  }

  .showProductButton {
    font-size: 1.5rem;
  }

  .addProductCart {
    font-size: 1.5rem;
  }
}
</style>
