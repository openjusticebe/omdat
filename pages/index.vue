<template>
  <div class="container">
    <div class="card" style="width: 18rem;" v-for="(item, index) in api_results.collection" :key="index">
      <div class="card-body">
        <h5 class="card-title">Belgim</h5>
        <h6 class="card-subtitle mb-2 text-muted">Case laws from Belgium</h6>
        <nuxt-link :to="item.href" title="Dbenbenn and others, Public domain, via Wikimedia Commons">
          <img width="200" alt="Flag of Belgium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/512px-Flag_of_Belgium.svg.png"></nuxt-link>

          <nuxt-link :to="item.href">{{ item.href }}</nuxt-link>

          <a href="/BE" class="btn btn-primary">Case laws</a>
        </div>
      </div>


    </div>
  </template>

  <script>
  export default {

    async asyncData({ params }) {
      const api_results = await fetch(`https://ecli.openjustice.be/`,
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      ).then(res => res.json())
      dataReady: true;
      return { api_results }
    },

    // async asyncData ({ $axios }) {
    //   const { data } = await $axios.get('')
    //   return { api_results: data }
    // },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    },
    data () {
      return {
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
