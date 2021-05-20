<template>
  <form :action="'/search/' + parseInput" method="get">
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Enter your query"
        aria-label="Search"
        v-model="query"
      />

      <div class="input-group-append">
        <button class="btn btn-primary" v-if="query" type="submit">
          {{ $t("search") }} 🔎
        </button>
      </div>
    </div>
  </form>

  <small v-if="query" class="form-text text-muted">
    {{ $t("search_for") }} <code>{{ parseInput }}</code>
  </small>
</template>

<style>
</style>

<script>
export default {
  mounted() {
    // console.log($route.params.needle);
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    parseInput() {
      if (this.query) {
        return this.query.split(" ").join("+");
      }
      return "";
    },
  },
};
</script>
