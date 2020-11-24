<template>
  <h1>This court is {{ $route.params.court }}</h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div class="table-responsive" v-else>
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
        <tr v-for="(item, index) in fields.collection" :key="index">
          <th scope="row">
            {{ index }}
          </th>
          <td>
            {{ item.name }}
          </td>
          <td class="small"></td>
          <td>
            <small>Description du {{ item.name }}</small>
            <br />
            Link:
            <a :href="item.href">{{ item.href }}</a>
          </td>
        </tr>
      </tbody>
    </table>
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