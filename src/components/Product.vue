<template>
  <div class="product">
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" width="300" />
      <p>
        <span class="label">Description:</span>
        {{ product.description }}
      </p>
      <p><span class="label">Prix:</span> {{ product.unit_price }} €</p>
    </div>
    <div class="text-center m-4">
      <AppCountInput v-model="count"></AppCountInput>
    </div>
    <div class="buttons">
      {# <button class="showProductButton">Voir le produit</button> #}
      <AppModalOverlay :active="isModalVisible" @close="isModalVisible = false" @show="isModalVisible = true" .showProductButton>Voir le produit</AppModalOverlay>
      <AppButton class="primary addProductCart" @click="$emit('addToCart', count, product), (count = 0)">Ajouter au panier</AppButton>
    </div>
  </div>
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

const isModalVisible = ref(false);

</script>

<style scoped>
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
  max-height: 50%;
  height: 80%;
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
  border: 1px solid #5bba38;
  color: #5bba38;
  transition: background-color 0.4s ease, color 0.3s ease;
}

.addProductCart:hover {
  background-color: #5bba38;
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
</style>
