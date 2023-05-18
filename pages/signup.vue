<template>
  <div class="form-page">
    <h1 class="form-page__heading heading heading--h3">
      Регистрация
    </h1>

    <form class="form" @submit.prevent="submit">
      <div
        v-for="(input, i) in inputs"
        :key="i"
        class="form__input-container"
      >
        <label :for="i" class="visually-hidden">
          {{ input.placeholder }}
        </label>
        <input
          :id="i"
          v-model="form[input.name]"
          :type="input.type"
          :name="input.name"
          class="input"
          :placeholder="input.placeholder"  
        >
      </div>

      <p>
        Регистрируясь, вы соглашаетесь с
        <NuxtLink to="#" class="form-page__agreement-link">
          правилами пользовательского соглашения
        </NuxtLink>
      </p>

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
  name: 'SignupPage',
  layout: 'auth',
  data () {
    return {
      form: {
        username: '',
        password: '',
        email: '',
      },
      buttonText: "Регистрация",
      inputs: [
        { type: 'text', placeholder: 'Введите никнейм', name: 'username' },
        { type: 'email', placeholder: 'Введите email', name: 'email' },
        { type: 'password', placeholder: 'Введите пароль', name: 'password' },
      ],
      additional: {
        href: '/login',
        text: 'Уже есть аккаунт? Войти'
      }
    }
  },
  methods: {
    async submit() {
      try {
        const data = await this.$axios.post('/api/v1/auth/sign-up', this.form)

        console.log(data)

        this.$router.push('/login')
      }
      catch {
        console.error('Ошибка регистрации')
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
  margin: 15% auto;

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
