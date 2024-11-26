<template>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:light"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat"
    rel="stylesheet"
  />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import './style.scss';
body {
  margin: 0;
  font-family: "Montserrat";
}
</style>
