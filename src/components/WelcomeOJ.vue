<template>
  <div class="row">
    <div v-if="!data_fetched" class="text-center">loading</div>
    <div class="col-12" v-else>
      <h1>{{ msg }}</h1>
      {{ page_url }}
      {{ fields }}
      <div v-for="(field, index) in fields" :key="index">
        {{ field.collection }}
      </div>
      {{}}
      <ul>
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
          placeholder="Search in documents"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            Search <i class="fa fa-search"></i>
          </button>
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
    msg: String,
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
a {
  color: #42b983;
}

.top {
  background-color: #edf3f4;
}

.bottom {
  background-color: #f7f7f7;
}
</style>
