<template>
  <div class="container mx-auto px-4 pt-16 pb-8">
    <template v-if="$fetchState.pending && !articles.length">
      <div class="article-cards-wrapper">
        <content-placeholder
            v-for="p in 30"
            :key="p"
            rounded
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholder>
      </div>
    </template>

    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>

    <template v-else>
        <div class="flex flex-col justify-center justify-items-center article-cards-wrapper">
          <ArticleListCard
              v-for="(article, i) in articles"
              :key="article.id"
              :article="article"
              :total="articles.length"
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
      title: 'New Articles'
    };
  },
  data() {
    return {
      perPage: 5,
      total: 0,
      articles: []
    };
  },
  async fetch() {
    const articles = await fetch(`https://dev.to/api//articles?username=eclecticcoding`)
        .then(res => res.json());
    this.articles = this.articles.concat(articles);
    this.total = this.articles.length

  }
};
</script>
