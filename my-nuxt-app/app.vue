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
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Great+Vibes&family=Noto+Color+Emoji&display=swap"
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
    font-size: 36px;
    margin-bottom: 32px !important;
    font-family: "Dancing Script", cursive;
    color: #333;
    @media (max-width: 800px) {
      margin: 0px !important;
    }
  }
  h2 {
    font-size: 22px;
    margin-bottom: 12px !important;
    font-family: "Dancing Script", cursive;
    color: #333;
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
    font-size: 16px;
    margin-bottom: 12px !important;
    font-family: "Montserrat", light;
    @media (max-width: 800px) {
      margin: 0px !important;
    }
  }
  p {
    margin-bottom: 0px !important;
    font-family: "Montserrat", light;
    font-size: 14px;
    font-weight: 300;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
}
</style>
