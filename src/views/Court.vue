<template>
  <h3>
    {{ fields.data.name_fr }}
    <small class="text-muted">{{ $route.params.court }}</small>
  </h3>
  <hr />
  <div v-if="!data_fetched">
    <loading-animation />
  </div>

  <div class="row">
    <div class="col-md">
      <h2>Count per type</h2>

      <PieChart
        :labels="fields.data.docs_per_type.map((a) => a.type)"
        :serie="fields.data.docs_per_type.map((a) => a.count)"
      />
    </div>

    <div class="col-md">
      <h2>Count per year</h2>

      <BarChart
        :labels="fields.data.docs_per_year.map((a) => a.year)"
        :serie="fields.data.docs_per_year.map((a) => a.count)"
      />
    </div>
    <div class="col-md">
      <h2>Count per lang</h2>

      <PieChart
        :labels="fields.data.docs_per_lang.map((a) => a.lang)"
        :serie="fields.data.docs_per_lang.map((a) => a.count)"
      />
    </div>

    <div class="col-md">
      <h2>Recent case law</h2>

      <div class="card">
        <div class="card-header">Stats</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Year available {{ fields.data.first_year }} -
            {{ fields.data.last_year }}
          </li>
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
          <h6 class="card-subtitle mb-2 text-muted">per type</h6>
          <PieChart
            :labels="fields.data.docs_per_type.map((a) => a.type)"
            :serie="fields.data.docs_per_type.map((a) => a.count)"
          />

          <a
            v-for="(item, index) in fields.data.docs_per_year"
            :key="index"
            :href="'/BE/' + $route.params.court + '/' + item.year"
            class="btn btn-primary btn-sm"
            role="button"
          >
            {{ item.year }}
          </a>
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