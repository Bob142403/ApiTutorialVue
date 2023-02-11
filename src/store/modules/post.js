import { postsApi } from "../../services/posts-api";
import { usersApi } from "../../services/users-api";

const searchParams = new URLSearchParams(document.location.search);

export default {
  actions: {
    async fetchPosts({ commit, rootState }) {
      // commit("addPosts", postsApi.getPosts());
      await postsApi.getPosts().then(posts => commit("addPosts", posts));

      commit("addUserInfo", rootState.user.users);
    }
  },
  mutations: {
    addPosts(state, posts) {
      state.posts = posts;
    },
    addUserInfo(state, users) {
      state.posts = state.posts.map(post => {
        const userInfo = users.find(user => user.id === post.userId);
        return {
          ...post,
          userInfo: {
            name: userInfo.name,
            email: userInfo.email,
            website: userInfo.website,
            username: userInfo.username
          }
        };
      });
    },
    setModalInfo(state, info) {
      state.info = info;
    },
    setSearchTitle(state, title) {
      state.searchTitle = title;
    }
  },
  state: {
    posts: [],
    info: {},
    searchTitle: searchParams.get("search") || ""
  },
  getters: {
    getSearchTitle(state) {
      return state.searchTitle;
    },
    getInfo(state) {
      return state.info;
    },
    getFilteredPosts(state) {
      return state.posts.filter(post =>
        post.title.includes(state.searchTitle.trim())
      );
    }
  }
};
