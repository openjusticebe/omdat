<template>
  <div class="container">
    <h1>
      {{ $route.params.countries }} <Separator /> {{ $route.params.courts }}
      {{ $route.params.years }} <Separator /> {{ $route.params.documents }}
    </h1>

    <Breadcrump />

    <Pending v-if="$fetchState.pending" />

    <div v-if="api_results.content">
      <img :src="api_results.content.data.logo" alt="" width="200px">

      <div
        id="list-tab"
        class="list-group list-group-horizontal"
        role="tablist"
      >
        <a
          v-for="(link, index) in api_results.content.links"
          :key="index"
          class="list-group-item"
        >
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
import Breadcrump from '../../../../../components/Breadcrump.vue'
export default {
  components: { Breadcrump },
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
    console.log(process.env.BASE_URL)
    this.api_results = apiResults
  },
}
</script>

<style>

</style>
