<template>
  <div>
    <div class="card" v-if="data_fetched">
      <h5 class="card-header">Recent case law</h5>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            v-for="(nav, index) in fields.meta.links"
            :key="index"
          >
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-if="nav.label === 'pagination.previous'"
              >Previous</a
            >
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-else-if="nav.label === 'pagination.next'"
              >Next</a
            >
            <a class="page-link" @click="reload(nav.url)" v-else>{{
              nav.label
            }}</a>
          </li>
        </ul>
      </nav>
      <table class="table small">
        <thead>
          <th>Ref</th>
          <th>Source</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in fields.data" :key="index">
            <td class="text-left">
              <dl>
                <dt>ECLI</dt>
                <dd>
                  <code>{{ item.ecli }}</code>
                </dd>
                <dt>Reference</dt>
                <dd>{{ item.type_num }}</dd>
                <dt>Type</dt>
                <dd>{{ item.type }}</dd>
                <dt>Lang</dt>
                <dd>{{ item.lang }}</dd>
                <dt>Link</dt>
                <dd>
                  <a :href="item.ref">{{ item.ecli }}</a>
                </dd>
              </dl>
            </td>
            <td>
              {{ item.src }}
              <dl v-for="(link, index) in item.links" :key="index">
                <dt>
                  <code>{{ link.rel }}</code>
                </dt>
                <dd>
                  <a :href="link.href">{{ link.href }}</a>
                </dd>
              </dl>
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
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-if="nav.label === 'pagination.previous'"
              >Previous</a
            >
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-else-if="nav.label === 'pagination.next'"
              >Next</a
            >
            <a class="page-link" @click="reload(nav.url)" v-else>{{
              nav.label
            }}</a>
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