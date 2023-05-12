<template>
  <div class="index">
    <AccountNav :links="links" :active-key="store.favouriteCategory" @change="store.favouriteCategory = $event" />

    <component :is="store.favouriteCategory">
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
        { key: 'AccountSubscriptions', text: 'Подписки' },
        { key: 'AccountSubscribers', text: 'Подписчики' },
      ],
      store: null,
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

