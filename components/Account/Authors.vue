<template>
  <ul class="list-person">
    <!-- <li 
      class="list-person__item"
      v-for="(item, i) in list-person"
      :key="i"
    >
      <img src="" alt="">
      <div class="list-person__info">
        <p class="list-person__neme">{{ item.name }}</p>
        <p 
          class="list-person__direction"
          v-for="(item, i) in list-person.directions"
          :key="i"
        >
         {{ item.direction }}
        </p>
      </div>
    </li> -->
  </ul>
</template>

<script>
  export default {
    name: 'AccountAuthors',
    props: {
        data: {
        type: Array,
        required: true
        }
    },
}
</script>

<style scoped>

</style>