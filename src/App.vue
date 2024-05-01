<script setup>
import Header from './components/Header.vue';
import { defineComponent, ref } from 'vue';


</script>

<template>
  <main>
    <div id="app">
      <Header></Header>
      <router-view></router-view>
    </div>
  </main>
</template>
