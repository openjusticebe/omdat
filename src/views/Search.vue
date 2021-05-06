<template>
  <div class="row">
    <div class="col-10 offset-1">
      <search-input />
    </div>

    <div class="col-10 offset-1">
      <h1>
        🔍 Results
        <small class="text-muted">{{ $route.params.needle }}</small>
      </h1>

      <search-results :page_url="page_url_search" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page_url_search: "",
    };
  },
  methods: {
    reload(page_url) {
      if (page_url) {
        this.fetchData(page_url);
      }
    },
  },
  created() {
    this.env = process.env;
    this.page_url_search =
      this.env.VUE_APP_REST_API_URL + "/search/" + this.$route.params.needle;
  },
};
</script>