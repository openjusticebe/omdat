<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <h1>
      {{ fields.data.name }}
      <small class="text-muted">{{ $route.params.court }}</small>
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <ListOfDocuments
          :page_url="
            env.VUE_APP_REST_API_URL +
            '/BE/' +
            $route.params.court +
            '/docsRecent'
          "
        />
      </div>

      <div class="col-md-4">
        <div class="card">
          <h5 class="card-title">Stats</h5>
          <h6 class="card-subtitle mb-2 text-muted">per year</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Type : {{ fields.data.docs_per_type.map((a) => a.type) }}
            </li>
            <li class="list-group-item">
              Count of document on Omdat
              {{ fields.data.count_documents }}
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Count documents</h5>
            <h6 class="card-subtitle mb-2 text-muted">per year</h6>

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

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Count documents</h5>
            <h6 class="card-subtitle mb-2 text-muted">per type</h6>

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
          <div class="card-body">
            <h5 class="card-title">Count documents</h5>
            <h6 class="card-subtitle mb-2 text-muted">per lang</h6>

            <h2>Count per lang</h2>

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