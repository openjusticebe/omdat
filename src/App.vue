<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container container-xl">
        <a class="navbar-brand" href="/">
          <img
            src="https://raw.githubusercontent.com/openjusticebe/ui-assets/main/svg/OpenJustice.be_static.svg"
            alt=""
            width="150px"
          />
          ECLI <sup><em class="text-muted">frontend</em></sup>
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
              <!-- <a class="nav-link" href="/"> Home </a> -->
            </li>
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
              <a href="/register" class="btn disabled">
                Register <span class="caret"></span>
              </a>
              <a href="/login" class="btn disabled">
                Login <span class="caret"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">Welcome OpenJustice.be search tool</div>

              <div class="card-body">
                <!-- <WelcomeOJ
                  msg="Welcome to OpenJustice.be search tool"
                  page_url="https://ecli.openjustice.be/BE/"
                /> -->

                <router-view />
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      api_results: null,
      env: null,
    };
  },
  mounted() {
    this.env = process.env;
  },
};
</script>

  <style>
@import "./assets/styles/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: #edf3f4;
}
</style>
