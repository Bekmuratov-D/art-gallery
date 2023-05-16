<template>
  <div class="index">
    <AccountNav :links="links" :active-key="store.favouriteCategory" @change="store.favouriteCategory = $event" />

    <component :is="store.favouriteCategory" :data="images" :articles="articles" :height="height">
    </component>
  </div>
</template>

<script>
import FavouritesPictures from '@/components/Account/Pictures'
import { useFavouritesStore } from '~/stores/favourites'

export default {
  components: { FavouritesPictures },
  layout: 'account',
  data () {
    return {
      links: [
        { key: 'AccountPictures', text: 'Картины' },
        { key: 'AccountArticles', text: 'Статьи' },
        { key: 'AccountAuthors', text: 'Авторы' },
      ],
      store: null,
      images: [
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/blog.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/firstscreenbg.jpg') },
      ],
      articles: [
        { id: 0, title: 'Утро в сосновом бору', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Подопечный', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Сказания о Вещем Олеге', like: true, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false,  description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
      ],
      height: '237px',
    }
  },
  created () {
    this.store = useFavouritesStore()
  }
}
</script>

<style lang="scss" scoped>
.index {

}
</style>
