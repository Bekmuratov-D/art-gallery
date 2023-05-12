<template>
  <footer class="footer">
    <div
      class="container footer__wrapper"
      :style="{ padding: `${paddingTB} 0` }"
    >
      <NuxtLink to="/" class="btn">
        <img class="footer__logo" src="@/assets/icons/logo.svg" alt="Logo">
      </NuxtLink>

      <address class="footer__item">
        <a href="tel:+79254422212" class="footer__text">
          8 925 442 22 12
        </a>

        <a href="mailto:artpoly@mospolytech.ru" class="footer__text">
          artpoly@mospolytech.ru
        </a>
      </address>

      <address class="footer__item">
        <p class="footer__text">
          <time>
            10:00
          </time>
          -
          <time>
            20:00
          </time>
        </p>

        <p class="footer__text">
          ул. Автозаводская, д. 16, м.Автозаводская
        </p>
      </address>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    paddingTB: {
      type: String,
      required: false,
      default: '1000'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: #1D1E28;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2px;
    background-image: linear-gradient(265.89deg, rgba(255, 255, 255, 0.86) 2.19%, rgba(60, 249, 249, 0.86) 21%, #3AB8FF 44.38%, #F158EB 73.36%, #FFD64A 99.49%);
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 6% 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 300px;

    &:last-of-type {
      text-align: right;
    }
  }

  &__text {
    color: #F8F3E6;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
    margin-bottom: 1.6rem;
    text-decoration: none;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
