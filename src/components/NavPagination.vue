<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        v-for="(nav, index) in links"
        :key="index"
        :class="{ active: nav.active }"
      >
        <a
          class="page-link"
          @click="reload(nav.url)"
          v-if="nav.label === 'pagination.previous'"
          >&laquo;</a
        >
        <a
          class="page-link"
          @click="reload(nav.url)"
          v-else-if="nav.label === 'pagination.next'"
          >&raquo;</a
        >

        <a class="page-link" @click="reload(nav.url)" v-else>{{ nav.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {},
  },
  methods: {
    reload(page_url) {
      if (page_url) {
        this.$parent.reload(page_url);
      }
    },
  },
};
</script>