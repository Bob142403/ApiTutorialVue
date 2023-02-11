<template>
  <div class="card container mb-2">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ post.title }}</h3>
      <div class="fs-5 d-flex">
        UserName:
        <p
          v-if="post.userInfo"
          class="user-post text-primary"
          data-bs-target="#staticBackdrop"
          data-bs-toggle="modal"
          @click="setModalInfo(post.userInfo)"
        >
          {{ post.userInfo.name }}
        </p>
      </div>
      <p class="card-text">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(["setModalInfo"])
  }
};
</script>

<style scoped>
.user-post {
  cursor: pointer;
}
</style>
