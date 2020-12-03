<template>
  <article class="flex justify-between mb-8 p-2">
    <div class="mx-auto">
      <nuxt-link :to="`/blog/${article.slug}`">
        <div class="md:flex shadow-lg mx-6 md:mx-auto max-w-lg md:max-w-2xl">
          <img
              class=" w-full md:w-1/3 object-cover rounded-lg rounded-r-none pb-5/6"
              :src="article.cover_image"
              :alt="article.title"
          />
          <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
            <div class="flex items-center">
              <h2 class="text-xl text-gray-800 font-medium mr-auto">
                {{ article.title }}
              </h2>
            </div>
            <p class="text-sm text-gray-700 mt-2">
              {{ article.description }}
            </p>
            <div class="mt-6 top-auto">
              <nuxt-link
                  v-for="tag in article.tag_list"
                  :key="tag"
                  :to="`/tags/${tag}`"
                  class="border border-indigo-700 text-indigo-700 text-sm rounded-md px-2 py-1 mr-2 transition duration-500 ease select-none hover:text-white hover:font-bold hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                #{{ tag }}
              </nuxt-link>
            </div>
            <div class="meta">
              <div class="scl">
              <span>
                <heart-icon />
                {{ article.positive_reactions_count }}
              </span>
                <span>
                <comments-icon />
                {{ article.comments_count }}
              </span>
              </div>
              <time class="text-sm text-gray-700">
                {{
                  new Date(article.created_at).toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                }}
              </time>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import HeartIcon from '@/assets/icons/heart.svg?inline';
import CommentsIcon from '@/assets/icons/comments.svg?inline';

export default {
  components: {
    HeartIcon,
    CommentsIcon
  },
  props: {
    article: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.meta {
  letter-spacing: -0.0125rem;
  @apply text-sm;
  @apply flex items-center justify-between mt-8;
  .scl {
    @apply flex;
    span {
      @apply flex items-center mr-4;
      svg {
        @apply mr-1;
      }
    }
  }
}
</style>
