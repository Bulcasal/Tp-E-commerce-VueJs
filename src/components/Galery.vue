<template>
  <div class="gallery">
    <h1>Tous nos produits</h1>
    <div class="grid">
      <ProductCard v-for="product in productStore.products" :key="product.name" :product="product"
        @addToCart="cartStore.addItems($event, product)" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/Product.vue";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";

const productStore = useProductStore();
const cartStore = useCartStore();

productStore.fill();
</script>

<style scoped>
h1 {
  margin-bottom: 70px;
}

.gallery {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr
  }
}
</style>
