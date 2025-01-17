<template>
  <section class="gifts">
    <h1 class="gifts__title">Remerciez-nous à votre manière</h1>

    <p class="gifts__intro">
      Votre présence est le plus beau des cadeaux, mais si vous souhaitez nous
      faire une petite attention, voici quelques suggestions.
    </p>

    <!-- Section 1 : Liste de cadeaux -->
    <div class="gifts__section">
      <h2 class="gifts__section-title">🎁 Liste de cadeaux</h2>
      <p class="gifts__text">
        Nous avons sélectionné une liste de cadeaux pour ceux qui souhaitent
        participer. Vous pouvez les découvrir et choisir ce qui vous plaît.
      </p>
      <a @click="redirect()" class="gifts__link">Voir la liste de cadeaux</a>
    </div>

    <div class="gifts__section gifts__section--thankyou">
      <h2 class="gifts__section-title">Merci infiniment !</h2>
      <p class="gifts__text">
        Nous sommes profondément touchés par vos attentions et votre présence à
        nos côtés pour ce jour si spécial.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gift",
  methods: {
    redirect() {
      window.open("https://www.millemercismariage.com/invite.html");
    },
  },
};
</script>
<style lang="scss" scoped>
.gifts {
  height: calc(100vh - 160px);
  margin: 0 auto;
  padding: 20px;
  background-color: #d6a78422;
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
    max-width: 50%;
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
    text-align: center;
  }

  &__section {
    max-width: 50%;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;

    &-title {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__text {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  &__link {
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    background-color: #0056b3;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #003f7f;
    }
  }
}
</style>
