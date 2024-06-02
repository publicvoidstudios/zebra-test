<template>
  <header-element/>
  <div v-if="newsItem" class="news-full-view">
    <h2 class="news-full-view__name">{{ newsItem?.name }}</h2>
    <p class="news-full-view__date">{{ moment.unix(newsItem?.date).format('DD MMMM YYYY') }}</p>
    <img class="news-full-view__image" :src="newsItem?.image" alt="">
    <p class="news-full-view__text">{{ newsItem?.previewText }}</p>
  </div>
  <div v-else id="loading"></div>
  <footer-element/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import HeaderElement from "@/components/HeaderElement.vue";
import momentJs from "moment";
import axios from "axios";
import FooterElement from "@/components/FooterElement.vue";

const moment = momentJs;

const route = useRoute();

const { code } = route.params;

const newsAPI = 'https://flems.github.io/test/api/news/';

const newsItem = ref(null);

onMounted(() => {
  axios.get(newsAPI)
      .then(response => {
        newsItem.value = response.data.items.find(item => item.code === code);
      })
});
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/main.scss";

.news-full-view {
  padding: 40px;
  &__name {
    font-size: 40px;
    margin-bottom: 40px;
  }
  &__date {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;

    color: $date-font-color;
  }
  &__image {
    max-width: 100%;
    width: 540px;
    margin-bottom: 40px;
    border-radius: 10px;
  }
  &__text {
    font-size: 24px;
  }
}

#loading {
  display: flex;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: $button-more-color;
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