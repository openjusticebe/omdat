<template>
  <h1>This court is {{ $route.params.court }}</h1>
  {{ $route.params }}

  {{ fields }}
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