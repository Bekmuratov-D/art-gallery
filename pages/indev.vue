<template>
  <div class="indev">
    <div class="indev__container container">
      <h3 class="indev__text">Настоящий момент страница нахродится разработке</h3>
    </div>
  </div>
</template>

<script>
export default {
name: 'IndevPage',
layout: 'indev',
data () {
    return {
    }
}
}
</script>

<style lang="scss" scoped>
.indev {
  display: flex;
  background-image: url('~/assets/images/indev-fon.jpg');
  background-repeat: no-repeat;
  height: 1004px;
  background-position: right top;
  &__text {
    font-family: 'Mak';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    color: #F8F3E6;
    max-width: 500px;
    margin-top: 15%;
    margin-left: 5%;
  }
}
</style>
  