<template>
  <div>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ $i18n.locale }}
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item btn disabled small"
          ><strong>{{ $i18n.locale }}</strong></a
        >
        <div class="dropdown-divider"></div>

        <a
          class="dropdown-item"
          v-for="(lang, i) in langs"
          :key="`lang-${i}`"
          :value="lang"
          @click="setLang(lang)"
        >
          {{ lang }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { langs: ["en", "fr", "nl", "de"] };
  },
  methods: {
    setLang(lang) {
      localStorage.setItem("locale", lang);
      this.$root.$i18n.locale = lang;
    },
  },
};
</script>
