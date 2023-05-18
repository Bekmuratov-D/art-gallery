import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore({
  id: 'favourites',
  state: () => ({
    favouriteCategory: 'AccountPictures'
  })
})

export const useFavouritesStore2 = defineStore({
  id: 'favourites2',
  state: () => ({
    favouriteCategory: 'AccountAuthors'
  })
})

export const useFavouritesStore3 = defineStore({
  id: 'favourites3',
  state: () => ({
    favouriteCategory: 'AccountPictures'
  })
})
