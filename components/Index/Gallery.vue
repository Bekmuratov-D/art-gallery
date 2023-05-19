<template>
  <section
    id="gallery"
    class="gallery section"
    @mousemove="mouseMove"
    @mouseleave="mouseLeave"
  >
    <h2 class="section__heading heading heading--h2">
      Галерея
    </h2>

    <div class="gallery__wrapper container">
      <ul class="gallery__list">
        <li
          v-for="(picture, i) in pictures"
          :key="i"
          class="gallery__item"
        >
          <h3 class="gallery__title">
            {{ picture.name }}
          </h3>
          <img :src="require(`@/assets/images/${picture.url}`)" alt="Картина" class="gallery__image">
          <p class="gallery__author">
            {{ picture.author }}
          </p>
        </li>
      </ul>

      <NuxtLink to="/indev" class="gallery__button btn btn--primary">
        Больше работ
      </NuxtLink>
    </div>

    <img ref="bg" src="@/assets/images/bgpaintings.png" alt="Фоновое изображение" class="gallery__bg">
  </section>
</template>

<script>
export default {
  name: 'IndexGallery',
  data () {
    return {
      pictures: [
        { name: 'Название картины', url: 'painting.jpg', author: 'Автор картины' },
        { name: 'Название картины', url: 'painting.jpg', author: 'Автор картины' },
        { name: 'Название картины', url: 'painting.jpg', author: 'Автор картины' },
      ]
    }
  },
  methods: {
    mouseMove (e) {
      this.$refs.bg.style.transform = `perspective(2000px)
        rotateY(${(window.innerWidth / 2 - e.pageX) / 100}deg)
        rotateX(${((e.offsetY - this.$refs.bg.offsetHeight / 2) / 100) * -1}deg)`
    },
    mouseLeave () {
      this.$refs.bg.style.transform = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  text-align: center;
  background-color: #2A2B36;
  margin-top: 0;
  overflow: hidden;

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: perspective(2000px) rotatey(0deg) rotatex(0deg);
    transform-style: preserve-3d;
    transition: transform 0.2s ease;
    user-select: none;
    z-index: 1;
  }

  &__heading {
    text-align: center;
    margin-bottom: 8.6%;
  }

  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  &__list {
    display: flex;
    justify-content: center;
    column-gap: 85px;
  }

  &__item {
    display: flex;
    padding: 25px 35px;
    flex-direction: column;
    align-items: center;
    background-image: url("@/assets/images/blockbg.png");
    height: 520px;
    width: 393px;
    max-width: 100%;
    font-weight: 300;
    font-size: 24px;
    color: #2A2B36;
    cursor: pointer;
  }

  &__image {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
  }

  &__author {
    font-size: 1.5rem;
    color: var(--bg-primary);
  }

  &__button {
    margin-top: 3.3rem;
    padding: 1.125rem 1.8rem;
  }
}
</style>
