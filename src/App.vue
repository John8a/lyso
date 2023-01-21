<template>
  <!-- <AppNavbar v-if="$route.name!='login'"/> -->
  <AppNavbar />
  <router-view />
  <AppFooter v-if="$route.name!='login'"/>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #F4EFE6;
  --secondary-color: #879288;
  // font-family: 'Albert Sans', sans-serif;
  font-family: 'Assistant', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
  background: var(--primary-color); 
}

::-webkit-scrollbar-thumb {
  background: var(--secondary-color); 
  border-radius: 0px;
}

::-webkit-scrollbar-thumb:hover {  
  background: var(--secondary-color); 
} 

html {
  scroll-behavior: smooth;
  scrollbar-color: var(--secondary-color) var(--primary-color);
  scrollbar-width: thin;
}

body {
  background-color: var(--primary-color);
}
</style>
