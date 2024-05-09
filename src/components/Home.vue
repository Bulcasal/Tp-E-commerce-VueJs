<template>
  <div class="mainContainer">
    <h1>Bienvenue sur Bijou'R</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quo
      magnam! Fuga voluptatem minima error quis temporibus, ut eos atque
      exercitationem quidem officia? Deserunt nemo maxime fugiat soluta quidem
      at accusamus officia reprehenderit autem non libero, deleniti corporis
      cum voluptatum velit ipsam quasi molestiae sint numquam reiciendis!
    </p>
  </div>
  <h2>Les dernières nouveautés</h2>
  <div class="latestProducts">
    <Latest></Latest>
  </div>

  <div class="galleryLink">
    <router-link to="/catalogue">
      <p>Tous nos produits</p>
    </router-link>
  </div>
</template>

<script setup>
import Latest from './Latest.vue';
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

h1 {
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 3rem;
}

h2 {
  text-align: center;
  font-family: 'Spinnaker';
  color: #ff4076;
}

p {
  font-family: 'PT Sans';
  margin: 50px;
  text-align: justify;
}

.galleryLink p {
  font-family: 'Dancing Script';
  text-decoration: none;
  font-size: xx-large;
  color: #001f3f;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .main-container p {
    text-align: justify;
  }

  .galleryLink a {
    font-size: 3rem;
  }
}
</style>