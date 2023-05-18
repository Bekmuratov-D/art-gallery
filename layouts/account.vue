<template>
  <div class="layout">
    <AccountAside />
    <main class="main">
      <AccountHeader />
      <Nuxt class="layout__container container" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 20% 80%;

  &__container {
    margin-top: 4.6rem;
    max-width: 1005px;
  }
}
</style>
