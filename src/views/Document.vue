<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <h1>
      <code>{{ fields.data.ecli }}</code>
      <small class="text-muted"> </small>
    </h1>

    {{ fields.data }}
    <img
      v-if="fields.data.court.logo_href"
      :src="fields.data.court.logo_href"
      :alt="'Logo of ' + fields.data.court.name_fr"
      width="100"
      class="float-right rounded mx-auto d-block img-thumbnail"
    />

    <span class="text-muted">{{ fields.data.court.court_href }}</span>
    <ul class="text-left">
      <li v-for="(link, index) in fields.data.links" :key="index">
        <span v-if="link.rel == 'meta'"
          ><a :href="link.href">
            {{ link.rel }}
          </a>
          permalink: <small class="text-muted">{{ link.href }}</small>
        </span>
        <span v-else>
          <a :href="env.VUE_APP_REST_API_URL + link.href">
            {{ link.rel }}
          </a>
          permalink:
          <small class="text-muted">{{
            env.VUE_APP_REST_API_URL + link.href
          }}</small>
        </span>
      </li>
    </ul>
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
      env: null,
    };
  },
  mounted() {
    this.env = process.env;
  },
};
</script>