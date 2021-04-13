<template>
  <form :action="'/search/' + parsedInput" method="get">
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
          Search 🔎
        </button>
      </div>
    </div>
  </form>

  <small v-if="query" class="form-text text-muted">
    Search for <code>{{ parsedInput }}</code></small
  >
</template>

<style>
</style>

<script>
export default {
  mounted() {},
  props: {
    query: String,
  },

  computed: {
    parsedInput() {
      if (this.query) {
        return this.query.split(" ").join("+");
      }
      return "";
    },
  },
};
</script>
