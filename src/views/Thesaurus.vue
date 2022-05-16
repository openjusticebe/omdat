<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container">
    <div>
      <voc-api
        v-if="top"
        page_url="https://voc.openjustice.lltl.be/nav/prout"
        :active="top.iri"
      />
      <voc-api
        v-else
        page_url="https://voc.openjustice.lltl.be/nav/prout"
        active=""
      />
    </div>

    <hr />
    <h4 class="text-muted">
      <span v-if="top"
        ><a
          :href="`/nav/` + encodeURIComponent(top.iri)"
          class="text-capitalize text-muted"
          >{{ displayLabel(top) }}</a
        >
        ...
      </span>
      <span v-if="parent"
        ><a
          :href="`/nav/` + encodeURIComponent(parent.iri)"
          class="text-capitalize text-muted"
          >{{ displayLabel(parent) }}</a
        ></span
      >
    </h4>

    <h1 class="text-capitalize">
      {{ displayLabel(current) }}
    </h1>
    <a :href="current.iri" class="text-small text-muted">Definition</a>
    <div class="col-12 text-left d-flex justify-content-center">
      <ul class="list col-5">
        <li v-for="(field, index) in tree" :key="index" class="list-item mx-3">
          <a
            :href="`/nav/` + encodeURIComponent(field.iri)"
            class="font-weight-bold text-capitalize"
            >{{ field.labels["fr"].toLowerCase() }}</a
          >
        </li>
      </ul>
    </div>
    <div>
        <ul>
            <li v-for="(field, index) in documents" :key="index" class="list-inline-item mx-3">
            <a :href="'/'+docLink(field)">{{field}}</a>
            </li>
        </ul>
    </div>

  </div>
</template>
<script>
import getVocMixin from "../mixins/getVocMixin";

export default {
  mixins: [getVocMixin],

  props: {},
  methods: {
    displayLabel(obj) {
        return obj.labels['fr'].toLowerCase();
    },
    docLink(s) {
        return s.substr(s.indexOf(':') + 1).replaceAll(':','/')
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
