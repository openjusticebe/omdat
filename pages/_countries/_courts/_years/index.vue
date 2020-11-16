<template>
  <div class="container">
    <h1>{{ $route.params.countries }} <span class="text-muted">></span> {{ $route.params.courts }} <span class="text-muted">></span> {{ $route.params.years }}</h1>

    <Pending v-if="$fetchState.pending" />

    <table class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Legal Document of {{ $route.params.courts }} {{ $route.params.years }}</th>
          <th scope="col">Data</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in api_results.collection" :key="index">
        <th scope="row">{{ index }}</th>
        <td>
          <nuxt-link :to="item.href">{{ item.href }}</nuxt-link>

        </td>
        <td>

        </td>
        <td>

          <small>Description du {{ item.name }}</small>
          <br>
          Link: <a :href="item.href">{{ item.href }}</a>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  async fetch () {
    const apiResults = await fetch(`https://ecli.openjustice.be${this.$route.fullPath}`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    ).then((res) => res.json())
    this.api_results = apiResults
  },
  data () {
    return {
      api_results: {}
    }
  },
  methods: {
    refresh () {
      this.$nuxt.refresh()
    }
  }

}
</script>

<style>

.table-transparent {
  width: 100%;
  background-color: #D8F0DA;
  border: 1px;
  min-width: 100%;
  position: relative;
  opacity: 0.97;
  background: transparent;
}
</style>
