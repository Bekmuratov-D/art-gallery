<template>
<header class="header">
  <nav class="header__nav container">
    <div class="header__logo-search">
      <NuxtLink to="/">
        <img src="@/assets/icons/logo-small.svg" alt="Small logo">
      </NuxtLink>
      <form class="header__form" action="">
        <img class="header__form-icon" src="@/assets/icons/search.svg" alt="search">  
        <input id="header__form-input" class="header__form-input" placeholder="Поиск..." type="text">
      </form>
    </div>
       
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
name: 'ProfileHeader',
data () {
    return {
    links: [
        { href: '#', text: 'Галерея' },
        { href: '#', text: 'Новости' },
        { href: '#', text: 'Блог' },
        { href: '#', text: 'Контакты' },
        { href: '#', text: 'Аккаунт' },
    ]
    }
}
}
</script>

<style lang="scss" scoped>


.header {
position: relative;
padding: 0.5rem 0;

&::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: var(--gradient);
}
&__nav {
    display: flex;
    justify-content: space-between;
}

&__form{
    margin-left: 43px;
    position: relative;
}


&__form-input{
    width: 500px;
    border-radius: 8px;
    padding: 9px 10px 9px 45px;
    background-color: transparent;
    border: 1px solid rgba(112, 113, 121, 0.5);
    background: none;
    outline: none;
    font: 'Gilroy';
    color: inherit;
    font-size: 20px;
    &:focus {
      border-color: #FFD64A;
    }
}

&__logo-search{
    display: flex;
    align-items: center;
}

&__form-icon{
    position: absolute;
    left: 15px;
    top: 10px;
    opacity: 0.2;
    z-index: 10000;
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
  