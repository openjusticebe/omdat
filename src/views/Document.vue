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

    <div class="row small text-muted">
      <div class="col">
        <ul class="list-unstyled">
          <li v-for="(name, key) in fields.data.court.name_i18ns" :key="key">
            <span class="text-uppercase"
              >{{ key.replace("name_", "") }} :
            </span>
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
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
          <div class="col-md-10">
            <div
              v-for="(metadata, index) in fields.data.meta"
              :key="index"
              class="row"
            >
              <meta-data
                :source="metadata"
                v-if="
                  metadata[0] != null &&
                  metadata[0] != '' &&
                  metadata[1] != null &&
                  metadata[1] != '' &&
                  metadata[0] != 'Raadplegingen:' &&
                  metadata[0] != 'Consultations:' &&
                  metadata[0] != 'pdf' &&
                  metadata[0] != 'fiche' &&
                  metadata[0] != 'Versie(s):' &&
                  metadata[0] != 'Version(s):'
                "
              />
              <div v-if="metadata[0] === 'fiche' && metadata[1] != null">
                <h4>{{ $t("resume") }}</h4>
                <blockquote class="blockquote mb-0">
                  <p>
                    {{ metadata[1] }}
                  </p>
                  <footer class="blockquote-footer text-right">
                    {{ fields.data.court.name }} —
                    <cite title="ECLI">
                      {{ fields.data.ecli }}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="row">
              <dt class="col-sm-3 text-right">API link</dt>
              <dd class="col-sm-9">
                <a :href="fields.data.self_link" target="_blank">
                  {{ fields.data.self_link }}
                </a>
              </dd>
            </div>
            <div>
              <hr />
              <div v-if="anonymised_view">
                <button
                  class="btn btn-warning btn-sm float-right"
                  @click="anonymised_view = !anonymised_view"
                >
                  {{ $t("full_text_view") }}
                </button>
                <h3>{{ $t("full_text") }}</h3>
                <vue3-markdown-it :source="formatText(fields.data.text)" />
              </div>
              <div v-else>
                <button
                  class="btn btn-primary btn-sm float-right"
                  @click="anonymised_view = !anonymised_view"
                >
                  {{ $t("anonymized_view") }}
                </button>
                <h3>{{ $t("anonymized_view") }}</h3>
                <vue3-markdown-it
                  :source="formatText(fields.data.text_anonymized)"
                />
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="card" style="width: 8rem">
              <a :href="fields.data.court.ref">
                <img
                  class="card-img-top"
                  :src="fields.data.court.logo_href"
                  :alt="'Logo of ' + fields.data.court.name"
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

            <div
              v-for="(metadata, index) in fields.data.meta"
              :key="index"
              class="row"
            >
              <div v-if="metadata[0] === 'pdf' && metadata[1] != null">
                <a
                  :href="'https://juportal.be' + metadata[1]"
                  class="btn btn-success btn-sm"
                  target="_blank"
                >
                  {{ $t("original_document") }}
                </a>
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
      anonymised_view: false,
    };
  },
  methods: {
    formatText(text) {
      return text;
      // let para = "1. ";
      // return text.replace(para, "## " + para);
    },
  },
  mounted() {
    this.env = process.env;
  },
};
</script>