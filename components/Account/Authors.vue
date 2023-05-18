<template>
  <ul class="list-person">
    <li 
      v-for="(item, i) in authors"
      :key="i"
      class="list-person__item"
    >
      <img :src="item.image" alt="аватар" class="list-person__avatar">
      <div class="list-person__info">
        <p class="list-person__name">{{ item.name }}</p>
        <div class="list-person__directions">
          <p 
            v-for="(direction, a) in item.directions"
            :key="a"
            class="list-person__direction"
          >
          {{ direction.name }}
          </p>
        </div>
        <button
          v-if="item.favourites"
          class="list-person__btn btn"
        >
          <img src="@/assets/icons/favourites-authors.svg" alt="удалить из избранных" class="list-person__favourites">
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'AccountAuthors',
    props: {
        authors: {
        type: Array,
        required: true
        }
    },
}
</script>

<style lang="scss" scoped>

.list-person{
  column-count: 2;
  gap: 65px;
  &__item {
    display: flex;
    align-items: center;
    z-index: 2; 
    position: relative;  
  }
  &__avatar {
    border-radius: 50%;
    margin-right: -60px;
    z-index: 3;
  }
  &__info {
    padding: 17px 40px 17px 85px;
    background: linear-gradient(84.91deg, rgba(86, 249, 216, 0.7) 13.12%, rgba(25, 203, 252, 0.7) 38.6%, rgba(140, 147, 247, 0.7) 64.08%, rgba(245, 163, 211, 0.7) 87.25%);
    border-radius: 12px;
    width: 430px;
    height: 123px;
  }
  &__name {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 130%;
    color: #FFFFFF;
  }

  &__directions {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    position: absolute;
    bottom: 17px;
    max-width: 300px;
  }

  &__direction {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    color: #FFFFFF;
  }

  &__favourites {
    position: absolute;
    right: 21px;
    top: 4px;
  }
}

</style>