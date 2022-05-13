<template>
  <div v-if="!data_fetched">loading ...</div>
  <div class="col-12" v-else>
    <h3>📔 Voc Api</h3>
    <hr />
    <span
      v-for="(field, index) in fields.tree"
      :key="index"
      class="col-md-5 small"
    >
      {{ field.labels.fr
      }}<sup><a :href="field.iri" target="_blank">⚓︎</a></sup>
    </span>
  </div>
</template>

<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],
  props: {
    page_url: Array,
  },
  methods: {},
};
</script>