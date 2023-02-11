<template>
  <div>
    <Modal />
    <Search />
    <UserPost v-for="post in getFilteredPosts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserPost from "./user-post/user-post";
import Modal from "./components/modal";
import Search from "./components/search";

export default {
  name: "UserBlog",
  components: { UserPost, Modal, Search },
  computed: { ...mapGetters(["allPosts", "getFilteredPosts"]) },
  methods: { ...mapActions(["fetchPosts"]) },
  async mounted() {
    await this.fetchPosts();
  }
};
</script>
