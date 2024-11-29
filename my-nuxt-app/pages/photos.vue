<template>
  <section class="photo-mosaic">
    <!-- Titre principal -->
    <h1 class="photo-mosaic__title">Nos plus beaux souvenirs</h1>

    <!-- Mosaic grid -->
    <div class="photo-mosaic__grid">
      <!-- Each hexagon -->
      <div class="photo-mosaic__hexagon">
        <div class="photo-mosaic__hexagon-inner">
          <img
            src="public/hotels/acropole.png"
            alt="Photo 1"
            class="photo-mosaic__image"
          />
        </div>
      </div>
      <div class="photo-mosaic__hexagon">
        <div class="photo-mosaic__hexagon-inner">
          <img
            src="public/hotels/acropole.png"
            alt="Photo 2"
            class="photo-mosaic__image"
          />
        </div>
      </div>
      <!-- Add more hexagons as needed -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Photos",
};
</script>

<style lang="scss">

</style>
