<template>
  <NuxtLink :to="href" class="arrow">
    <img src="@/assets/images/arrow.svg" alt="arrow"/>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArrowLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
  font-size: 1.25rem;
}
</style>
