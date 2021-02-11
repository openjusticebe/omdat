<template>
  <div class="input-group">
    <input
      class="form-control"
      type="text"
      placeholder="Enter your query"
      aria-label="Search"
      v-model="query"
    />
    <div class="input-group-append">
      <a :href="'/search/' + query" class="btn btn-primary" v-if="query">
        Search 🔎
      </a>
    </div>
  </div>
  <small v-if="query" class="form-text text-muted">
    Search for <code>{{ query }}</code></small
  >
</template>

<style>
</style>

<script>
export default {
  mounted() {},
  data() {
    return {
      query: null,
    };
  },

  computed: {},
};
</script>
