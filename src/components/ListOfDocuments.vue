<template>
  <div>
    <div v-if="data_fetched">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            v-for="(nav, index) in fields.meta.links"
            :key="index"
            :class="{ active: nav.active }"
          >
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-if="nav.label === 'pagination.previous'"
              >&laquo;</a
            >
            <a
              class="page-link"
              @click="reload(nav.url)"
              v-else-if="nav.label === 'pagination.next'"
              >&raquo;</a
            >

            <a class="page-link" @click="reload(nav.url)" v-else>{{
              nav.label
            }}</a>
          </li>
        </ul>
      </nav>
      <div class="table-responsive">
        <table class="table table-striped table-hover table-sm">
          <thead>
            <th scope="col">ECLI</th>
            <th scope="col">Lang</th>
            <th scope="col">Source</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in fields.data" :key="index">
              <th class="text-left" scope="row">
                <a :href="item.ref">{{ item.ecli }}</a>
              </th>
              <td>
                {{ item.lang }}
              </td>
              <td>
                <span v-for="(link, index) in item.links" :key="index">
                  <a
                    :href="link.href"
                    :alt="link.rel"
                    class="btn btn-primary btn-sm"
                    >{{ link.rel }} 🗂️</a
                  >
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation">
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