<template>
    <div>
      <Navbar />
      <div>
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '~/pages/Footer.vue'
  
  export default {
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Add your layout styles here */
  </style>