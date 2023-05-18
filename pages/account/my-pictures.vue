<template>
  <div class="index">
    <div class="nav">
      <ul class="nav__list">
          <button
            class="nav__btn btn heading heading--h3"
          >
            Мои картины
          </button>
          <AccountBtnAdd :btn="btn"/>
      </ul>
    </div>

    <AccountPictures :data="images"/>

    <!-- Нужно создать новый компонет, сверстать на подобии AccountPictures но по мокету (они отличаются) -->

  </div>
</template>

<script>

export default {
  layout: 'account',
  data () {
    return {
      images: [
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting-1.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/blog.png') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/painting.jpg') },
        { id: 0, name: 'Example', author: 'author name', image: require('@/assets/images/firstscreenbg.jpg') },
      ],
      btn: {text: 'Добавить картинку', to: '#'}
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

