<template>
  <section class="info">
    <div class="info__container">

    <h1 class="info__title">Informations Pratiques</h1>


    <div class="info__section">
      <h4 class="info__section-title">Samedi 19 Juillet</h4>
      <div class="info__timeline">
        <ul class="info__list">
          <li data-time="16h"><p>Cérémonie religieuse en l'église Saint-Nicolas de Beaumont-Le-Roger (27170)</p></li>
          <li data-time="18h"><p>Cocktail au Château de Carsix (27300)</p></li>
          <li data-time="20h"><p>Dîner suivi d'une soirée dansante </p></li>
        </ul>
        <div class="info__section--secondary">

          <h4 class="info__section-title">Dimanche 20 Juillet</h4>
        </div>
        <ul class="info__list">
          <li data-time="10h"><p>Brunch</p></li>
        </ul>
      </div>
    </div>
    <div class="info__section">
      <h4 class="info__section-title">Église</h4>
      <p class="info__text">
        Si vous souhaitez rejoindre la chorale durant la messe, vous pouvez nous prévenir et
        nous vous donnerons toutes les informations associées.
        Nous vous remercions par avance !
      </p>
    </div>
    <div class="info__section">
      <h4 class="info__section-title">Contacts</h4>
      <p class="info__text">
        Pour toute question, écrivez-nous à
          <a href="mailto:mariagebeagauthier@gmail.com" class="info__link"
            >mariagebeagauthier@gmail.com</a
          >.
      </p>
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
  @media (max-width: 800px) {
    min-height: calc(100vh - 49px);
  }

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
  }

  &__text {
    // Used in template for paragraphs
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

    &--secondary {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 30px;
    }
  }

  &__timeline {
    position: relative;
    margin-top: -12px;

    &::before {
      content: '';
      position: absolute;
      left: 40px;
      top: 28px;
      bottom: 0;
      width: 2px;
      background: #d6a784;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    position: relative;

    li {
      font-size: 1rem;
      margin: 1.5rem 0;
      padding-left: 80px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 36px;
        top: 8px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #d6a784;
        border: 2px solid #fff;
      }

      &::after {
        content: attr(data-time);
        position: absolute;
        left: -20px;
        width: 50px;
        text-align: right;
        top: 8px;
        transform: translateY(-50%);
        color: black;
        font-size: 12px;
        padding-right: 10px;
        font-weight: 200;
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
