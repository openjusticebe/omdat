<template>
  <section class="text-center top" style="padding-top: 200px">
    <h1 class="display-3 font-weight-normal" v-html="env.VUE_APP_NAME"></h1>
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
              Search <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="text-small"><br /></p>
    <div class="row">
      <div class="col-8 offset-2 small text-secondary">
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
          href="https://ecli.openjustice.be/docs"
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
        <h3>Browse courts</h3>
        <!-- 
        <h2>{{ fields.data.title_fr }}</h2>
        <h2>{{ fields.data.title_nl }}</h2>
        <h2>{{ fields.data.title_de }}</h2> -->

        <hr />
      </div>
      <div
        v-for="(field, index) in fields.data.categories"
        :key="index"
        class="col-md-4"
      >
        <h4>{{ field.label_fr }}</h4>

        <span v-for="(court, index) in field.courts" :key="index">
          <template v-if="index > 0"> — </template>

          <a :href="'BE/' + court.acronym"
            ><strong>{{ court_name(court) }}</strong></a
          >
          <!-- <small
            >{{ court.count_total }}📄 {{ court.first_year }}—{{
              court.last_year
            }}
          </small> -->
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
  methods: {
    increment() {
      while (this.start_count < this.fields.data.count_documents) {
        setInterval(() => {
          this.start_count++;
        }, 30);
      }
      return this.start_count;
    },
    court_name: function (court) {
      if (court.def === "nl") {
        return court.name_nl;
      } else if (court.def === "de") {
        return court.name_de;
      } else if (court.def === "fr") {
        return court.name_fr;
      } else {
        return court.name_fr;
      }
    },
  },
  data() {
    return {
      env: {},
      start_count: 134000,
      currentNum: 0,
    };
  },
};
</script>

<style scoped>
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
