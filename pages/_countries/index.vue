<template>
  <div class="">
    <h1>{{ $route.params.countries }}</h1>

    <table class="table table-transparent">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Courts and tribunals</th>
          <th scope="col">Data</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in api_results.collection" :key="index">
        <th scope="row">{{ index }}</th>
        <td>
          <nuxt-link :to="item.href">{{ item.href }}</nuxt-link>

          <ul class="list-unstyled">
            <li><strong>FR</strong> {{ item.name }}</li>
            <li><strong>NL</strong> {{ item.name }}</li>
            <li><strong>DE</strong> {{ item.name }}</li>
          </ul>


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
    const api_results = await fetch(`https://ecli.openjustice.be/${params.countries}/`,
      {
        headers: {
        'Content-Type': 'application/json'
      },
    }
  ).then(res => res.json())
  return { api_results }
},

data () {
  return {
    dataReady: false,
    api_results: {},
  }
},
// mounted: {
//   async loadUsers () {
//     let data = await this.$axios.$get('https://ecli.openjustice.be/BE/');
//     this.api_results = data
//   }
//
// },
methods: {

}

};
</script>
