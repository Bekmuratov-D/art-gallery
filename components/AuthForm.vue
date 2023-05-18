<template>
  <section ref="page" class="form-page">
    <h1 class="form-page__heading heading heading--h3">
      {{ heading }}
    </h1>

    <form class="form" @submit.prevent>
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
          :type="input.type"
          :name="input.name"
          class="input"
          :placeholder="input.placeholder"
        >
      </div>

      <p v-if="$slots.agreement?.[0]" class="form-page__agreement">
        <slot name="agreement">
        </slot>
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
  </section>
</template>

<script>
export default {
  name: 'AuthForm',
  props: {
    heading: {
      type: String,
      required: true
    },
    inputs: {
      type: Array,
      required: true
    },
    additional: {
      type: Object,
      required: false,
      default: () => ({})
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  mounted () {
    const header = document.querySelector('.header')
    const height = header.offsetHeight
    this.$refs.page.style.paddingTop = `${height + 28 + 32}px`
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
    color: #19CBFC;
  }

  &__btn {
    margin-top: 1.25rem;
  }
}
</style>
