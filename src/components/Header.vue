<template>
  <header>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/catalogue">Catalogue</router-link>
      <div class="cart-display">
        <router-link to="/panier">
          <span class="cart-icon">Mon panier</span>
          <div v-if="!cartStore.isEmpty" class="cart-count">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id="counter">{{ cartStore.count }}</span>
          </div>
        </router-link>
      </div>
      <div class="connectButtons">

        <div class="user-connect">
          <router-link to="/connexion"><i class="fa-solid fa-circle-user"></i>Se connecter</router-link>
          <router-link to="/register"><i class="fa-regular fa-circle-user"></i>S'inscrire</router-link>
        </div>
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
}

header i {
  color: #ff5c5c;
  margin-left: 20px;
  margin-right: 5px;
}

.cart-display {
  display: flex;
}

.fa-cart-shopping {
  margin-top: 10px;
}

#counter {
  margin-bottom: 10px;
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
    height: 80px;
  }
}

@media only screen and (max-width: 600px) {
  body {
    margin: 0;
    padding: 5;
  }

  header {
    display: flex;
    max-width: fit-content;
    max-height: 150px;
  }

  .user-connect {
    display: flex;
    flex-direction: column;
  }
}
</style>