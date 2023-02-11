<template>
  <div>
    <Modal />
    <Search />
    <UserPost v-for="post in getFilteredPosts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserPost from "./components/user-post/user-post";
import Modal from "./components/modal/modal.vue";
import Search from "./components/search/search.vue";

export default {
  name: "UserBlog",
  components: { UserPost, Modal, Search },
  computed: { ...mapGetters(["allPosts", "getFilteredPosts"]) },
  methods: { ...mapActions(["fetchPosts", "fetchUsers"]) },
  async mounted() {
    await this.fetchUsers();
    await this.fetchPosts();
  }
};
</script>
