<template>
  <div>
    <main class="py-0">
      <nav class="navbar navbar-expand-md navbar-light top">
        <div class="container">
          <a class="navbar-brand text-primary font-weight-bold" href="/">
            <img
              src="./assets/images/oj.png"
              width="120"
              alt="open justice logo"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">🏠 {{ $t("home") }} </a>
              </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  :href="
                    'https://outil.openjustice.be/' + this.$root.$i18n.locale
                  "
                  class="btn btn-default"
                >
                  📤 {{ $t("upload_a_case_law") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://openjustice.be/stats-publications-arrets-jugements/"
                  target="_blank"
                  class="btn btn-default"
                  >📊 Stats</a
                >
              </li>

              <!-- Authentication Links -->
              <!-- <li class="nav-item">
                <a href="/login" class="btn disabled">
                  Login <span class="caret"></span>
                </a>
                <a href="#" class="btn disabled">Register</a>
              </li> -->
              <SwitchLocale />

              <div class="col-xs-12">
                <div class="console"></div>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      api_results: null,
      env: {},
    };
  },
  mounted() {
    this.env = process.env;
  },
};
</script>