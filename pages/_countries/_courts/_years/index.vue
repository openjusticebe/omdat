<template>
  <div class="container">
    <h1>
      {{ $route.params.countries }}
      <Separator />
      {{ $route.params.courts }}
      <Separator />
      {{ $route.params.years }}
    </h1>
    <Breadcrump />

    <Pending v-if="$fetchState.pending" />

    <table class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Legal Document of {{ $route.params.courts }}
            {{ $route.params.years }}
          </th>
          <th scope="col" />
          <th scope="col">
            Description
          </th>
        </tr>
      </thead>
      <tr v-for="(item, index) in api_results.collection" :key="index">
        <th scope="row" class="text-muted">
          {{ index }}
        </th>
        <td>
          <nuxt-link :to="item.href">
            {{ item.name }}
          </nuxt-link>
        </td>
        <td />
        <td>
          <ul>
            <li>
              ECLI ref<sup><a href="https://e-justice.europa.eu/content_european_case_law_identifier_ecli-175-en.do">*</a></sup>: <code>{{ $route.params.countries }}:{{ $route.params.courts }}:{{ $route.params.years }}:{{ item.name }}</code>
            </li>
            <li>OpenJustice permalink: <code><a :href="item.href">{{ item.href }}</a></code></li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_results: {},
    }
  },
  
  async fetch() {
    const apiResults = await fetch(
      `https://ecli.openjustice.be${this.$route.fullPath}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then((res) => res.json())
    this.api_results = apiResults
  },
      activated() {
      // Call fetch again if last fetch more than 3000 secs ago
      if (this.$fetchState.timestamp <= Date.now() - 3000000) {
        this.$fetch()
      }
    },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style>
.table-transparent {
  width: 100%;
  background-color: #d8f0da;
  border: 1px;
  min-width: 100%;
  position: relative;
  opacity: 0.97;
  background: transparent;
}
</style>
