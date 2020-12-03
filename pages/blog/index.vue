<template>
  <div class="container mx-auto px-4 pt-16 pb-8">
    <template v-if="$fetchState.pending && !articles.length">
      <div class="flex flex-col justify-center justify-items-center article-cards-wrapper">
        <content-placeholders
            v-for="p in 30"
            :key="p"
            rounded
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>

    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>

    <template v-else>
        <div class="flex flex-col justify-center justify-items-center article-cards-wrapper">
          <article-list-card
              v-for="article in articles"
              :key="article.id"
              :article="article"
          />
        </div>
    </template>

    <template v-if="$fetchState.pending && articles.length">
      <div class="article-cards-wrapper">
        <content-placeholders
            v-for="p in 30"
            :key="p"
            rounded
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'All Articles'
    };
  },
  data() {
    return {
      articles: []
    };
  },
  async fetch() {
    const articles = await fetch(`https://dev.to/api/articles?username=eclecticcoding&state=all`)
        .then(res => res.json());
    this.articles = this.articles.concat(articles);
  }
};
</script>
