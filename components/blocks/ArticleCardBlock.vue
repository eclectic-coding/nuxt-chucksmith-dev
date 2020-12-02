<template>
  <nuxt-link :to="`/blog/${article.slug}`">
    <h2>{{ article.title }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>

</style>
