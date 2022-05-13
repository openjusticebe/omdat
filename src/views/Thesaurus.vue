<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container text-left">
    <h3>
    <span v-if="top"><a v-bind:href="`/nav/` + encodeURIComponent(top.iri)" class="text-capitalize">{{ displayLabel(top) }}</a> ... </span>
    <span v-if="parent"><a v-bind:href="`/nav/` + encodeURIComponent(parent.iri)" class="text-capitalize">{{ displayLabel(parent) }}</a></span>
    </h3>

    <h1 class="text-capitalize">
      {{ displayLabel(current) }}
    </h1>
    <a v-bind:href="current.iri" class="text-small text-muted">definition</a>
    <div class="">
        <ul class="list">
            <li v-for="(field, index) in tree" :key="index" class="list-item mx-3">
              <a v-bind:href="`/nav/` + encodeURIComponent(field.iri)" class="font-weight-bold text-capitalize">{{ field.labels['fr'].toLowerCase() }}</a>
            </li>
         </ul>
    </div>
  </div>
</template>
<script>
import getVocMixin from "../mixins/getVocMixin";

export default {
  mixins: [getVocMixin],

  props: {
  },
  methods: {
    displayLabel(obj) {
        return obj.labels['fr'].toLowerCase();
    },
    updateReqParams() {
      if (this.reqParams.length === 0) {
        this.reqParams = {
          year: this.fields.data.docs_per_year.map((a) => a.year),
          type: this.fields.data.docs_per_type.map((a) => a.type),
          lang: this.fields.data.docs_per_lang.map((a) => a.lang),
        };
      }
    },
  },
};
</script>
