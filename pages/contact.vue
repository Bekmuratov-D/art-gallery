<template>
<div class="contact">
  <div class="contact__container container">
    <h1 class="contact__heading heading">Контакты</h1>
    <div class="contact__info">
        <ul class="contact__list">
            <li 
            class="contact__item"
            v-for="(item, i) in contacts"
            :key="i"
            >
                <p class="contact__text">{{ item.text }}</p>
                <p class="contact__name heading">{{ item.name }}</p>
            </li>
        </ul>
        <ul class="contact__social-nets">
          <li class="contact__social-nets-item">
            <img src="@/assets/icons/facebook.svg" alt="">
          </li>
          <li class="contact__social-nets-item">
            <img src="@/assets/icons/vk.svg" alt="">
          </li>
          <li class="contact__social-nets-item">
            <img src="@/assets/icons/instagram.svg" alt="">
          </li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'IndevPage',
layout: 'profile',
data () {
    return {
        contacts: [
            {text: 'Почта:', name: 'artpoly@mospolytech.ru'},
            {text: 'Телефон:', name: '+7-925-442-22-12'},
            {text: 'Адрес:', name: 'ул.Автозаводская, д.16'},
            {text: 'Время работы:', name: 'ПН-CБ 12:00 - 18:00'},
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.contact {
background-image: url('~/assets/images/contact-fon.jpg');
background-repeat: no-repeat;
height: 806px;
background-size: cover;
  &__container{
    width: 1250px;
  }

  &__heading{
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
  }
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
  &__info {
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
  }
  
  &__list{
    columns: 2;
    gap: 250px;
  }

  &__item{
    margin-bottom: 80px;
  }

  &__name {
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 42px;
  }
  &__text {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 129%;
    margin-top: 0;
    margin-left: 0;
  }

  &__social-nets-item{
    margin-bottom: 38px;

    :last-child{
        margin-bottom: 0;
    }
  }
}
</style>