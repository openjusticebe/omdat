<template>
  <div class="container">
    <h1>{{ $route.params.countries }}</h1>
    
    <Breadcrump />

    <Pending v-if="$fetchState.pending" />

    <table v-else class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Courts and tribunals
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
        <tr v-for="(item, index) in api_results.collection.sort()" :key="index">
          <th scope="row">
            {{ index }}
          </th>
          <td>
            <nuxt-link :to="item.href">
              {{ item.href }}
            </nuxt-link>

            <ul class="list-unstyled">
              <li>
                <strong>EN</strong>
                {{ item.name }}
              </li>
              <li>
                <strong>FR</strong>
                {{ item.name }}
              </li>
              <li>
                <strong>NL</strong>
                {{ item.name }}
              </li>
              <li>
                <strong>DE</strong>
                {{ item.name }}
              </li>
            </ul>
          </td>
          <td class="small">
            <ul class="list-unstyled" />
          </td>
          <td>
            <small>Description du {{ item.name }}</small>
            Link:
            <nuxt-link :to="item.href">
              {{ item.href }}
            </nuxt-link>
          </td>
        </tr>
      </tbody>
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
 

  methods: {},
}
</script>
