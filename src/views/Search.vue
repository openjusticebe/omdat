<template>
  <h1>Search <small></small></h1>
  <search-results :page_url="page_url_search" />
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