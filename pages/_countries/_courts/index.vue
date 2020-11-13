<template>
  <div class="container">
    <h1>{{ $route.params.countries }} > {{ $route.params.courts }} </h1>

    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>

    <table class="table table-transparent" v-else>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Year of {{ $route.params.courts }}</th>
          <th scope="col">Data</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in api_results.collection" :key="index">
        <th scope="row">{{ index }}</th>
        <td>
          <nuxt-link :to="item.href">{{ item.href }}</nuxt-link>

        </td>
        <td class="small">
          <ul class="list-unstyled">
            <li>Document count: {{ Math.floor(Math.random() * 10000) }} (fake)</li>
            <li>Last updated at 2020-01-01 (fake)</li>
          </ul>
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
  async asyncData({ params }) {
    const api_results = await fetch(`https://ecli.openjustice.be/${params.countries}/${params.courts}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    ).then(res => res.json())
    return { api_results }
  },

  fetch() {
  },
  // methods: {
  //   refresh() {
  //     this.$nuxt.refresh()
  //   }
  // },
  data () {
    return {
      api_results: {}
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
