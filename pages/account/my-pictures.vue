<template>
  <div class="index">
    <div class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <button
            class="nav__btn btn heading heading--h3"
          >
            Мои картины
          </button>
          <button>
           Добавить картину
          </button>
        </li>
      </ul>
    </div>

    <!-- <component :is="store.favouriteCategory">
    </component> -->
  </div>
</template>

<script>
// import { useFavouritesStore2 } from '~/stores/favourites'

export default {
  layout: 'account',
  data () {
    return {
      // links: [
      //   { key: 'AccountSubscriptions', text: 'Подписки' },
      //   { key: 'AccountSubscribers', text: 'Подписчики' },
      // ],
      // store: null,
    }
  },
  created () {
    // this.store = useFavouritesStore2()
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 5.3rem;

  &__list {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    transition: opacity 0.2s;

    &.inactive {
      opacity: 0.5;
    }
  }
}
</style>

