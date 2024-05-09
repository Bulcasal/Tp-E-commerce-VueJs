<template>
  <header>
    <nav>
      <div class="burger-container" :class="{ 'active': active }">
        <button class="burger-button" @click="toggleActive">
          <span class="fa-solid fa-burger" @click="toggleActive"></span>
        </button>
        <div class="burgerMenu">
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

// const isActive = ref(false);

//     const activateElement = () => {
//       isActive.value = true;
//     };


export default defineComponent({
  name: 'HeaderBis',
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

.burgerMenu {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}

.burger-button {
  display: none;
}
.burgerMenu a{
  color: white;
}

.fa-burger {
  display: none;
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
/* Styles pour la barre de navigation */
header {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #001f3f, #073665);
  color: white;
  padding: 1rem;
  width: auto;
  height: 80px;
  justify-content: center;
}
header a {
  color: antiquewhite;
  text-decoration: none;
  font-family: 'PT Sans';
}
/* Styles pour les liens */
router-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s;
}

router-link:hover {
  background-color: #0069d9;
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

header a {
  color: antiquewhite;
  text-decoration: none;
  font-family: 'PT Sans';
}

.connectButtons {
  display: flex;
  justify-content: space-evenly;
}

/* Breakpoint menu burger */
@media screen and (max-width: 600px) {
  .activated header {
      background-color: #ff5c5c;
  }
   header {
    height: 120px;
    background: #001f3f !important;
  }

  .burger-container {
    display: block;
  }

  .fa-burger {
    display: block;
    font-size: xxx-large;
    color: #ff5c5c;
  }

  .burger-button {
    display: block;
    background-color: #001f3f;
    border: none;
  }

  .burgerMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    width: fit-content;
    height: auto;
    font-size: x-large;
    padding: 30px;
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

    .user-connect {
    display: flex;
    flex-direction: column;
  }
  .activated .burgerMenu{
      display: none;
  }
  .user-connect a {
    margin: 20px 0;
  }
}
</style>
