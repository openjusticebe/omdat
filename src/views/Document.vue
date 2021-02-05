<template>
  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div v-else class="container">
    <h1>
      {{ fields.data.type_identifier }}
      <small class="text-muted">&laquo;</small>
      {{ fields.data.court.name }}
      <em class="text-muted">({{ fields.data.lang }})</em>
    </h1>
    <div class="card">
      <h5 class="card-header text-right">
        <code>{{ fields.data.ecli }}</code>
        <br />
        <small class="text-muted"
          ><a :href="fields.data.link"
            ><small class="text-muted">{{ fields.data.link }}</small>
          </a></small
        >
      </h5>
      <div class="card-body text-left">
        <div class="row">
          <div class="col-md-8">
            <dl
              v-for="(metadata, index) in fields.data.meta"
              :key="index"
              class="row"
            >
              <dt class="col-sm-3">{{ metadata[0] ?? "" }}</dt>
              <dd class="col-sm-9">{{ metadata[1] ?? "" }}</dd>
            </dl>

            <div>
              <vue3-markdown-it :source="fields.data.text" />
            </div>
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

<style>
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
      env: null,
    };
  },
  mounted() {
    this.env = process.env;
  },
};
</script>