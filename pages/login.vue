<template>
  <div ref="page" class="form-page">
    <h1 class="form-page__heading heading heading--h3">
      Вход
    </h1>

    <form class="form" @submit.prevent="submit">
      <div
        v-for="(input, i) in inputs"
        :key="i"
        class="form__input-container"
      >
        <label :for="input.name" class="visually-hidden">
          {{ input.placeholder }}
        </label>
        <input
          :id="input.name"
          v-model="form[input.name]"
          :type="input.type"
          :name="input.name"
          class="input"
          :placeholder="input.placeholder"
        >
      </div>

      <NuxtLink to="#" class="form-page__agreement-link">
        Забыли пароль?
      </NuxtLink>


      <input
        type="submit"
        :value="buttonText"
        class="form-page__btn btn btn--filled btn--huge"
      >
    </form>

    <NuxtLink
      v-if="additional.hasOwnProperty('href')"
      :to="additional.href"
      class="form-page__link"
    >
      {{ additional.text }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data () {
    return {
      form: {
        login: '',
        password: ''
      },
      buttonText: "Войти",
      inputs: [
        { type: 'string', placeholder: 'Введите email', name: 'login' },
        { type: 'password', placeholder: 'Введите пароль', name: 'password' },
      ],
      additional: {
        href: '/signup',
        text: 'Нет аккаунта? Зарегистрироваться'
      }
    }
  },
  methods: {
    async submit() {
      try {
        await this.$auth.loginWith('local', { data: this.form })
        this.$router.push('/')
      }
      catch {
        console.error('Ошибка входа')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@use 'assets/scss/components/form.scss';

.form-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 2rem;
  margin: 10%;

  &__heading {
    margin-bottom: 3.5rem;
  }

  &__link {
    display: block;
    width: 100%;
    text-align: center;
    color: #F8F3E6;
    text-decoration: none;
    margin-top: 1.25rem;
  }

  &__agreement {
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.625rem;
  }

  &__agreement-link {
    text-decoration: none;
    color:  #FFFFFF;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: right;
  }

  &__btn {
    margin-top: 1.25rem;
  }
}

</style>
