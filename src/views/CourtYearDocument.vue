<template>
  <h1>This document is {{ $route.params }}</h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <img
      :src="fields.content.data.logo"
      alt="Logo of {{ $route.params.court }}"
      width="200"
      class="float-right"
    />

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
  </div>
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