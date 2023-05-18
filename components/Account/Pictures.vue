<template>
  <ul ref="pictures" class="pictures">
    <li
      v-for="(image, i) in data"
      :key="i"
      class="pictures__item"
      :style="`width: ${width}`"
    >
      <button class="pictures__btn btn" @click.stop>
        <img src="@/assets/icons/favourites.svg" alt="Удалить из избранного">
      </button>

      <p class="pictures__name">
        {{ image.name }}
      </p>
      <NuxtLink to="/" class="pictures__link">
        <img
          :src="image.image"
          alt="Picture alt"
          class="pictures__image"
        >
      </NuxtLink>
      <p class="pictures__author">
        {{ image.author }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AccountPictures',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      width: 'auto'
    }
  },
}
</script>

<style lang="scss" scoped>
.pictures {
  column-count: 3;
  column-gap: 1.8rem;

  &__item {
    position: relative;
    height: fit-content;
    margin-bottom: 0.625rem;
    overflow: hidden;
    transition: background 0.3s;
  }

  &__btn {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 1;
  }

  &__name,
  &__author {
    position: absolute;
    left: 1.25rem;
    z-index: 1;
    transition: 0.4s;
  }

  &__name {
    top: -20%;
  }

  &__author {
    bottom: -20%;
  }

  &__item:hover &__name {
    top: 1.25rem;
  }

  &__item:hover &__author {
    bottom: 1.25rem;
  }

  &__link {
    display: block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, #2A2B36 0%, rgba(0, 0, 0, 0.2) 52.6%, #2A2B36 100%);
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  &__item:hover &__link::after {
    opacity: 1;
  }

  &__image {
    width: 100%;
  }
}
</style>
