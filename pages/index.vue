<template>
  <div class="container">
    <div class="card" style="width: 18rem;" v-for="(item, index) in api_results.collection" :key="index">


              <code v-highlight class="javascript">{{ $fetchState }}</code>

      <div class="card-body">



<button type="button" name="button" class="btn btn-primary">primary</button>
<button type="button" name="button" class="btn btn-secondary">secondary</button>

        <h5 class="card-title">{{ item.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Case laws from {{ item.name }}</h6>
        <nuxt-link :to="item.href" title="">
          <img width="200" alt="Flag of Belgium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/512px-Flag_of_Belgium.svg.png">
        </nuxt-link>

          <nuxt-link :to="item.href">{{ item.href }}</nuxt-link>

          <nuxt-link :to="item.href" class="btn btn-primary">Case laws</nuxt-link>
        </div>
      </div>


    </div>
  </template>

  <script>
  export default {
    async fetch() {
      const api_results = await fetch(`https://ecli.openjustice.be/`,
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      ).then((res) => res.json())
      this.api_results = api_results
    },

    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    },
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
