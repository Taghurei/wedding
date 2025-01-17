<template>
  <div class="welcome-container">
    <div class="infos">
      <div>
        <div>
          <h1>Date & Lieu</h1>
          <p>Samedi 19 Juillet 2025</p>
        </div>
        <div>
          <p>Céremonie à 16h</p>
          <h3>Eglise de Beaumont-le-Roger</h3>
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
        </div>
        <div>
          <p>Cocktail et diner à 18h30</p>
          <h3>Chateau de Carsix</h3>
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
.welcome-container {
  display: flex;
  flex-direction: row;

  min-height: calc(100vh - 96px);
  font-family: "Great Vibes", sans-serif;
  background-color: #d6a78422;

  // align-items: center;
  h1 {
    font-size: 64px;
    margin-bottom: 32px !important;
  }
  h2 {
    margin-bottom: 24px !important;
  }
  h3 {
    font-size: 32px;
    margin-bottom: 12px !important;
  }
  p {
    margin-bottom: 12px !important;
    font-family: "Montserrat", light;
    font-style: italic;
    font-weight: 200;
    font-size: 20px;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  .location {
  }
  .address {
    font-style: italic;
    cursor: pointer;
    text-decoration: underline;
  }
  .infos {
    display: flex;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
    min-width: 100%;
    align-items: center;
    justify-content: center;
    @media (min-width: 800px) {
      padding: 160px 32px;
      min-width: 30vw;
    }
  }
  .image-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .image {
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
  }
}
</style>
