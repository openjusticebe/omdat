<template>
  <form :action="'/search/' + query" method="get">
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Enter your query"
        aria-label="Search"
        v-model="query"
      />
      <div class="input-group-append">
        <button
          :href="'/search/' + query"
          class="btn btn-primary"
          v-if="query"
          type="submit"
        >
          Search 🔎
        </button>
      </div>
    </div>
  </form>

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
