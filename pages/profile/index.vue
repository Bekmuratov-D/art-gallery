<template>
<div class="index">
  <h4 class="heading">Карточка художника</h4>
  <div class="card">
    <img class="card__img" src="@/assets/images/profile.jpg" alt="card__img">
    <div class="card__info">
      <p class="card__name">{{ card.name }}</p>
      <p class="card__text">{{ card.text }}</p>
      
      <AccountMultiColorBtn :btns="btns"/>

    </div>
  </div>

  <AccountNav class="links" :links="links" :active-key="store.favouriteCategory" @change="store.favouriteCategory = $event" />
  
  <component :is="store.favouriteCategory" :data="images" :articles="articles" :height="height">
  </component>
</div>
</template>

<script>
import { useFavouritesStore3 } from '~/stores/favourites'

export default {
  components: { },
  layout: 'profile',
  data () {
    return {
      height: "323px",
      links: [
        { key: 'AccountPictures', text: 'Картины' },
        { key: 'AccountArticles', text: 'Посты' },
      ],
      card: {
        name: 'Куприянова Анастасия',
        text: 'Не следует, однако, забывать, что глубокий уровень погружения однозначно фиксирует необходимость системы массового участия. Следует отметить, что высокое качество позиционных исследований создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования',
        btnList: [
            {to: '#', text: 'сюрреализм'},
            {to: '#', text: 'каррикатура'},
            {to: '#', text: 'черно-белое'},
            {to: '#', text: 'портрет'},
        ]
      },
      images: [
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/blog.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/firstscreenbg.jpg') },
      ],
      articles: [
        { id: 0, title: 'Утро в сосновом бору', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
        { id: 0, title: 'Подопечный', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
        { id: 0, title: 'Сказания о Вещем Олеге', like: true, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
        { id: 0, title: 'Название', like: false,  description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article2.jpg') },
      ],
      btns: [
        {color: '#19CBFC', text: 'сюрреализм'},
        {color: '#FFD64A', text: 'каррикатура'},
        {color: '#F5A3D3', text: 'черно-белое'},
        {color: '#19CBFC', text: 'портрет'},
      ]
    }
  },
  created () {
    this.store = useFavouritesStore3()
  }
}
</script>

<style lang="scss" scoped>
.index {
    max-width: 1270px;
.heading{
    font-size: 40px;
}
.card{
    display: flex;
    &__img{
      margin-right: 145px;
    }

    &__name{
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 41px; 
      margin-bottom: 60px;
      color: #F8F3E6;
    }

    &__text{
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 130%;
      color: #F8F3E6;   
      max-width: 545px;
      margin-bottom: 80px;
    }

    &__btn-list{
        display: flex;
    }
}
.links{
    max-width: 600px;
    margin-top: 230px;
}
}
</style>