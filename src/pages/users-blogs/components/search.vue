<template>
  <div class="form-outline container mb-2">
    <input
      type="search"
      class="form-control"
      placeholder="Type query"
      aria-label="Search"
      :value="getSearchTitle"
      @input="debounceSearchTitle"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { debounce } from "debounce";

export default {
  computed: { ...mapGetters(["getSearchTitle"]) },
  methods: {
    ...mapMutations(["setSearchTitle"]),
    debounceSearchTitle: debounce(function(event) {
      this.$router.push({ path: "", query: { search: event.target.value } });
      this.setSearchTitle(event.target.value);
    }, "500")
  }
};
</script>
