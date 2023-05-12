<template>
<div class="index">
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <button
            class="nav__btn btn heading heading--h3"
        >
            Мои статьи
        </button>
        <button>
            Добавить статью
        </button>
      </li>
    </ul>
  </div>


    <!-- Не нужно создовать компонент, верстай тут -->

    
</div>
</template>

<script>

export default {
  layout: 'account',
  data () {
    return {
    }
  },
  created () {
    
  }
  }
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 5.3rem;

  &__list {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    transition: opacity 0.2s;

    &.inactive {
    opacity: 0.5;
    }
  }
}
</style>