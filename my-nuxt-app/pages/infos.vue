<template>
  <section class="info">
    <h1 class="info__title">Informations Pratiques</h1>

    <p class="info__intro">
      Voici toutes les informations dont
      vous pourriez avoir besoin pour profiter pleinement de notre journée spéciale.
    </p>

    <!-- Section 1 : Date et lieu -->
    <div class="info__section">
      <h2 class="info__section-title">📅 Date et lieu</h2>
      <p class="info__text">
        Le mariage aura lieu le samedi 19 Juillet 2025 à l'église de Beaumont-Le-Roger, suivi de la réception au Château de Carsix.
      </p>
    </div>

    <!-- Section 2 : Programme de la journée -->
    <div class="info__section">
      <h2 class="info__section-title">🕒 Programme de la journée</h2>
      <ul class="info__list">
        <li>16h00 - Cérémonie religieuse</li>
        <li>18h30 - Cocktail</li>
        <li>20h00 - Dîner et soirée dansante</li>
      </ul>
      <h2 class="info__section-title">🕒 Programme du lendemain</h2>
      <ul class="info__list">
        <li>10h00 - Brunch</li>
      </ul>
    </div>
    <div class="info__section">
      <h2 class="info__section-title">📞 Eglise</h2>
      <p class="info__text">
       Si vous souhaitez chanter durant la messe, vous pouvez nous prévenir et nous vous donnerons toutes les informations associées
      </p>
    </div>
    <div class="info__section">
      <h2 class="info__section-title">📞 Contacts</h2>
      <ul class="info__list">
        <li>Pour toute question, contactez nous au 06 00 00 00 00</li>
        <li>
          Ou écrivez-nous à
          <a href="mailto:mariage@exemple.com" class="info__link"
            >mariage@exemple.com</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Infos",
};
</script>
<style lang="scss" scoped>
.info {
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f5f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__intro {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
    text-align: center;
  }

  &__section {
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;



    &-title {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }
  }

  &__text {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  &__list {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #555;
      margin: 0.5rem 0;

      &:before {
        content: '•';
        color: #0056b3;
        margin-right: 0.5rem;
      }
    }
  }

  &__link {
    color: #0056b3;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #003f7f;
    }
  }
}
</style>