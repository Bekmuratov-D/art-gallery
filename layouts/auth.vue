<template>
  <div class="layout">
    <TheHeader class="header" />

    <main class="main">
      <Nuxt/>
    </main>

    <TheFooter class="footer" padding-t-b="2%" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 auto;
}
</style>
