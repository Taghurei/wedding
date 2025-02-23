<template>
  <head>
    <title>Béa & Gauthier</title>
  </head>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:light"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Great Vibes"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Playfair Display"
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
@import "./style.scss";
body {
  margin: 0;
  font-family: "Montserrat";

  h1 {
    font-size: 64px;
    margin-bottom: 32px !important;
    @media (max-width: 800px) {
      font-size: 42px;
      margin: 0px !important;
    }
  }
  h2 {
    font-size: 24px;
    margin-bottom: 12px !important;
    font-family: "Great Vibes", sans-serif;
    @media (max-width: 800px) {
      margin: 0px !important;
    }
  }
  h3 {
    font-size: 24px;
    margin-bottom: 12px !important;
    font-family: "Montserrat", light;
    @media (max-width: 800px) {
      margin: 0px !important;
    }
  }
  h4 {
    font-size: 18px;
    margin-bottom: 12px !important;
    font-family: "Montserrat", light;
    @media (max-width: 800px) {
      margin: 0px !important;
    }
  }
  p {
    margin-bottom: 12px !important;
    font-family: "Montserrat", light;
    font-weight: 200;
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
}
</style>
