<template>
  <div id="loading"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "/src/assets/scss/main.scss";

#loading {
  display: flex;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: $title-font-color;
  animation: spin 0.75s ease-in-out infinite;
  -webkit-animation: spin 0.75s ease-in-out infinite;

  margin: 40px auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { transform: rotate(360deg); }
}

</style>