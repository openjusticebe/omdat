<template>
  <div class="container">
    <h1>{{ $route.params.courts }} {{ $route.params.countries }} {{ $route.params.years }} {{ $route.params.documents }}</h1>

<div v-if="api_results.content">

    <img :src="api_results.content.data.logo" alt="" width="200px">

    <div class="list-group list-group-horizontal" id="list-tab" role="tablist">
      <a v-for="link in api_results.content.links"
      class="list-group-item">
      {{ link.rel }}
    </a>
  </div>

  <code>
    <pre>
      {{ api_results.content.data }}
      {{ api_results.content.links }}
    </pre>
  </code>
</div>

</div>
</template>

<script>
export default {

  async fetch() {
    const api_results = await fetch(`https://ecli.openjustice.be/${this.$route.params.countries}/${this.$route.params.courts}/${this.$route.params.years}/${this.$route.params.documents}/`,
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
