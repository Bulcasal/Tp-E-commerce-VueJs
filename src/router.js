import { createRouter, createWebHistory } from 'vue-router';

import Home from "./components/Home.vue";
import Galery from "./components/Galery.vue";
import Cart from "./components/Cart.vue";
import Connexion from "./components/Connexion.vue";
import Register from "./components/Register.vue";
import Product from "./components/Product.vue";


const routes = [ 
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/catalogue",
    name: "catalogue",
    component: Galery,
  },
  {
    path: "/panier",
    name: "panier",
    component: Cart,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: Connexion,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
