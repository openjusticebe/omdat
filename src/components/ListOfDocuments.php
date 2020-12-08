<template>
    <div class="col-md">
      <h2>Recent case law</h2>
      <div v-if="!data_fetched">
    <loading-animation />
  </div>
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

        <tr v-for="(item, index) in fields.data" :key="index">
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
                  item.type
                }}.{{ item.num }}</code
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

      </div>

</div>
</template>
<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],

  props: {
    page_url: String,
  },
  data() {
    return {};
  },
};
</script>