<template id="">

  <div class="">

    <h2>{{ character.id }} {{ character.name }}</h2>
<button class="btn btn-primary" @click="characterId = characterId + 1">
  change user
</button>
    <ul>
      <li v-for="character in characters.results" :key="character.id">
        {{ character }}
      </li>
      {{ characters }}
    </ul>
  </div>

</template>

<script>
import gql from 'graphql-tag'

export default {

  data () {
    return {
      characterId: 1
    }
  },
  apollo: {
    characters: gql`
    query getCharacters {
      characters {
        results {
          id
          name
        }
      }
    }
    `,
    character: {
      query: gql`
      query getCharacter ($id: ID!) {
        character (id: $id) {
          id
          name
        }
      }
      `,
      variables() {
        return {
          id: this.characterId
        }
      }
    }
  }
}

</script>
