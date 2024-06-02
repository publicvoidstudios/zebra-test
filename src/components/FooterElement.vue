<template>
  <footer class="footer">
    <div class="footer__container container">
      <router-link to="/"><img class="footer__image" src="/logo.svg" alt="Alpha Logo"></router-link>
      <p class="footer__copyright">© alpha, 2024</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/main";

.footer {
  background-color: $footer-fill;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;

  &__container {
    width: 90%;
    margin: 0 auto;
  }
  &__image {
    margin-bottom: 16px;
  }
}

@media (min-width: 576px) {
  .footer {
    &__container {
      width: 100%;
    }
  }
}
</style>