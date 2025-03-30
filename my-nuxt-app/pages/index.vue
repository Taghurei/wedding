<template>
  <div class="welcome" v-if="mobileMode && windowWidth">
    <h1>Béatrix & Gauthier</h1>
    <div class="image-container">
      <img src="/public/photos/4.jpg" class="thumbnail-home" />
    </div>
    <h2>19.07.2025</h2>
    <div class="welcome--text">
      <p>
        16h :

        <span
          class="address"
          @click="
            onLocationClick(
              'https://www.google.com/maps/place/Saint+Nicolas+Church/@49.088219,0.7449333,12.88z/data=!4m6!3m5!1s0x47e10b805235eee7:0x955e57ea2c5d62ff!8m2!3d49.0816875!4d0.7782385!16s%2Fg%2F122tcbft?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
            )
          "
        >
          Église de Beaumont-le-Roger</span
        >
      </p>
      <p>
        18h :
        <span
          class="address"
          @click="
            onLocationClick(
              'https://www.google.com/maps/place/Ch%C3%A2teau+De+Carsix/@49.1484955,0.6437081,13.3z/data=!4m6!3m5!1s0x47e1a73e5d1e2d51:0x64743dcb546fbb2d!8m2!3d49.141983!4d0.6691216!16s%2Fg%2F11c208s9rq?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
            )
          "
        >
          Château de Carsix</span
        >
      </p>
    </div>
  </div>
  <div class="welcome" v-else-if="windowWidth">
    <div class="welcome--info">
      <h1>Béatrix & Gauthier</h1>
      <h2>19.07.2025</h2>
      <div class="welcome--text">
        <p>
          16h :

          <span
            class="address"
            @click="
              onLocationClick(
                'https://www.google.com/maps/place/Saint+Nicolas+Church/@49.088219,0.7449333,12.88z/data=!4m6!3m5!1s0x47e10b805235eee7:0x955e57ea2c5d62ff!8m2!3d49.0816875!4d0.7782385!16s%2Fg%2F122tcbft?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
              )
            "
          >
            Église de Beaumont-le-Roger</span
          >
        </p>
        <p>
          18h :
          <span
            class="address"
            @click="
              onLocationClick(
                'https://www.google.com/maps/place/Ch%C3%A2teau+De+Carsix/@49.1484955,0.6437081,13.3z/data=!4m6!3m5!1s0x47e1a73e5d1e2d51:0x64743dcb546fbb2d!8m2!3d49.141983!4d0.6691216!16s%2Fg%2F11c208s9rq?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
              )
            "
          >
            Château de Carsix</span
          >
        </p>
      </div>
    </div>
    <div class="image-container">
      <img src="/public/photos/4.jpg" class="thumbnail-home" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      windowWidth: 0,
    };
  },
  methods: {
    onLocationClick(address) {
      window.open(address, "_blank");
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  beforeMount() {
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    mobileMode() {
      return this.windowWidth <= 800;
    },
  },
};
</script>

<style scoped lang="scss">
.welcome {
  padding-top: 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 128px);
  font-family: "Dancing Script", cursive;
  background-color: #d6a78422;
  min-height: calc(100vh - 73px);
  @media (max-width: 800px) {
    justify-content: flex-start;
    align-items: center;
    max-height: calc(100vh - 73px);

  }
  @media (min-width: 800px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 16px 32px;
    min-width: 30vw;
    min-height: calc(100vh - 128px);
}

  &--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    justify-content: center;
    width: 50%;
    h1 {
      font-size: 56px;
      margin-bottom: 0 !important;
    }
  }
  &--text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    p {
      margin-bottom: 0px !important;
      display: flex;
    }
  }

  .address {
    font-style: italic;
    cursor: pointer;
    text-decoration: underline;
    font-family: "Montserrat", light;
    font-size: 12px;
    font-weight: 400;
    margin-left: 4px;
  }

  .image-container {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 24px;
    @media (max-width: 800px) {
      padding: 0 24px !important;
      width: calc(100% - 64px);
    }
    
    .thumbnail-home {
      width: auto;
      max-width: 100%;
      height: calc(100vh - 320px);
      @media (min-width: 800px) {
        height: calc(100vh - 176px);
      }
      border-radius: 8px;
      object-fit: cover;
      margin: auto;
    }
  }
}
</style>
