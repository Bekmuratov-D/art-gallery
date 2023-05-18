<template>
    <div class="btn-add">
        <button class="btn-add__btn btn">
            {{ btn.text }}
        </button>
    </div>
</template>

<script>
export default {
name: 'AccountBtnAdd',
props: {
  btn: {
  type: Object,
    required: true
    },
  }
}
</script>

<style lang="scss" scoped>

.btn-add{
  &__btn{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 130%;
    color: #F8F3E6;
    padding: 18px 30px;
    background-clip: padding-box;
    border: solid 2px transparent; /* прозрачный border */
    border-image: linear-gradient(84.91deg, rgba(86, 249, 216, 0.7) 13.12%, rgba(25, 203, 252, 0.7) 38.6%, rgba(140, 147, 247, 0.7) 64.08%, rgba(245, 163, 211, 0.7) 87.25%) 2;
    border-radius: 10px; /* 1 - ширина градиентного border */
  }
}

</style>
  