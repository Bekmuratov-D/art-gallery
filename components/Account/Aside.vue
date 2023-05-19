<template>
  <aside class="aside">
    <NuxtLink to="/">
      <img src="@/assets/icons/logo-small.svg" alt="Small logo">
    </NuxtLink>

    <div class="aside__main">
      <p v-if="$auth.loggedIn" class="aside__info" >
        {{ $auth.user.username }}
        <img
          src="@/assets/images/avatar.png"
          alt="Avatar"
          class="aside__avatar"
        >
      </p>
      <p v-else class="aside__info">
        Username
        <img
          src="@/assets/images/avatar.png"
          alt="Avatar"
          class="aside__avatar"
        >
      </p>

      <nav class="aside__nav">
        <ul class="aside__list">
          <li v-for="(link, i) in links" :key="i" class="aside__item">
            <NuxtLink :to="link.href" class="aside__link">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <ul class="aside__contacts">
      <li class="aside__contacts-item">
        <a href="tel:+7 (925) 442 22 12" class="aside__contacts-link">
          8 (925) 442 22 12
        </a>
      </li>
      <li class="aside__contacts-item">
        <a href="mailto:artpoly@mospolytech.ru" class="aside__contacts-link">
          artpoly@mospolytech.ru
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AccountAside',
  data () {
    return {
      links: [
        { href: '/account', text: 'Избранное' },
        { href: '/account/subscriptions', text: 'Подписки' },
        { href: '/account/my-pictures', text: 'Мои картины' },
        { href: '/account/my-articles', text: 'Мои статьи' },
        { href: '/account/settings', text: 'Настройки' },
        { href: '#', text: 'Выйти' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #14151F;
  height: 100vh;
  padding: 2rem;

  &__info {
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    font-weight: 300;
  }

  &__avatar {
    margin-left: 1.25rem;
  }

  &__list {
    margin-top: 3.4rem;
  }

  &__item {
    margin-bottom: 1.25rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    position: relative;
    font-size: 1.25rem;
    font-weight: 300;
    color: #F8F3E6;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1px;
      width: 0;
      background: var(--gradient);
      transition: width 0.6s;
    }

    &:hover::after,
    &.nuxt-link-exact-active::after {
      width: 100%;
    }
  }

  &__contacts-item {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__contacts-link {
    color: #F4EFE0;
    text-decoration: none;
  }
}
</style>
