<template>
  <div class="main-container">
    <div v-for="product in latestProducts" :key="product.id" class="product">
      <img :src="product.image" alt="Product Image" />
      <h3>{{ product.name }}</h3>
      <h4>Prix: {{ product.unit_price }} €</h4>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const latestProducts = ref([]);

onMounted(() => {
  fetch('/data.json')
    .then(response => response.json())
    .then(data => {
      latestProducts.value = data.products.slice(0, 3);
    })
    .catch(error => console.error('Erreur de chargement des données :', error));
});
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-around;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
}

.product h3 {
  color: #ff5c5c;
  font-family: 'Spinnaker';
}

.product h4 {
  font-family: 'Pt Sans';
}

.product img {
  margin: 0px 5px 0px 5px;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

/**Responsive */
@media only screen and (max-width: 600px) {
  .main-container {
    flex-direction: column;
  }
}
</style>