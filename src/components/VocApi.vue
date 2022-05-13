<template>
  <div class="col-12 mt-3">
      <h3>🧭 {{ $t("arborescence_title") }}</h3>
      <hr />
      <div class="">
          <ul class="list-inline">
              <li v-for="(field, index) in fields.tree" :key="index" class="list-inline-item mx-3">
                <a v-bind:href="`/nav/` + field.iri" class="font-weight-bold text-capitalize">{{ field.labels['fr'].toLowerCase() }}</a>
              </li>
           </ul>
        </div>
    </div>
</template>

<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],
  props: {
    page_url: Array,
  },
  methods: {},
};
</script>
