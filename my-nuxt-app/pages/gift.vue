<template>
  <section class="gifts">
    <h2 class="gifts__title">Remerciements</h2>
    <div class="gifts--container">
      <p class="gifts__intro">
        Pour nous aider dans notre nouvelle vie de jeunes mariés, vous pouvez
        participer à notre liste de cadeaux.
      </p>

      <a @click="redirect()" class="gifts__link">Voir la liste de cadeaux</a>

      <div class="gifts__section gifts__section--thankyou">
        <h2 class="gifts__section-title">Merci infiniment !</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gift",
  methods: {
    redirect() {
      window.open("https://www.millemercismariage.com/bea-gauthier/liste.html");
    },
  },
};
</script>
<style lang="scss" scoped>
.gifts {
  height: calc(100vh - 136px);
  margin: 0 auto;
  padding: 20px;
  background-color: #d6a78422;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  display: flex;
  @media (max-width: 800px) {
    height: calc(100vh - 90px);
  }
  &--container {
    gap: 24px;
    justify-content: center;

    display: flex;
    flex-direction: column;
    align-items: center;
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
