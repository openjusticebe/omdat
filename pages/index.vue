<template>
  <div class="container">
    <Breadcrump />
  
    <div
      v-for="(item, index) in api_results.collection"
      :key="index"
      class="card"
    >
      <div class="media">
        <img          
          alt="Flag of Belgium"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/512px-Flag_of_Belgium.svg.png"
          class="mr-3" 
          width="100"
        >
        <div class="media-body">
          <h5 class="mt-0">
            {{ item.name }}
          </h5>
          Case laws from {{ item.name }}
        </div>
        <nuxt-link :to="item.href" title="" class="btn btn-primary">
          Case laws of {{ item.name }}
        </nuxt-link>
      </div>


      <div class="card-body" />
    </div>
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
    const ApiResults = await fetch('https://ecli.openjustice.be/', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
    this.api_results = ApiResults
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
