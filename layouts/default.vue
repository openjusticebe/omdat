<template>
  <div class="background-image">
    <div>
      <NuxtLink to="/">
        <h1 class="title">
          ECLI <sup class="status"><em>beta</em></sup>
          <img src="https://openjustice.be/wp-content/uploads/2020/10/cropped-Open-Justice.png" class="float-right" width="220px">
        </h1>
      </NuxtLink>
    </div>
    <div>
      <b-navbar>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <Nuxt />

    <footer class="footer">
      <div class="container">
        <small class="text-muted text-center">Developed with ❤️ by <em>
          <a href="https://openjustice.be/">OpenJustice.be</a></em>
          | {{ new Date().getFullYear() }} - now.
          <br>Source code available at <a href="https://github.com openjusticebe/ecli-frontend">GitHub</a> — Licensed with <a href="https://raw.githubusercontent.com/openjusticebe/ecli-frontend/main/LICENSE">GPLv3</a>.
        </small>
      </div>
    </footer>
  </div>
</template>
