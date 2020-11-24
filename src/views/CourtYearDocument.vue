<template>
  <h1>Document is {{ $route.params.court }}</h1>

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
        :href="env.VUE_APP_REST_API_URL + link.href"
        class="list-group-item"
      >
        {{ link.rel }}
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
    return {
      env: null,
    };
  },

  mounted() {
    this.env = process.env;
  },
};
</script>