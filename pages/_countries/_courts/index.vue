<template>
  <div class="container">
    <h1>{{ $route.params.countries }} <Separator /> {{ $route.params.courts }}</h1>

    <Breadcrump />

    <Pending v-if="$fetchState.pending" />

    <table class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Year of {{ $route.params.courts }}
          </th>
          <th scope="col">
            Data
          </th>
          <th scope="col">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in api_results.collection" :key="index">
          <th scope="row">
            {{ index }}
          </th>
          <td>
            <nuxt-link :to="item.href">
              {{ item.href }}
            </nuxt-link>
          </td>
          <td class="small">
            <ul class="list-unstyled">
              <li>
                Document count: {{ Math.floor(Math.random() * 10000) }} (fake)
              </li>
              <li>Last updated at 2020-01-01 (fake)</li>
            </ul>
          </td>
          <td>
            <small>Description du {{ item.name }}</small>
            <br>
            Link:
            <a :href="item.href">{{ item.href }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async fetch () {
    const apiResults = await fetch(
      `https://ecli.openjustice.be${this.$route.fullPath}`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    ).then(res => res.json())
    this.api_results = apiResults
  },

  data () {
    return {
      api_results: {}
    }
  },

  methods: {
    refresh () {
      this.$fetch()
    }
  }
}
</script>

<style>
.table-transparent {
  width: 100%;
  background: white;
  border: 1px;
  min-width: 100%;
  position: relative;
  opacity: 0.97;
  background: transparent;
}
</style>
