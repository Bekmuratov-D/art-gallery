<template>
  <ul class="articles">
    <NuxtLink to="/" class="articles__link">
      <li 
        v-for="(item, i) in articles"
        :key="i"
        class="articles__item"
        :style="`background: url(${item.image}); height: ${height}`"
      >
        <div class="articles__header">
          <h3 class="articles__title">
            {{ item.title }}
          </h3>
          <button 
            v-if="item.like"
            class="articles__btn btn"
          >
            <img src="@/assets/icons/favourites.svg" alt="Удалить из избранного" class="articles__like">
          </button>
        </div>
        <p class="articles__description">
          {{ item.description }}
        </p>
      </li>
    </NuxtLink>
  </ul>
</template>

<script>
export default {
  name: 'AccountArticles',
  props: {
    articles: {
      type: Array,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.articles {
  columns: 3;
  gap: 30px;

  &__link {
    text-decoration: none;
  }

  &__item {
    position: relative;
    width: auto;
    margin: 0 0 30px 0;
    padding: 20px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    color: #F8F3E6;
    max-width: 231px;

  }

  &__description{
    position: absolute;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 130%; 
    color: #F8F3E6;
    bottom: 20px;
  }
}
</style>
