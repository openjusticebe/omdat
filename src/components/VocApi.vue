<template>
  <h1>VocApi</h1>
  <li v-for="(field, index) in fields.tree" :key="index" class="col-md-5 small">
    {{ field }}
  </li>
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