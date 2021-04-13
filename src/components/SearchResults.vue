<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else>
    <small class="text-muted"
      >{{ fields.hits.hits.length }} results {{ fields.took }} milliseconds
    </small>

    <div v-if="fields.hits.total > 0">
      <ul
        v-for="(hit, index) in fields.hits.hits"
        :key="index"
        class="text-left list-unstyled"
      >
        <li>
          <h4>
            <a :href="hit._source.ref">{{ hit._source.ecli }}</a>
            - <code class="small">Score: {{ hit._score }}</code>
          </h4>

          <span v-for="(light, idx) in hit.highlight.text" :key="idx">
            <template v-if="idx > 0"> — </template>
            <span v-html="light" class="small"></span>
          </span>
        </li>
      </ul>
    </div>
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