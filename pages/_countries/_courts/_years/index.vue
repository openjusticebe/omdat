<template>
  <div class="container">
    <h1>{{ $route.params.countries }} {{ $route.params.courts }}  {{ $route.params.years }}</h1>

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
    const api_results = await fetch(`https://ecli.openjustice.be/${params.countries}/${params.courts}/${params.years}`,
      {
        headers: {
        'Accept': 'application/json',
      },
    }
  ).then(res => res.json())
  return { api_results }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  },
  data () {
    return {
      // api_url: 'https://ecli.openjustice.be/',
      dataReady: false,
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
