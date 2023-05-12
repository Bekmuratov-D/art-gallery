<template>
  <AuthForm
    heading="Вход"
    :inputs="inputs"
    :additional="additional"
    button-text="Войти"
  />
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data () {
    return {
      inputs: [
        { type: 'email', placeholder: 'Введите email', name: 'email' },
        { type: 'password', placeholder: 'Введите пароль', name: 'password' },
      ],
      additional: {
        href: '/signup',
        text: 'Нет аккаунта? Зарегистрироваться'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
