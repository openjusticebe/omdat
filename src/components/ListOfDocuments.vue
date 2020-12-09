<template>
  <div>
    <div class="card" v-if="data_fetched">
      <div class="card-header">Recent case law</div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            v-for="(nav, index) in fields.meta.links"
            :key="index"
          >
            <a class="page-link" @click="reload(nav.url)">{{ nav.label }}</a>
          </li>
        </ul>
      </nav>
      <table class="table">
        <thead>
          <th>Num</th>
          <th>Type</th>
          <th>Lang</th>
          <th>ECLI</th>
          <th>Links</th>
          <th>Source</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in fields.data" :key="index">
            <td>{{ item.num }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.lang }}</td>
            <td>
              <code>{{ item.ecli }}</code>
              <br />
              <a href="">{{ item }}</a>
            </td>
            <td>
              <div v-for="(link, index) in item.links" :key="index">
                <dt>
                  <code>{{ link.rel }}</code>
                </dt>
                <dd>
                  <a :href="link.href">{{ link.href }}</a>
                </dd>
              </div>
            </td>
            <td>
              {{ item.src }}
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            v-for="(nav, index) in fields.meta.links"
            :key="index"
          >
            <a class="page-link" @click="reload(nav.url)">{{ nav.label }}</a>
          </li>
        </ul>
      </nav>
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
    return {
      fields: {
        data: null,
      },
    };
  },

  methods: {
    reload(page_url) {
      if (page_url) {
        this.fetchData(page_url);
      }
    },
  },
};
</script>