<template>
  <section class="text-center top">
    <h1 class="display-3 font-weight-bold"><em>O</em>mdat</h1>
    <p class="lead text-muted">
      A free open source solution developed by OpenJustice.be with ❤️ to browse
      <strong>Belgian case law</strong>.
    </p>

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
      <div class="col-8 offset-2 small">
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

    <p class="text-small"><br /><br /><br /></p>
  </section>

  <!-- <Chart /> -->

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div class="container" v-else>
    <div class="row">
      <div class="col-12">
        <h2>{{ fields.data.title_fr }}</h2>
        <hr />
      </div>
      <div
        v-for="(field, index) in fields.data.categories"
        :key="index"
        class="col-md"
      >
        <h4>{{ field.label_fr }} {{ field.label_nl }}</h4>

        <div v-for="(court, index) in field.courts" :key="index">
          <a :href="'BE/' + court.acronym">
            <strong>{{ court_name(court) }}</strong>
          </a>
          <div>
            <small
              >{{ court.count_total }}📄 From {{ court.first_year }}—{{
                court.last_year
              }}
              <br />
              Languages {{ court.lang_count }} Types {{ court.type_count }} 🏷️
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 
  <div class="container" v-else>
    <div class="row">
      <div class="col-12">
        <h3>Browse courts</h3>
      </div>

      <div class="col-sm">
        <h3>Tribunals</h3>
        <h4>Tribunaux de Commerce</h4>
        <div v-for="(field, index) in fields.data" :key="index">
          <a
            :href="field.href"
            v-if="
              field.name.includes('Tribunal') && field.name.includes('Commerce')
            "
            >{{ field.name }}</a
          >
        </div>
        <h4>Tribunaux de première instance</h4>
        <div v-for="(field, index) in fields.collection.sort()" :key="index">
          <a
            :href="field.href"
            v-if="
              field.name.includes('Tribunal') && field.name.includes('instance')
            "
            >{{ field.name }}</a
          >
        </div>
        <h4>Tribunaux du travail</h4>
        <div v-for="(field, index) in fields.collection.sort()" :key="index">
          <a
            :href="field.href"
            v-if="
              field.name.includes('Tribunal') && field.name.includes('travail')
            "
            >{{ field.name }}</a
          >
        </div>
      </div>

      <div class="col-sm">
        <h3>Courts</h3>
        <div v-for="(field, index) in fields.collection.sort()" :key="index">
          <a :href="field.href" v-if="field.name.includes('Cour')">{{
            field.name
          }}</a>
        </div>
      </div>

      <div class="col-sm">
        <h3>Conseils, commissions, etc.</h3>
        <div v-for="(field, index) in fields.collection.sort()" :key="index">
          <a
            :href="field.href"
            v-if="
              !field.name.includes('Tribunal') && !field.name.includes('Cour')
            "
            >{{ field.name }}</a
          >
        </div>
      </div>
    </div>
  </div> -->
</template>



<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],

  props: {
    page_url: String,
  },
  methods: {
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
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
