<template>
  <header>
    <nav>
      <div id="burger-container" :class="{ 'active': active }">
        <button class="burger-button" @click="toggleActive">
          <span class="fa-solid fa-burger" @click="showMenu = !showMenu"></span>
        </button>
        <div v-show="showMenu" id="burgerMenu">
          <router-link to="/">Accueil</router-link>
          <router-link to="/catalogue">Catalogue</router-link>
          <router-link to="/panier">
            <div class="cart-container">
              <span class="cart-icon">Mon panier</span>
              <div v-if="!cartStore.isEmpty" class="cart-count">
                <i class="fa-solid fa-cart-shopping"></i>
                <span id="counter">{{ cartStore.count }}</span>
              </div>
            </div>
          </router-link>
          <div class="user-connect">
              <router-link to="/connexion"><i class="fa-solid fa-circle-user"></i>Se connecter</router-link>
              <router-link to="/register"><i class="fa-regular fa-circle-user"></i>S'inscrire</router-link>
            </div>
        </div>
      </div>
      <div class="toggleInactive">
        <div class="main-link-container">
          <div class="link-container">
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
        </div>
          <div class="connectButtons">
            <div class="user-connect">
              <router-link to="/connexion"><i class="fa-solid fa-circle-user"></i>Se connecter</router-link>
              <router-link to="/register"><i class="fa-regular fa-circle-user"></i>S'inscrire</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/cartStore';

const showMenu = ref(false);
const toggleActive = () => {
  console.log('kikou')
  showMenu.value = !showMenu.value;
};

export default defineComponent({
  name: 'Header',
  setup() {
    const cartStore = useCartStore();
    return { cartStore, showMenu };
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  }
})
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #001f3f, #073665);
  color: white;
  padding: 1rem;
  width: auto;
  height: 80px;
}

.main-link-container {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
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

.link-container {
  display: flex;
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

#burger-container {
  display: none;
}


@media screen and (max-width: 600px) {
  body {
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    width: auto;
    height: 120px;
    background: #001f3f !important;
  }

  .user-connect {
    display: flex;
    flex-direction: column;
  }

  #burger-container {
    display: block;
  }

  .fa-burger {
    font-size: xxx-large;
    color: #ff5c5c;
  }

  .burger-button {
    background-color: #001f3f;
    border: none;
  }

  .toggleInactive {
    display: none;
  }

  #burgerMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10;
    left: 0;
    width: fit-content;
    height: auto;
    font-size: x-large;
    padding: 5px;
    background: linear-gradient(to bottom, #001f3f, #073665);
  }

  .cart-container {
    display: flex;
    align-items: baseline;
  }

  .cart-icon {
    margin: 0;
  }

  .fa-circle-user {
    display: none;
  }
}
</style>