<template id="">

  <div class="">

    <h2>{{ country.id }} {{ country.name }}</h2>
    <button class="btn btn-primary" @click="countryId = countryId + 1">
      change countryId
    </button>

  </div>

</template>

<script>
import gql from 'graphql-tag'

export default {

  data () {
    return {
      countryId: 1
    }
  },
  apollo: {
    countries: gql`
    query getCountries {
      countries {
        results {
          id
        }
      }
    }
    `,
    country: {
      query: gql`
      query getCountry ($id: ID!) {
        country (id: $id) {
          id
        }
      }
      `,
      variables() {
        return {
          id: this.countryId
        }
      }
    }
  }
}

</script>
