<template>
  <section
    id="authors"
    ref="authors"
    class="authors section container"
  >
    <h2 class="section__heading heading heading--h2">
      Художники
    </h2>

    <p class="authors__description section__description">
      Люди, делающие наши стены живыми
    </p>

    <ul class="authors__list">
      <li
        v-for="(author, i) in authors"
        :key="i"
        class="authors__item"
        @click="toggleCard(i)"
      >
        <img src="@/assets/images/designer.png" alt="Изображение автора" class="authors__image">
        <div class="authors__info">
          <div class="authors__info-content">
            <h3 class="authors__heading">
              {{ author.name }}
            </h3>

            <p class="authors__info-description">
              {{ author.description }}
            </p>
          </div>

          <NuxtLink to="#" class="authors__link">
            Профиль - >
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'IndexAuthors',
  data () {
    return {
      authors: [
        { name: 'Ф. И. художника', description: 'Умница, золотце, очень красиво делает, прям умеет' },
        { name: 'Ф. И. художника', description: 'Умница, золотце, очень красиво делает, прям умеет' },
        { name: 'Ф. И. художника', description: 'Умница, золотце, очень красиво делает, прям умеет' },
        { name: 'Ф. И. художника', description: 'Умница, золотце, очень красиво делает, прям умеет' }
      ]
    }
  },
  methods: {
    toggleCard (index) {
      const authors = document.querySelectorAll('.authors__item')

      for (let x = 0; x < authors.length; x++) {
        authors[x].style.marginLeft = ''

        if (index === x) {
          authors[x].style.width = '68%'
          authors[x].classList.add('active')
          continue
        }
        authors[x].classList.remove('active')
        authors[x].style.width = '10%'
        authors[x].style.marginLeft = ''
      }

      const nextItem = document.querySelector('.authors__item.active').nextElementSibling
      if (nextItem) {
        nextItem.style.width = '5%'
        nextItem.style.marginLeft = '3.5%'
      }

      this.$refs.authors.classList.add('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.authors {
  &__description {
    margin-bottom: 4.6rem;
  }

  &__list {
    display: flex;
    transition: 0.2s;
  }

  &__item {
    position: relative;
    display: flex;
    width: 360px;
    height: 448px;
    overflow: hidden;
    transition: all 0.5s;

    &.active {
      transform: scale(1.1);
      z-index: 4;
    }
  }

  &.active &__item:not(.active) {
    opacity: 0.4;
  }

  &__image {
    object-fit: cover;
    cursor: pointer;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.8rem;
    padding: 6%;
    text-align: left;
    color: rgba(0, 0, 0, 0);
    background:
      radial-gradient(60.84% 48.89% at 56.14% 17.81%,
        rgba(25, 203, 252, 0.7) 0%,
        rgba(25, 203, 252, 0) 100%),
      radial-gradient(42.28% 34.82% at 9.75% 8.4%, #56F9D8 0%,
        rgba(86, 249, 216, 0) 100%),
      radial-gradient(69.7% 144.88% at 6.67% 81.48%, #F5A3D3 0%,
        rgba(245, 163, 211, 0) 100%),
      linear-gradient(90deg, #8C93F7 0%,
        rgba(140, 147, 247, 0) 100%);
  }

  &__item.active &__info {
    color: var(--bg-primary);
    transition: color 0.4s 0.4s;
  }

  &__info-content {
    max-width: 249px;
  }

  &__heading {
    font-size: 2rem;
    line-height: 2.6rem;
    margin-bottom: 23%;
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
