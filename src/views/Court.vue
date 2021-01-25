<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container text-left">
    <h1>
      {{ fields.data.name }}
      <small class="text-muted">
        {{ $route.params.court }}
      </small>
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-2">
        <h2>Year</h2>
        <div
          v-for="(item, index) in fields.data.docs_per_year"
          :key="index"
          class="form-check"
        >
          <input
            type="checkbox"
            class="form-check-input"
            :id="item.year"
            checked
          />
          <label class="form-check-label" :for="item.year">
            {{ item.year }}</label
          >
        </div>

        <h2>Type</h2>
        <div
          v-for="(item, index) in fields.data.docs_per_type"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="item.type"
            checked
          />
          <label class="form-check-label" :for="item.type">
            {{ item.type }}</label
          >
        </div>

        <h2>Lang</h2>
        <div
          v-for="(item, index) in fields.data.docs_per_lang"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="item.lang"
            checked
          />
          <label class="form-check-label" :for="item.lang">
            {{ item.lang }}</label
          >
        </div>
      </div>
      <div class="col-md-10">
        <div class="card">
          <h5 class="card-header">Documents per year</h5>
          <div class="card-body">
            <BarChart
              :labels="fields.data.docs_per_year.map((a) => a.year)"
              :serie="fields.data.docs_per_year.map((a) => a.count)"
            />

            <div class="card-columns">
              <h5>Count documents per type</h5>
              <PieChart
                :labels="fields.data.docs_per_type.map((a) => a.type)"
                :serie="fields.data.docs_per_type.map((a) => a.count)"
              />

              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Type : {{ fields.data.docs_per_type.map((a) => a.type) }}
                </li>
              </ul>
            </div>

            <div class="card-columns">
              <h5>Count documents per lang</h5>
              <PieChart
                :labels="fields.data.docs_per_lang.map((a) => a.lang)"
                :serie="fields.data.docs_per_lang.map((a) => a.count)"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Type : {{ fields.data.docs_per_lang.map((a) => a.lang) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ListOfDocuments
          :page_url="
            env.VUE_APP_REST_API_URL +
            '/BE/' +
            $route.params.court +
            '/docsRecent'
          "
        />
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
  methods: {
    reload(page_url) {
      if (page_url) {
        this.fetchData(page_url);
      }
    },
  },

  mounted() {
    this.env = process.env;
  },
};
</script>