<template>
  <h1>This court is {{ $route.params.court }}</h1>
  {{ $route.params }}

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <table class="table table-transparent" v-else>
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
          {{ item.href }}
        </td>
        <td class="small">
          <ul class="list-unstyled">
            <li>
              Document count: {{ Math.floor(Math.random() * 10000) }} (fake)
            </li>
            <li>Last updated at 2020-01-01 (fake)</li>
          </ul>
        </td>
        <td>
          <small>Description du {{ item.name }}</small>
          <br />
          Link:
          <a :href="item.href">{{ item.href }}</a>
        </td>
      </tr>
    </tbody>
  </table>
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