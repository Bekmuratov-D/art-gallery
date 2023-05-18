<template>
  <section
    id="events"
    class="events section"
  >
    <h3 class="section__heading heading heading--h2">
      События
    </h3>

    <p class="section__description">
      Узнайте о предстоящих ивентах и будьте в курсе всех событий!
    </p>

    <ul class="events__list">
      <li
        v-for="(event, i) in events"
        :key="i"
        :style="{'--bg': 'url(' + require(`@/assets/images/${event.img}.jpg`) + ')'}"
        class="events__item"
        @click="$router.push({ path: event.href })"
      >
        <div class="events__container container">
          <h3 class="events__title">
            {{ event.name }}
          </h3>

          <ArrowLink :href="event.href" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'IndexEvent',
  data() {
    return {
      events: [
        { name: 'Фестиваль стрит-арта', href: '#', img: 'event-img1' },
        { name: 'Много краски не бывает', href: '#', img: 'event-img2' },
        { name: 'Учитель из Астаны', href: '#', img: 'event-img3' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.events {
  &__item {
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: var(--bg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      transition: 0.7s;
      z-index: -1;
    }

    &:hover::before {
      background-size: 120% 120%;
      filter: brightness(40%)
    }
  }

  &__item, &__container {
    min-height: 200px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 2.1rem;
  }
}
</style>
