<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="(link, i) in links" :key="i" class="nav__item">
        <button
          :class="['nav__btn btn heading heading--h3', { 'inactive': link.key !== activeKey }]"
          @click="$emit('change', link.key)"
        >
          {{ link.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AccountNav',
  props: {
    links: {
      type: Array,
      required: true
    },
    activeKey: {
      type: String,
      required: true
    }
  },
  emits: ['change'],
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
