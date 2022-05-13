<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container text-left">
    <h1>
      <a href="">{{ current.labels['fr'] }}</a>
    </h1>
    <div class="">
        <ul class="list-inline">
            <li v-for="(field, index) in tree" :key="index" class="list-inline-item mx-3">
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
