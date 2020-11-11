<template>
  <div class="container">
    <code>
      {{ api_results.status.api_version }}
      {{ api_results.status.api_counter }}
      {{ api_results.links }}
      {{ api_results.status.uptime }}

    </code>
    <table class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Court</th>
          <th scope="col">Data</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in api_results.collection" :key="index">
        <th scope="row">{{ index }}</th>
        <td>

          <ul class="list-unstyled">
            <li><strong>FR</strong> {{ item.name }}</li>
            <li><strong>NL</strong> {{ item.name }}</li>
            <li><strong>DE</strong> {{ item.name }}</li>
          </ul>

          <button type="button" name="button" class="btn btn-sm btn-info">Select</button>
  <!-- <NuxtLink :to="item.href">Home page</NuxtLink> -->

          <!-- <Nuxt :nuxt-child-key="someKey" /> -->

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

  async asyncData ({ $axios }) {
    const { data } = await $axios.get('')
    return { api_results: data }
  },

  data () {
    return {
      // api_url: 'https://ecli.openjustice.be/ECLI/',
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
