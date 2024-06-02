<template>
  <div class="header">
    <router-link to="/"><img class="header__logo" src="/logo.svg" alt=""></router-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 120px;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  margin: 0 auto;

  box-shadow: 0 8px 16px 0 #00000014;
  &__logo {
    margin-left: 40px;
  }
}

/*Mobile devices*/
@media (min-width: 576px) {
  .header {
    &__logo {
      margin-left: 50px;
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .header {
    &__logo {
      margin-left: 60px;
    }
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .header {
    &__logo {
      margin-left: 80px;
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .header {
    &__logo {
      margin-left: 100px;
    }
  }
}

/*Desktop*/
@media (min-width: 1400px) {
  .header {
    &__logo {
      margin-left: 100px;
    }
  }
}


</style>