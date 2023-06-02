<template>
  <header class="header">
    <nav class="header__nav container">
      <ul class="header__list">
        <li v-for="(link, i) in links" :key="i" class="header__item">
          <NuxtLink :to="link.href" class="header__link">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AccountHeader',
  data () {
    return {
      links: [
        { href: '#', text: 'Галерея' },
        { href: '#', text: 'Новости' },
        { href: '#', text: 'Блог' },
        { href: '/contact', text: 'Контакты' },
        { href: '/account', text: 'Аккаунт' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: var(--gradient);
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__item {
    margin-right: 2.5rem;
  }

  &__link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 300;
    font-size: 1.25rem;
  }
}
</style>
