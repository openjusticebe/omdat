<template>
  <div class="card-footer" v-if="env !== null">
    <div class="text-center small">
      <a :href="env.VUE_APP_GITHUB_URL">GPLv3 License </a>
      | <a :href="env.VUE_APP_LICENSE">Source code</a>
      <br />
      Project developed with ❤️ by
      <a href="http://openjustice.be" alt="">{{ env.VUE_APP_AUTHOR }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      env: {},
    };
  },
  mounted() {
    this.env = process.env;
  },
};
</script>