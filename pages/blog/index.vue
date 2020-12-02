<template>
  <div class="container mx-auto px-4 pt-16 pb-8">
    <section>
      <article-card-block
          v-for="article in articles.slice(0,5)"
          :key="article.id"
          :article="article"
      />
      <div></div>
    </section>
    <ul>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  async fetch() {
    const articles = await fetch(`https://dev.to/api//articles?username=eclecticcoding`)
        .then(res => res.json());
    this.articles = this.articles.concat(articles);
  }
};
</script>

<style scoped>
.container__blog {
  @apply min-h-screen flex justify-center text-center mx-auto;
}
</style>
