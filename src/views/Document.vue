<template>
  <h1>
    <code
      >ECLI:BE:{{ $route.params.court }}:{{ $route.params.year }}:{{
        $route.params.document
      }}</code
    >
    <small class="text-muted">
      <em>Document</em>
    </small>
  </h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <img
      :src="fields.content.data.logo"
      alt="Logo of {{ $route.params.court }}"
      width="100"
      class="float-right rounded mx-auto d-block img-thumbnail"
    />

    <span class="text-muted">{{ fields.content.data.website }}</span>
    <ul class="text-left">
      <li v-for="(link, index) in fields.content.links" :key="index">
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