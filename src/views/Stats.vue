<template>
  <section class="text-center top">
    <h1 class="display-3 font-weight-normal">Stats</h1>
    <p
      class="lead text-muted font-weight-normal"
      v-html="env.VUE_APP_TAGLINE"
    ></p>
  </section>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div class="container" v-else>
    <div class="row">
      <div class="col-12">
        {{ fields.full_texts_count }} full_texts_count
        {{ fields.ecli_count }} ecli_count
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <HeatChart :api_data="fields.docs_per_court_per_year" />
      </div>
    </div>
  </div>
</template>



<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],

  mounted() {
    this.env = process.env;
  },
  methods: {},
  data() {
    return {
      env: {},
      page_url: "https://api-ecli.openjustice.lltl.be/api/v1/statistics",
    };
  },
};
</script>

<style scoped>
#global_count {
  padding-bottom: 40px;
  padding-top: 40px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.green a {
  color: #079455;
}

.bottom {
  background-color: #f7f7f7;
}
</style>
