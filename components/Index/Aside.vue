<template>
  <aside ref="aside" class="aside">
    <ul class="aside__list">
      <li
        v-for="(link, i) in links"
        :key="i"
        class="aside__item"
      >
        <NuxtLink :to="link.href" class="aside__link">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>

    <img src="@/assets/images/sidenavwave.svg" alt="wave">
  </aside>
</template>

<script>
export default {
  name: 'IndexAside',
  data () {
    return {
      links: [
        { text: 'Галерея', href: '#gallery' },
        { text: 'Художники', href: '#authors' },
        { text: 'События', href: '#events' },
        { text: 'Блог', href: '#blog' },
      ]
    }
  },
  mounted () {
    const firstScreen = document.querySelector('[data-first-screen]')
    if (!firstScreen || !IntersectionObserver) {
      this.$refs.aside.classList.add('active')
      return false
    }

    const observer = new IntersectionObserver(this.observerHandler)
    observer.observe(firstScreen)
  },
  methods: {
    observerHandler (entry) {
      if (entry[0].isIntersecting) {
        this.$refs.aside.classList.remove('active')
        return
      }

      this.$refs.aside.classList.add('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  position: fixed;
  right: 60px;
  top: 35%;
  display: flex;
  column-gap: 20px;
  font-size: 20px;
  font-weight: 300;
  opacity: 0;
  transition: 0.3s;
  z-index: 100;

  &.active {
    opacity: 1;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
  }

  &__item {
    margin-bottom: 3.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    color: var(--text-primary);
    text-decoration: none;
  }
}
</style>
