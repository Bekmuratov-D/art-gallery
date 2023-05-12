<template>
  <section class="join">
    <div class="join__wrapper container">
      <h2 class="join__heading heading heading--h2">
        Присоединяйся
      </h2>

      <p class="join__text">
        Делись своими работами, делай посты, оценивай другие и будь частью нашего творческого мира ♥
      </p>

      <NuxtLink to="/signup" class="btn btn--filled btn--huge">
        Зарегистрироваться
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexJoin'
}
</script>

<style lang="scss" scoped>
.join {
  text-align: center;
  font-weight: 300;
  background-image: url('@/assets/images/gorgona.png');
  background-position: 128px 321px;
  background-repeat: no-repeat;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 0;
  }

  &__heading {
    margin-bottom: 10%;
  }

  &__text {
    max-width: 618px;
    font-size: 28px;
    margin-bottom: 250px;
  }
}
</style>
