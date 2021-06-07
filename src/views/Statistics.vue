<template>
  <section class="text-center top">
    <h1 class="display-3 font-weight-normal">Statistics</h1>
    <p
      class="lead text-muted font-weight-normal"
      v-html="env.VUE_APP_TAGLINE"
    ></p>

    <iframe
      src="http://metabase.openjustice.lltl.be/public/dashboard/ec33c495-d2c6-4ae1-b89a-dfe982664a41"
      frameborder="0"
      width="1200"
      height="2000"
      allowtransparency
    ></iframe>
  </section>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div class="container" v-else>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Full texts indexed</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ fields.full_texts_count }}
            </h6>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ECLI count</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ fields.ecli_count }}
            </h6>
            <p class="card-text">
              <!-- Omdat gather documents from various sources. -->
            </p>
          </div>
        </div>
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
