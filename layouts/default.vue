<template>
  <div>
    <div>
      <h1 class="title">
        ECLI-frontend <sup class="status"><em>beta</em></sup>
        <img src="https://openjustice.be/wp-content/uploads/2020/10/cropped-Open-Justice.png" class="float-right" width="220px">
      </h1>
    </div>

    <Nuxt />

    <footer class="footer">
      <div class="container">
        <small class="text-muted text-center">Developed by <em>
          <a href="https://openjustice.be/">OpenJustice.be</a> with ❤️</em>
          | {{ new Date().getFullYear() }} - now
          <br>  Licensed with GPLv3. Source code available at <a href="https://github.com/openjusticebe/ecli-frontend">GitHub</a>
        </small>
      </div>
    </footer>
  </div>
</template>

<style>

html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
}

body {
  background-color: #fff;
  background-image: url("/background.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  margin-bottom: 60px; /* Margin bottom by footer height */

}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 30px; /* Vertically center the text there */
  background-color: #f5f5f5;
  color: #526488;
  text-align: center;

}
.title {
  font-family:
  "Fredoka One",
  sans-serif;
  display: block;
  font-weight: 500;
  font-size: 45px;
  color: #4959bb;
  letter-spacing: 1px;
}

.status {
  font-weight: 500;
  font-size: 20px;
  color: #db6aab;
}


</style>
