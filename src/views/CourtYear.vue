<template>
  <h1>This court is {{ $route.params }}</h1>

  <table class="table table-transparent">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">
          Legal Document of {{ $route.params.courts }}
          {{ $route.params.years }}
        </th>
        <th scope="col" />
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tr v-for="(item, index) in fields.collection" :key="index">
      <th scope="row" class="text-muted">
        {{ index }}
      </th>
      <td>
        <nuxt-link :to="item.href">
          {{ item.name }}
        </nuxt-link>
      </td>
      <td />
      <td>
        <ul>
          <li>
            ECLI ref<sup
              ><a
                href="https://e-justice.europa.eu/content_european_case_law_identifier_ecli-175-en.do"
                >*</a
              ></sup
            >:
            <code
              >BE:{{ $route.params.court }}:{{ $route.params.year }}:{{
                item.name
              }}</code
            >
          </li>
          <li>
            OpenJustice permalink:
            <code
              ><a :href="item.href">{{ item.href }}</a></code
            >
          </li>
        </ul>
      </td>
    </tr>
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