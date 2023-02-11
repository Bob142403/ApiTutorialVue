<template>
  <div id="app">
    <UserBlog />
  </div>
</template>

<script>
import UserBlog from "./pages/users-blogs/users-blogs.vue";

export default {
  name: "app",
  components: { UserBlog }
};
</script>
