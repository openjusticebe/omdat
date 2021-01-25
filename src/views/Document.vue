<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container">
    <h1>
      {{ fields.data.type_identifier }}
      <em class="text-muted">&laquo;</em>
      {{ fields.data.court.name }}
      <em class="text-muted">({{ fields.data.lang }})</em>
    </h1>
    <div class="card">
      <h5 class="card-header">
        <code>{{ fields.data.ecli }}</code>
        <small class="text-muted"> </small>
      </h5>
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <dl class="text-left">
              <dt>Court</dt>
              <dd>
                <a :href="fields.data.court.ref">{{
                  fields.data.court.name
                }}</a>
              </dd>
              <dt>Year</dt>
              <dd>{{ fields.data.year }}</dd>
              <dt>Ref</dt>
              <dd>{{ fields.data.type_identifier }}</dd>
              <dt>Identifier</dt>
              <dd>{{ fields.data.identifier }}</dd>
              <dt>Type</dt>
              <dd>{{ fields.data.type }}</dd>
              <dt>Lang</dt>
              <dd>{{ fields.data.lang }}</dd>
            </dl>

            <ul class="text-left">
              <li v-for="(link, index) in fields.data.links" :key="index">
                <span v-if="link.rel == 'meta'"
                  ><a :href="link.href">
                    {{ link.rel }}
                  </a>
                  permalink: <small class="text-muted">{{ link.href }}</small>
                </span>
                <span v-else>
                  <a :href="link.href">
                    {{ link.rel }}
                  </a>
                  permalink:
                  <small class="text-muted">{{ link.href }}</small>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 8rem">
              <a :href="fields.data.court.ref">
                <img
                  class="card-img-top"
                  v-if="fields.data.court.logo_href"
                  :src="fields.data.court.logo_href"
                  :alt="'Logo of ' + fields.data.court.name_fr"
                  width="100"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">{{ fields.data.court.name }}</h5>
                <p class="card-text">
                  <span class="text-muted">{{
                    fields.data.court.court_href
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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