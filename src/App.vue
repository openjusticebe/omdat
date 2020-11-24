<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
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
              <a class="nav-link" href="/"> Home </a>
            </li>
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
              <a href="/login"> Register <span class="caret"></span> </a>
              <a href="/login"> Login <span class="caret"></span> </a>
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
              <div class="card-header">ECLI</div>

              {{ title }}

              <div class="card-body">
                <!-- <img alt="OJ logo" src="./assets/logo.png"> -->
                <WelcomeOJ
                  msg="Welcome to OpenJustice.be search tool"
                  page_url="https://ecli.openjustice.be/BE/"
                />
                {{ info }}
                {{ env }}

                <router-link to="/about">about</router-link>
                <router-view />
                <h3>Browse courts</h3>
                <div v-if="!data_fetched">sss</div>
                <!-- <div
                  v-for="(fields, index) in api_results.collection"
                  :key="index"
                >
                  <ul>
                    <li v-for="(field, idx) in fields.collection" :key="idx">
                      <a :href="field.href"
                        >{{ field.name }} {{ field.href }}</a
                      >
                    </li>
                  </ul>
                </div> -->

                <div class="text-right">
                  <img
                    src="https://raw.githubusercontent.com/openjusticebe/ui-assets/main/svg/OpenJustice.be_static.svg"
                    width="240px"
                    alt=""
                  />
                </div>
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
    // axios
    //   .get(`https://ecli.openjustice.be/BE/`, {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((response) => (this.api_results = response));
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
