import { pinia } from '@/store/'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ({ app, $axios }, inject) => {
  const authStore = pinia.use('auth')

  app.authStore = authStore

  const axios: NuxtAxiosInstance = $axios.create({})

  // Проверка авторизации
  authStore.$on('loggedIn', async () => {
    const { data } = await axios.get('/user')

    authStore.setUser(data.user)
  })

  // Попытка входа
  authStore.$on('login', async ({ username, password }) => {
    try {
      const { data } = await axios.post('/login', { username, password })

      authStore.setToken(data.token)

      authStore.setUser(data.user)

      return Promise.resolve(data)
    }
    catch {
      return Promise.reject()
    }
  })

  // Выход
  authStore.$on('logout', async () => {
    authStore.removeToken()
    authStore.removeUser()
  })

  inject('auth', authStore)
}