<template>
  <dt class="col-sm-3 text-right">{{ source[0] }}</dt>
  <dd class="col-sm-9">{{ source[1] }}</dd>
</template>

<script>
export default {
  props: {
    source: Array,
  },
  methods: {},
};
</script>