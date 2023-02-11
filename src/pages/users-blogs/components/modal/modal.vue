<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="{-1}"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            About: {{ getInfo.name }}
          </h1>
        </div>
        <div class="modal-body">
          <div class="d-flex">
            <p>Name:</p>
            <p id="userInfo" class="text-primary">{{ getInfo.username }}</p>
          </div>
          <div class="d-flex">
            <p>Email:</p>
            <p id="emailInfo" class="text-primary">{{ getInfo.email }}</p>
          </div>
          <div class="d-flex">
            <p>Website:</p>
            <p id="website" class="text-primary">{{ getInfo.website }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getInfo"])
  }
};
</script>
