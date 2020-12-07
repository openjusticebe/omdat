<template>
  <h1>This court is {{ $route.params.court }} {{ fields.data.name_fr }}</h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>

  <div class="row">
    <div class="col-md">
      <h2>Per Type</h2>

      <PieChart
        :labels="fields.data.docs_per_type.map((a) => a.type)"
        :serie="fields.data.docs_per_type.map((a) => a.count)"
      />
    </div>

    <div class="col-md">
      <h2>Per Year</h2>

      <BarChart
        :labels="fields.data.docs_per_year.map((a) => a.year)"
        :serie="fields.data.docs_per_year.map((a) => a.count)"
      />
    </div>
    <div class="col-md">
      <h2>Per Lang</h2>

      <PieChart
        :labels="fields.data.docs_per_lang.map((a) => a.lang)"
        :serie="fields.data.docs_per_lang.map((a) => a.count)"
      />
    </div>

    <div class="col-md">
      <h2>Recent</h2>
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Year of {{ $route.params.courts }}</th>
            <th scope="col">Data</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in fields.data.docs_per_year" :key="index">
            <th scope="row">
              {{ index }}
            </th>
            <td>
              {{ item.year }}
            </td>
            <td class="small"></td>
            <td>
              <small>Description du {{ item.name }}</small>
              <br />
              Link:
              <a :href="'/BE/' + $route.params.court + '/' + item.year">
                {{ "BE/" + $route.params.court + "/" + item.year }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
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