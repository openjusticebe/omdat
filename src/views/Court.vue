<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container">
    <h1>
      {{ fields.data.name }}
      <small class="text-muted">{{ $route.params.court }}</small>
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="card">
            <h5 class="card-header">Documents per year</h5>
            <div class="card-body">
              <BarChart
                :labels="fields.data.docs_per_year.map((a) => a.year)"
                :serie="fields.data.docs_per_year.map((a) => a.count)"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Year available {{ fields.data.first_year }} -
                  {{ fields.data.last_year }}
                </li>
                <li class="list-group-item">
                  <span
                    v-for="(item, index) in fields.data.docs_per_year"
                    :key="index"
                  >
                    <template v-if="index > 0"> — </template>

                    <span class="text-primary">{{ item.year }}</span>
                  </span>
                </li>
              </ul>
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

        <h3>Browse</h3>
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