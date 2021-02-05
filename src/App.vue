<template>
  <div>
    <main class="py-0">
      <nav class="navbar navbar-expand-md navbar-light top">
        <div class="container">
          <a
            class="navbar-brand text-primary font-weight-bold"
            href="https://openjustice.be"
          >
            <img src="./assets/images/oj.png" width="120" />
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
                <a class="nav-link" href="/">🏠 Home </a>
              </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  href="https://outil.openjustice.be/"
                  _target="blank"
                  class="btn btn-default"
                >
                  📤 Upload a decision
                </a>
              </li>

              <!-- Authentication Links -->
              <!-- <li class="nav-item">
                <a href="/login" class="btn disabled">
                  Login <span class="caret"></span>
                </a>
                <a href="#" class="btn disabled">Register</a>
              </li> -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  en
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item btn disabled small"
                    ><strong>en</strong></a
                  >
                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item">fr</a>
                  <a class="dropdown-item">nl</a>
                  <a class="dropdown-item">de</a>
                </div>
              </div>
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