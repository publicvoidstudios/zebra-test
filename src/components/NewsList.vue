<template>
  <div class="container news">
    <div class="news__list">
      <div v-for="news in newsList" class="news__list-item news-item">
        <div class="news-item__content">
          <img v-if="news.image" class="news-item__image" :src="news.image" alt="">
          <div class="news-item__text" :class="{'news-item__text--with-image' : news.image}">
            <div class="news-item__date">
              <p class="news-item__date-day">{{ moment.unix(news.date).format('DD') }}</p>
              <div class="news-item__date-month-year">
                <p class="news-item__date-month">{{ moment.unix(news.date).format('MMMM') }}</p>
                <p class="news-item__date-year">{{ moment.unix(news.date).format('YYYY') }}</p>
              </div>
            </div>
            <div class="news-item__title">
              <router-link :to="`/news/${news.code}`">{{ news.name }}</router-link>
            </div>
            <div class="news-item__body">
              <p>{{ news.previewText }}</p>
            </div>
          </div>
        </div>
        <div class="news-item__tag">
          <p>{{ news.type.value }}</p>
        </div>
      </div>
    </div>
    <div class="news__load-more" v-if="currentPage < totalPages">
      <button class="news__load-more-button" @click="loadMore">Загрузить ещё</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import momentJS from "moment";
import axios from "axios";

const moment = momentJS;

const newsAPI = 'https://flems.github.io/test/api/news/';
const newsList = ref([]);
const currentPage = ref(null);
const totalPages = ref(null);

const loadMore = () => {
  currentPage.value++;
  axios.get(newsAPI + currentPage.value)
      .then(response => {
        const newItems = response.data.items;
        newItems.forEach((item) => {
          newsList.value.push(item);
        })
      })
}

onMounted(() => {
  axios.get(newsAPI)
      .then(response => {
        newsList.value = response.data.items;
        currentPage.value = response.data.nav.current;
        totalPages.value = response.data.nav.total;
      })
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/main.scss";

.news {
  padding-top: 24px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__list {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
    margin: 0 auto 72px;
  }

  &__load-more {
    margin-bottom: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-button {
      color: $button-more-color;
      background-color: transparent;
      border-radius: 8px;
      border: 1px solid $button-more-color;
      padding: 16px 32px;
      font-weight: $semibold;
      font-size: 20px;
      line-height: 120%;
      cursor: pointer;

      &:hover {
        background-color: $footer-fill;
      }
    }
  }
}
.news-item {
  width: 90%;
  max-width: 90%;
  height: auto;
  border: 1px solid $item-border-color;
  border-radius: $item-border-radius;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__image {
    width: calc(100% + 2px);
    height: auto;
    margin-top: -1px;
    align-self: center;
  }

  &__text {
    margin: 32px 32px 0 32px;
  }

  &__date {
    display: flex;
    color: $date-font-color;
    margin-bottom: 16px;

    &-day {
      font-size: 36px;
      margin-right: 4px;
      line-height: 100%;
    }

    &-month-year {
      font-size: 15px;
      font-weight: bold;
      line-height: 110%;
    }
  }

  &__title {
    color: $title-font-color;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 16px;

    a {
      text-decoration: none;
      color: $title-font-color;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  &__body {
    color: $text-body-font-color;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 40px;
  }

  &__tag {
    margin: 0 0 32px 32px;
    padding: 4px 16px;
    width: auto;
    align-self: start;
    background-color: $tag-fill;
    border-radius: $border-full-circle;
  }
}

/*Tablets*/
@media (min-width: 768px) {
  .news-item {
    width: 720px;

    &__title {
      font-size: 22px;
    }

    &__body {
      font-size: 20px;
    }
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .news {
    padding-top: 32px;

    &__list {
      gap: 24px;
    }

    &__load-more {
      margin-bottom: 72px;
    }
  }
  .news-item {
    width: 460px;

    &__title {
      font-size: 20px;
    }

    &__body {
      font-size: 18px;
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .news {
    padding-top: 48px;

    &__list {
      gap: 32px;
    }

    &__load-more {
      margin-bottom: 72px;
    }
  }
  .news-item {
    width: 540px;

    &__title {
      font-size: 22px;
    }

    &__body {
      font-size: 20px;
    }

    /*&:hover {
      .news-item__image {
        opacity: 0;
      }

      .news-item__text--with-image {
        margin-top: -210px;
        margin-bottom: 240px;
      }
    }*/
  }
}

/*Desktop*/
@media (min-width: 1400px) {
  .news {
    padding-top: 64px;

    &__list {
      gap: 48px;
    }

    &__load-more {
      margin-bottom: 72px;
    }
  }
  .news-item {
    width: 540px;

    &__title {
      font-size: 22px;
    }

    &__body {
      font-size: 20px;
    }
  }
}
</style>