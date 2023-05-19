<template>
  <div class="carousel">
    <ul ref="list" class="carousel__list">
      <li
        v-for="(news, i) in newsList"
        :key="i"
        :style="{ backgroundImage: 'url(' + require(`@/assets/images/${news.image}.png`) + ')' }"
        class="carousel__item"
        @click="$router.push({ path: news.href })"
      >
        <div class="carousel__container container">
          <h3 class="carousel__heading">
            {{ news.name }}
          </h3>

          <p class="carousel__description">
            {{ news.description }}
          </p>

          <ArrowLink :href="news.href" class="carousel__arrow" />
        </div>
      </li>
    </ul>

    <div class="container">
      <ul class="carousel__pagination">
        <li
          v-for="(news, i) in newsList"
          :key="i"
          class="carousel__pagination-item"
        >
          <button
            :class="['btn carousel__pagination-btn', { active: activeSlide === i }]"
            @click="scrollTo(i)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="7" fill="white" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCarousel',
  data () {
    return {
      activeSlide: 0,
      translateSum: 0,
      interval: null,
      newsList: [
        {
          name: 'Современное японское искусство',
          description: 'Кто такие Акацуки? Акацуки — группа шиноби, существовавшая за пределами обычной системы скрытых деревень. В течение нескольких десятилетий Акацуки принимали разные формы, их возглавляли разные люди.',
          image: 'blog',
          href: '#'
        },
        {
          name: 'Современное русское искусство',
          description: 'Кто такие Акацуки? Акацуки — группа шиноби, существовавшая за пределами обычной системы скрытых деревень. В течение нескольких десятилетий Акацуки принимали разные формы, их возглавляли разные люди.',
          image: 'blog',
          href: '#'
        },
        {
          name: 'Современное итальянское искусство',
          description: 'Кто такие Акацуки? Акацуки — группа шиноби, существовавшая за пределами обычной системы скрытых деревень. В течение нескольких десятилетий Акацуки принимали разные формы, их возглавляли разные люди.',
          image: 'blog',
          href: '#'
        }
      ]
    }
  },
  // mounted () {
  //   this.interval = setInterval(() => {
  //     this.nextSlide()
  //   }, 22500)
  // },
  // methods: {
  //   scrollTo (index) {
  //     clearInterval(this.interval)
  //     if (index === this.activeSlide) return false

  //     const slideWidth = document.querySelector('.carousel__item').offsetWidth
  //     this.translateSum += -(slideWidth * (index - this.activeSlide))
  //     this.activeSlide = index
  //     this.$refs.list.style.transform = `translateX(${this.translateSum}px)`
  //   },
  //   nextSlide () {
  //     const slideWidth = document.querySelector('.carousel__item').offsetWidth
  //     this.activeSlide += 1

  //     if (this.activeSlide >= this.newsList.length) {
  //       this.translateSum = 0
  //       this.activeSlide = 0
  //       this.$refs.list.style.transform = `translateX(${this.translateSum}px)`
  //       return false
  //     }

  //     this.translateSum -= slideWidth
  //     this.$refs.list.style.transform = `translateX(${this.translateSum}px)`
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow-x: hidden;

  &__list {
    display: flex;
    flex-wrap: nowrap;
    transition: transform 1s;
  }

  &__item {
    position: relative;
    min-width: 100%;
    padding: 5.3% 0 6%;
    min-height: 667px;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    text-align: left;
    cursor: pointer;
  }

  &__heading {
    font-size: 3.75rem;
    line-height: 4.3rem;
  }

  &__description {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.9rem;
    max-width: 545px;
    margin-top: 5%;
  }

  &__container {
    position: relative;
    height: 100%;
  }

  &__arrow,
  &__pagination {
    position: absolute;
    bottom: 14%;
  }

  &__arrow {
    right: 0;
    bottom: -5%;
  }

  &__pagination {
    display: flex;
  }

  &__pagination-item {
    margin-right: 1rem;
  }

  &__pagination-btn {
    opacity: 0.5;
    transition: opacity 0.2s;

    &.active {
      opacity: 1;
    }
  }
}
</style>
