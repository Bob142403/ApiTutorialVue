const searchParams = new URLSearchParams(document.location.search);

export default {
  actions: {
    async fetchPosts({ commit }) {
      const postsURL = "https://jsonplaceholder.typicode.com/posts";
      const usersURL = "https://jsonplaceholder.typicode.com/users";

      const users = await fetch(usersURL).then(response => response.json());

      commit("addUsers", users);

      const posts = await fetch(postsURL).then(response => response.json());

      commit("addPosts", posts);

      commit("addUserInfo", users);
    }
  },
  mutations: {
    addPosts(state, posts) {
      state.posts = posts;
    },
    addUsers(state, users) {
      state.users = users;
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
    users: [],
    info: {},
    searchTitle: searchParams.get("search") || ""
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
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
