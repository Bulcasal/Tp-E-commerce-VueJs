<script setup>
import HeaderBis from './components/HeaderBis.vue';
import { defineComponent, ref } from 'vue';

</script>

<template>
  <main>
    <div id="app">
      <HeaderBis></HeaderBis>
      <router-view></router-view>
    </div>
  </main>
</template>
