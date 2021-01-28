<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container text-left">
    <h1>
      <a href="">{{ fields.data.name }}</a>
      <small class="text-muted">
        » {{ $route.params.court }} — {{ fields.data.category.label }}</small
      >
    </h1>

    <div class="row small text-muted">
      <div class="col">
        <ul class="list-unstyled">
          <li
            v-for="(label, key) in fields.data.category.label_i18ns"
            :key="key"
          >
            <span class="text-uppercase"
              >{{ key.replace("label_", "") }} :
            </span>
            <span class="font-weight-bolder">{{ label }}</span>

            <span v-for="(name, key2) in fields.data.name_i18ns" :key="key2">
              <span
                class="font-weight-bolder"
                v-if="key.replace('label_', '') == key2.replace('name_', '')"
              >
                » {{ name }}</span
              >
            </span>
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <div class="row">
      <div class="col-md-2">
        <h2>Year</h2>
        <button class="small btn btn-sm btn-link" @click="reqParams.year = []">
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
            :value="item.year"
            :id="item.year"
            v-model="reqParams.year"
            @click="updateReqParams()"
            checked
          />
          <label
            class="form-check-label"
            :for="item.year"
            alt="{{ item.count }} documents"
          >
            <strong>{{ item.year }}</strong>
            <sup class="text-muted small"> ({{ item.count }})</sup>
          </label>
        </div>

        <h2>Type</h2>
        <button class="small btn btn-sm btn-link" @click="reqParams.type = []">
          [deselect all]
        </button>
        <div
          v-for="(item, index) in fields.data.docs_per_type"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="item.type"
            :id="item.type"
            v-model="reqParams.type"
            @click="updateReqParams()"
            checked
          />
          <label class="form-check-label" :for="item.type">
            <strong>{{ item.type }}</strong>
          </label>
        </div>

        <h2>Lang</h2>
        <button class="small btn btn-sm btn-link" @click="reqParams.lang = []">
          [deselect all]
        </button>
        <div
          v-for="(item, index) in fields.data.docs_per_lang"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="item.lang"
            :id="item.lang"
            v-model="reqParams.lang"
            @click="updateReqParams()"
            checked
          />
          <label class="form-check-label" :for="item.lang">
            <strong>{{ item.lang }}</strong>
          </label>
        </div>
      </div>

      <div class="col-md-10">
        <div class="card" v-if="reqParams.length === 0">
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
        <div v-else>
          <samp>{{ reqParams }}</samp>
        </div>
        <ListOfDocuments :page_url="page_url_list_doc" />
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
      reqParams: [],
      page_url_list_doc: String,
    };
  },
  methods: {
    updateReqParams() {
      if (this.reqParams.length === 0) {
        this.reqParams = {
          year: this.fields.data.docs_per_year.map((a) => a.year),
          type: this.fields.data.docs_per_type.map((a) => a.type),
          lang: this.fields.data.docs_per_lang.map((a) => a.lang),
        };
      }
    },
    reload(page_url) {
      if (page_url) {
        this.fetchData(page_url);
      }
    },
    // clearCheckedYear() {
    //   this.yearsArray = this.fields.data.docs_per_year.filter(
    //     (x) => !x.checked
    //   );
    // },
  },

  mounted() {
    this.env = process.env;
    this.page_url_list_doc =
      this.env.VUE_APP_REST_API_URL +
      "/BE/" +
      this.$route.params.court +
      "/docsRecent";
  },
};
</script>