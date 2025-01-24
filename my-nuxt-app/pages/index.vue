<template>
  <div class="welcome">
    <div class="welcome__info">
      <div class="welcome__info--title">
        <h1>Béatrix & Gauthier</h1>
        <hr class="welcome--separator" />
        <h3>Samedi 19 Juillet 2025</h3>
        <p>Nous sommes heureux de vous convier à notre mariage</p>
        <hr class="welcome--separator" />
      </div>
      <div class="welcome__info--title">
        <!-- <h2>Céremonie à 16h</h2> -->
        <h4>Eglise de Beaumont-le-Roger</h4>
        <p>⛪16h</p>
        <div
          class="address"
          @click="
            onLocationClick(
              'https://www.google.com/maps/place/Saint+Nicolas+Church/@49.1148023,0.6469203,12.5z/data=!4m6!3m5!1s0x47e10b805235eee7:0x955e57ea2c5d62ff!8m2!3d49.0816875!4d0.7782385!16s%2Fg%2F122tcbft?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'
            )
          "
        >
          1 Rue Saint-Nicolas, 27170 Beaumont-le-Roger
        </div>
        <hr class="welcome--separator" />
      </div>

      <div class="welcome__info--title">
        <!-- <h2>Cocktail et diner à 18h30</h2> -->
        <h4>Château de Carsix</h4>
        <div
          class="address"
          @click="
            onLocationClick(
              'https://www.google.com/maps/place/Ch%C3%A2teau+De+Carsix/@49.1139027,0.647654,12.96z/data=!4m6!3m5!1s0x47e1a73e5d1e2d51:0x64743dcb546fbb2d!8m2!3d49.141983!4d0.6691216!16s%2Fg%2F11c208s9rq?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'
            )
          "
        >
          3 Rue Gustave Heon, 27300 Nassandres sur Risle
        </div>
      </div>
    </div>
    <div class="image-container">
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    onLocationClick(address) {
      window.open(address, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column-reverse;
  min-height: calc(100vh - 96px);
  font-family: "Great Vibes", sans-serif;
  background-color: #d6a78422;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 32px 32px 32px;
    align-items: flex-start;
    justify-content: center;
    @media (min-width: 800px) {
      padding: 16px 32px;
      min-width: 30vw;
    }
    &--title {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
  &--separator {
    margin: 0;
    height: 4px;
    background: #d6a784;
    border: unset;
    max-width: 64px;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    padding: 16px 32px;
    min-width: 30vw;
  }
  @media (max-width: 800px) {
    overflow: auto;
  }

  // align-items: center;

  .address {
    font-style: italic;
    cursor: pointer;
    text-decoration: underline;
    font-family: "Montserrat", light;
    font-size: 12px;
  }

  .image-container {
    display: flex;
    align-items: center;
    width: 100%;
    @media (max-width: 800px) {
      padding: 32px;
    }
  }
  .image {
    border-radius: 6px;
    // min-height: calc(100vh - 68px); /* Full height of the viewport */
    background-image: url("../assets/images/chateau.png"); /* Path to your image */
    display: flex;
    background-repeat: no-repeat;
    flex-direction: column;
    color: white;
    text-align: center;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 100%;
    @media (max-width: 800px) {
      min-height: 300px;
      width: calc(100vw - 64px);
    }
  }
}
</style>
