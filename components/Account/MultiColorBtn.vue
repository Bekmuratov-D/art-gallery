<template>
  <ul class="btns">
    <li 
      v-for="(item, i) in btns"
      :key="i"
      class="btns__item"
    >
      <button class="btns__btn btn" :style="`background: ${ item.color }`">
        {{ item.text }}
      </button>
    </li> 
  </ul>
</template>

<script>
export default {
  name: 'AccountMultiColorBtn',
  props: {
    btns: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.btns{
  display: flex;
  gap: 10px;
  &__btn{
    padding: 8px 20px;
    border-radius: 8px;
  }
}
</style>
