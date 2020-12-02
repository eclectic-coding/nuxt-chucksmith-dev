<template>
  <header>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'index',
          slug: 'index'
        },
        {
          name: 'blog',
          slug: 'index'
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
