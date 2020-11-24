<template>
  <div class="row">
    <h1>OpenJustice.be search tool</h1>

    <div class="col-12">
      <ul class="green">
        <li>
          <a
            href="https://twitter.com/OpenjusticeB"
            target="_blank"
            rel="noopener"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://eur-lex.europa.eu/content/help/faq/ecli.html"
            target="_blank"
            rel="noopener"
            >ECLI official docs</a
          >
        </li>
        <li>
          <a
            href="https://ecli.openjustice.be/docs"
            target="_blank"
            rel="noopener"
            >API Doc</a
          >
        </li>
      </ul>

      <!-- Search button -->
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
    <div v-if="!data_fetched">
      <loading-animation />
    </div>

    <div class="container" v-else>
      <div class="row">
        <div class="col-12">
          <h3>Browse courts</h3>
        </div>

        <div class="col-sm">
          <h3>Tribunals</h3>
          <h4>Tribunaux de Commerce</h4>
          <div v-for="(field, index) in fields.collection.sort()" :key="index">
            <a
              :href="field.href"
              v-if="
                field.name.includes('Tribunal') &&
                field.name.includes('Commerce')
              "
              >{{ field.name }}</a
            >
          </div>
          <h4>Tribunaux de première instance</h4>
          <div v-for="(field, index) in fields.collection.sort()" :key="index">
            <a
              :href="field.href"
              v-if="
                field.name.includes('Tribunal') &&
                field.name.includes('instance')
              "
              >{{ field.name }}</a
            >
          </div>
          <h4>Tribunaux du travail</h4>
          <div v-for="(field, index) in fields.collection.sort()" :key="index">
            <a
              :href="field.href"
              v-if="
                field.name.includes('Tribunal') &&
                field.name.includes('travail')
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

.top {
  background-color: #edf3f4;
}

.bottom {
  background-color: #f7f7f7;
}
</style>
