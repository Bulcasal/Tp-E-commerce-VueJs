<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <main>
    <div id="app">
      <Header></Header>
      <router-view></router-view>
    </div>
  </main>
</template>


<style scoped>
/* #app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

main {
  width: 100%;
  flex: 1;
} */
</style>