<template>
  <header ref="header" class="header container">
    <NuxtLink to="/" class="header__logo">
      <img src="@/assets/icons/logo-small.svg" alt="Логотип Art Polytech">
    </NuxtLink>

    <nav class="header__nav">
      <ul class="header__list">
        <li
          v-for="(link, i) in links"
          :key="i"
          class="header__item"
        >
          <NuxtLink :to="link.href" class="header__link">
            {{ link.text }}
          </NuxtLink>
        </li>
        <li v-if="$auth.loggedIn" class="header__item">
          <NuxtLink to="account" class="header__link">
            Профиль
          </NuxtLink>
        </li>
        <li v-else class="header__item">
          <NuxtLink to="login" class="header__link">
            Войти
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      links: [
        { text: 'Галерея', href: 'indev' },
        { text: 'Новости', href: 'indev' },
        { text: 'Блог', href: 'indev' },
        { text: 'Контакты', href: 'contact' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 28px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 300;
  transform: translateX(-50%);
  z-index: 3;

  &__list {
    display: flex;
  }

  &__item {
    margin-right: 2.5rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
