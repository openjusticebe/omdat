<template>
  <h1>
    {{ $route.params.court }} <small>{{ $route.params.year }}</small>
  </h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <table class="table table-transparent" v-else>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">
          Document {{ $route.params.court }}
          {{ $route.params.year }}
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
        <ul class="list-unstyled">
          <li>
            ECLI ref<sup
              ><a
                href="https://e-justice.europa.eu/content_european_case_law_identifier_ecli-175-en.do"
                >*</a
              ></sup
            >:
            <code
              >ECLI:BE:{{ $route.params.court }}:{{ $route.params.year }}:{{
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