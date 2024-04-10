<template>
  <header>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/catalogue">Catalogue</router-link>
      <div class="cart-display">
        <router-link to="/panier">Mon panier<div v-if="!cartStore.isEmpty" class="cart-count absolute">{{
          cartStore.count }}</div></router-link>
      </div>
      <div class="connectButtons">
        <span class="cursor-pointer" @click="active = true">
          <fa icon="shopping-cart" size="lg" class="text-gray-700" />

        </span>
        <router-link to="/connexion"><i class="fa-solid fa-circle-user"></i>Se connecter</router-link>
        <router-link to="/register"><i class="fa-regular fa-circle-user"></i>S'inscrire</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/cartStore';

export default defineComponent({
  name: 'Header',
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  }
});
</script>

<style scoped>
header {
  background: linear-gradient(to right, #001f3f, #073665);
  color: white;
  padding: 1rem;
  width: 150vh;
  height: 500px;
  /* box-sizing: border-box; */
}

header i {
  color: #ff5c5c;
  margin-left: 20px;
  margin-right: 5px;
}

.cart-display {
  display: flex;
}

#connectOption {
  padding: 20px;
}

nav {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

router-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s;
}

router-link:hover {
  background-color: #0069d9;
}

header a {
  color: antiquewhite;
  text-decoration: none;
  font-family: 'PT Sans';
}

.connectButtons {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (min-width: 480px) {
  header {
    width: 100%;
    height: 10vh;
  }
}
</style>