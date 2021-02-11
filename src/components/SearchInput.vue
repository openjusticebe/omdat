<template>
  <!-- <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your query"
            v-model="myQuery"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              v-if="myQuery != null"
            >
              Search 🔎
            </button>
          </div>
        </div>
         -->

  <form
    :action="'https://api-ecli.openjustice.lltl.be/api/v1//search/' + query"
    method="get"
  >
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Enter your query"
        aria-label="Search"
        v-model="query"
      />

      <div class="input-group-append">
        <button class="btn btn-primary" type="button" v-if="query">
          Search 🔎
        </button>
      </div>
    </div>
    <small v-if="query" class="form-text text-muted">
      Search for <code>{{ query }}</code></small
    >
  </form>
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
