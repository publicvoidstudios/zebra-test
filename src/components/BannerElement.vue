<template>
  <div class="banner">
    <img class="banner__image" src="/banner.png" alt="">
    <div class="container banner__title">
      <h2 class="banner__title-text">Новости</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/main.scss";

.banner {
  background: linear-gradient(to top , #ebeff3, #f1f5f9);
  position: relative;
  overflow: hidden;

  &__image {
    width: 125%;
    height: auto;
  }

  &__title {
    position: absolute;
    bottom: 16px;
    left: 20px;

    &-text {
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
    }
  }
}

/*Mobile devices*/
@media (min-width: 576px) {
  .banner {
    overflow: hidden;
    &__image {
      width: 125%;
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .banner {
    overflow: hidden;

    &__image {
      width: 100%;
    }
  }
}
/*Desktop*/
@media (min-width: 1400px) {
  .banner {
    overflow: hidden;

    &__image {
      width: 100%;
    }

    &__title {
      bottom: 48px;
      left: 100px;
    }
  }
}
</style>