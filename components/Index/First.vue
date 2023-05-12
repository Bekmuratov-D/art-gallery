<template>
  <section class="first">
    <div class="first__wrapper container">
      <h1 class="first__heading heading">
        Галерея Московского политеха
      </h1>

      <IndexWave />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexFirst'
}
</script>

<style lang="scss" scoped>
.first {
  position: relative;
  background-image: url('assets/images/firstscreenbg.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 900px;

  &__wrapper {
    padding-top: 180px;
  }

  &__heading {
    max-width: 916px;
    margin-left: 45px;
  }
}
</style>
