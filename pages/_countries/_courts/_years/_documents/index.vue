<template>
  <div class="container">
    <h1>{{ $route.params.countries }} {{ $route.params.courts }} {{ $route.params.years }} {{ $route.params.documents }}</h1>

    <Pending v-if="$fetchState.pending" />


<div v-if="api_results.content">

    <img :src="api_results.content.data.logo" alt="" width="200px">

    <div class="list-group list-group-horizontal" id="list-tab" role="tablist">
      <a v-for="link in api_results.content.links"
      class="list-group-item">
      {{ link.rel }}
    </a>
  </div>

  <code v-highlight class="javascript">
      {{ api_results.content.data }}
      {{ api_results.content.links }}
  </code>
</div>

</div>
</template>

<script>
export default {

  async fetch() {
    const api_results = await fetch(`https://ecli.openjustice.be${this.$route.fullPath}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    ).then((res) => res.json())
    this.api_results = api_results
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
