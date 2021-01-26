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
        {{ yearsArray.checked }}
        <button @click="clearCheckedYear()" class="small btn btn-sm btn-link">
          [deselect all]
        </button>
        <div
          v-for="(item, index) in fields.data.docs_per_year"
          :key="index"
          class="form-check"
        >
          <input
            type="checkbox"
            class="form-check-input"
            :id="item.year"
            v-model="item.checked"
            checked
          />
          <label
            class="form-check-label"
            :for="item.year"
            alt="{{ item.count }} documents"
          >
            {{ item.year }}
            <sup class="text-muted small">({{ item.count }})</sup>
          </label>
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
          <h5 class="card-header">Statistics</h5>
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
            </div>

            <div class="card-columns">
              <h5>Count documents per lang</h5>
              <PieChart
                :labels="fields.data.docs_per_lang.map((a) => a.lang)"
                :serie="fields.data.docs_per_lang.map((a) => a.count)"
              />
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
    return {
      yearsArray: {},
    };
  },
  methods: {
    reload(page_url) {
      if (page_url) {
        this.fetchData(page_url);
      }
    },
    clearCheckedYear() {
      this.yearsArray = this.fields.data.docs_per_year.filter(
        (x) => !x.checked
      );
    },
  },

  mounted() {
    this.env = process.env;
  },
};
</script>