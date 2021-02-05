<template>
  <section class="text-center top" style="padding-top: 200px">
    <img src="../assets/images/omdat-by-oj.png" />
    <p
      class="lead text-muted font-weight-normal"
      v-html="env.VUE_APP_TAGLINE"
    ></p>

    <!-- Search button -->
    <div class="row">
      <div class="col-6 offset-3">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Not yet implemented"
            disabled
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" disabled>
              Search 🔎
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="global_count">
      <div class="col-8 offset-2 small">
        <div v-if="data_fetched">
          <strong>{{ fields.data.count_documents }}</strong> documents gathered
          from <strong>{{ fields.data.count_courts }}</strong> courts
        </div>
      </div>

      <div class="col-8 offset-2 small text-secondary">
        <a
          href="https://twitter.com/OpenjusticeB"
          target="_blank"
          rel="noopener"
          >Twitter</a
        >
        |
        <a
          href="https://eur-lex.europa.eu/content/help/faq/ecli.html"
          target="_blank"
          rel="noopener"
          >ECLI official docs</a
        >
        |
        <a
          href="https://api-ecli.openjustice.lltl.be/api-docs.html"
          target="_blank"
          rel="noopener"
          >API Doc</a
        >
      </div>
    </div>
  </section>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>

  <div class="container" v-else>
    <div class="row">
      <div class="col-12">
        <!-- <ul>
          <li
            v-for="(field, index) in fields.data.recent_documents.documents"
            :key="index"
            class="col-md-4"
          >
            {{ field.ecli }}
          </li>
        </ul> -->
        <h3>{{ fields.data.court_categories.title }}</h3>
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

          <a :href="'BE/' + court.acronym"
            ><strong>{{ court.name }}</strong></a
          >
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

  props: {
    page_url: String,
  },
  mounted() {
    this.env = process.env;
  },
  methods: {},
  data() {
    return {
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
.green a {
  color: #079455;
}

.bottom {
  background-color: #f7f7f7;
}
</style>
