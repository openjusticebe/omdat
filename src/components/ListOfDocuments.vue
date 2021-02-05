<template>
  <div>
    <div v-if="data_fetched">
      <nav-pagination :links="fields.meta.links" />

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
      <nav-pagination :links="fields.meta.links" />
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