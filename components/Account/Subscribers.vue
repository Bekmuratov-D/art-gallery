<template>
  <ul class="posts">
    Subscribers 
  </ul>
</template>

<script>
export default {
  name: 'AccountSubscribers',
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
