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
        <ul>
          <li v-for="(item, index) in fields.data.docs_per_type" :key="index">
            <input class="form-check-input" type="checkbox" checked />

            {{ item.type }}
          </li>
        </ul>
        <h2>Lang</h2>
        <ul>
          <li v-for="(item, index) in fields.data.docs_per_lang" :key="index">
            <input class="form-check-input" type="checkbox" checked />
            {{ item.lang }}
          </li>
        </ul>
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="card">
            <h5 class="card-header">Documents per year</h5>
            <div class="card-body">
              <BarChart
                :labels="fields.data.docs_per_year.map((a) => a.year)"
                :serie="fields.data.docs_per_year.map((a) => a.count)"
              />
            </div>
          </div>
          <div class="card-columns">
            <div class="card">
              <h5 class="card-title">Count documents per type</h5>
              <div class="card-body">
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
            </div>
            <div class="card">
              <h5 class="card-title">Count documents per lang</h5>
              <div class="card-body">
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
        </div>
      </div>
      <div class="col-md-12">
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