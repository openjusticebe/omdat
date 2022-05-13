<template>
  <div class="col-12">
      <h3>🧭 {{ $t("arborescence_title") }}</h3>
      <hr />
      <div class="navbar">
          <ul class="navbar-nav navbar-fill w-100">
              <li v-for="(field, index) in fields.tree" :key="index" class="nav-item">
                <a href="{{ field.iri }}" class="nav-link">{{ field.labels['fr'] }}</a>
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
