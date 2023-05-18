<template>
<div class="index">
  <div class="nav">
    <ul class="nav__list">
        <button
            class="nav__btn btn heading heading--h3"
        >
            Мои статьи
        </button>
        <AccountBtnAdd :btn="btn"/>
    </ul>
  </div>

  <AccountArticles :articles="articles" :height="height"/>

</div>
</template>

<script>

export default {
  layout: 'account',
  data () {
    return {
      articles: [
        { id: 0, title: 'Утро в сосновом бору', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Подопечный', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Сказания о Вещем Олеге', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false, description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
        { id: 0, title: 'Название', like: false,  description: 'Небольшое описание, которое способно уместиться в эти две-три строки, дальше будем ставить многото…', image: require('@/assets/images/article-img.jpg') },
      ],
      height: '237px',
      btn: {text: 'Добавить статью', to: '#'}
    }
  },
  created () {
    
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