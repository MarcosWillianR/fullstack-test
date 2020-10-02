<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  max-height: 100vh;
}

body {
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #003249;
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  max-height: 100vh;
  margin-bottom: -4px;
}
</style>
