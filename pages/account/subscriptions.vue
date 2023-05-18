<template>
  <div class="index">
    <AccountNav :links="links" :active-key="store.favouriteCategory" @change="store.favouriteCategory = $event" />

    <component :is="store.favouriteCategory" :authors="subscriptions" :subscribers="subscribers">
    </component>
  </div>
</template>

<script>
import { useFavouritesStore2 } from '~/stores/favourites'

export default {
  layout: 'account',
  data () {
    return {
      links: [
        { key: 'AccountAuthors', text: 'Подписки' },
        { key: 'AccountSubscribers', text: 'Подписчики' },
      ],
      store: null,
      subscriptions: [
        {name: 'Кондратьева Алена', directions: [{id: 1, name: 'каррикатура'}, {id: 1, name: 'графика'}, {id: 1, name: 'преподаватель'}, {id: 1, name: 'сюрреализм'}, {id: 1, name: 'ню'}], favourites: false, image: require('@/assets/images/avatar1.jpg')},
        {name: 'Василий', directions: [{id: 1, name: 'преподаватель'}, {id: 1, name: 'портрет'}, {id: 1, name: 'академическое письмо'} ], favourites: false, image: require('@/assets/images/avatar2.jpg')},
        {name: 'ice gingerbread', directions: [{id: 1, name: 'студент'}, {id: 1, name: 'CG-art'}], favourites: false, image: require('@/assets/images/avatar4.jpg')},
        {name: 'ice gingerbread', directions: [{id: 1, name: 'студент'}, {id: 1, name: 'CG-art'}], favourites: false, image: require('@/assets/images/avatar4.jpg')},
        {name: 'Василий', directions: [{id: 1, name: 'преподаватель'}, {id: 1, name: 'портрет'}, {id: 1, name: 'академическое письмо'} ], favourites: false, image: require('@/assets/images/avatar3.jpg')},
      ],
    }
  },
  created () {
    this.store = useFavouritesStore2()
  }
}
</script>

<style lang="scss" scoped>
.index {

}
</style>

