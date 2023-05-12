<template>
  <ul class="posts">
    Статьи 
  </ul>
</template>

<script>
export default {
  name: 'AccountArticles',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.posts{
  color: aliceblue;
}
</style>
