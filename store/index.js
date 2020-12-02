import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  currentArticle: null,
  allArticles: []
});

export const mutations = {
  // SET_CURRENT_ARTICLE(state, article) {
  //   state.currentArticle = article;
  // },
  SET_ARTICLES(state, articles) {
    state.allArticles = articles;
    console.log(state.allArticles.length);
  }
};
