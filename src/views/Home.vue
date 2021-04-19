<template>
  <section class="text-center brand" style="padding-top: 200px">
    <h1 class="display-1 text-white" hidden>Omdat</h1>
    <img
      src="../assets/images/omdat-by-oj.png"
      class="img-fluid"
      alt="Omdat Logo"
      width="400"
    />
    <p
      class="lead text-white font-weight-normal"
      v-html="env.VUE_APP_TAGLINE"
    ></p>

    <!-- Search button -->
    <div class="row">
      <div class="col-md-6 offset-md-3 col-sm-12">
        <small>{{ query }}</small>
        <search-input :query="null" />
      </div>
    </div>
    <div class="row" id="global_count">
      <div class="col-8 offset-2 small">
        <div v-if="data_fetched" class="text-white">
          <strong>{{ fields.data.count_documents }}</strong> documents gathered
          from <strong>{{ fields.data.count_courts }}</strong> courts
        </div>
      </div>

      <div class="col-8 offset-2 small text-white">
        <a href="https://twitter.com/OpenjusticeB" target="_blank">Twitter </a>
        |
        <a
          href="https://eur-lex.europa.eu/content/help/faq/ecli.html"
          target="_blank"
          >ECLI official docs
        </a>
        |
        <a
          href="https://api-ecli.openjustice.lltl.be/api-docs.html"
          target="_blank"
          >API Doc
        </a>
      </div>
    </div>
  </section>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>

  <div class="container" v-else>
    <div class="row">
      <div class="col-12">
        <h3>📃 {{ fields.data.recent_documents.title }}</h3>
        <hr />

        <ul>
          <li
            v-for="(field, index) in fields.data.recent_documents.documents"
            :key="index"
            class="col-md-5 small"
          >
            <a :href="field.ref" class="text-primary font-weight-bold">{{
              field.ecli
            }}</a>
            <small class="text-muted"> — {{ field.updated_at_diff }}</small>
          </li>
        </ul>
        <h3>🏢 {{ fields.data.court_categories.title }}</h3>
        <hr />
      </div>
      <div
        v-for="(field, index) in fields.data.court_categories.categories"
        :key="index"
        class="col-md-4"
      >
        <h4>{{ field.label }}</h4>

        <span v-for="(court, index) in field.courts" :key="index">
          <template v-if="index > 0"> — </template>

          <a :href="'BE/' + court.acronym" class="font-weight-bold">{{
            court.name
          }}</a>
          <sup class="text-muted small"> ({{ court.count_total }}) </sup>
        </span>
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
      page_url: "https://api-ecli.openjustice.lltl.be/api/v1/ECLI/BE",
      env: {},
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
.bottom {
  background-color: #f7f7f7;
}
</style>
