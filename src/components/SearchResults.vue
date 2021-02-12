<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <div v-if="fields.hits.total > 0">
      <ul
        v-for="(hit, index) in fields.hits.hits"
        :key="index"
        class="text-left"
      >
        <li>
          <h4>
            <a :href="hit._source.ref">{{ hit._source.ecli }}</a>
            - <code class="small">{{ hit._score }}</code>
            {{ hit._source.year }}
          </h4>

          <div v-for="(light, index2) in hit.highlight.text" :key="index2">
            <span v-html="light" class="small"></span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Sorry. No result.</div>
  </div>
</template>

<style>
.highlightText {
  background: yellow;
}
</style>

<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],

  props: {
    page_url: String,
  },
  data() {
    return {
      fields: {},
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