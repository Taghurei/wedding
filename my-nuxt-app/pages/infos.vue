<template>
  <section class="info">
    <div class="info__container">

    <h1 class="info__title">Informations Pratiques</h1>

    <p class="info__intro">
      Voici toutes les informations dont vous pourriez avoir besoin pour
      profiter pleinement de notre mariage.
    </p>

    <!-- Section 1 : Date et lieu -->
    <div class="info__section">
      <h4 class="info__section-title">📅 Date et lieu</h4>
      <p class="info__text">
        Le mariage aura lieu le samedi 19 Juillet 2025 à l'église de
        Beaumont-Le-Roger, suivi de la réception au Château de Carsix.
      </p>
    </div>

    <!-- Section 2 : Programme de la journée -->
    <div class="info__section">
      <h4 class="info__section-title">🕒 Programme du Samedi</h4>
      <ul class="info__list">
        <li>16h00 - Cérémonie religieuse ⛪</li>
        <li>18h30 - Cocktail 🥂</li>
        <li>20h00 - Dîner et soirée dansante 💃</li>
      </ul>
      <h4 class="info__section-title">🕒 Programme du Dimanche</h4>
      <ul class="info__list">
        <li>10h00 - Brunch 🥞</li>
      </ul>
    </div>
    <div class="info__section">
      <h4 class="info__section-title">🎶 Eglise</h4>
      <p class="info__text">
        Si vous souhaitez chanter durant la messe, vous pouvez nous prévenir et
        nous vous donnerons toutes les informations associées
      </p>
    </div>
    <div class="info__section">
      <h4 class="info__section-title">📞 Contacts</h4>
      <ul class="info__list">
        <li>Pour toute question, contactez nous au <a :href="'tel:0631003372'" class="info__link">06 31 00 33 72</a> ou au <a :href="'tel:0645686863'"class="info__link">06 45 68 68 63</a></li>
        <li>
          Ou écrivez-nous à
          <a href="mailto:mariagebeagauthier@gmail.com" class="info__link"
            >mariagebeagauthier@gmail.com</a
          >
        </li>
      </ul>
    </div>
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
  background-color: #d6a78422;
  &__container {
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  &__title {
    color: #333;
    text-align: center;
    font-family: "Great Vibes", sans-serif;
    font-size: 36px;
  }

  &__intro {
    text-align: center;
  }

  &__section {
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: calc(100% - 32px);
    &-title {
      align-self: center;
    }
  }

  &__list {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      margin: 0.5rem 0;

      &:before {
        content: "•";
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
