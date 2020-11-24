<template>
  <h1>This document is {{ $route.params }}</h1>
  <pre>{{ fields.content.data.logo }}</pre>

  <img :src="fields.content.data.logo" alt="" width="200px" />

  <div id="list-tab" class="list-group list-group-horizontal" role="tablist">
    <a
      v-for="(link, index) in fields.content.links"
      :key="index"
      class="list-group-item"
    >
      {{ link.rel }} {{ link }}
    </a>
  </div>

  <code class="javascript">
    {{ fields.content.data }}
    {{ fields.content.links }}
  </code>
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