<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'app',
  components: {},
  mounted () {
    document.addEventListener('DOMContentLoaded', () => {
      const html = document.querySelector('html')
      let fontSize = window.innerWidth / 10
      fontSize = fontSize > 50 ? 50 : fontSize
      html.style.fontSize = `${fontSize}px`
    })
  }
}

</script>

<style lang="scss" scoped>
@import "./assets/styles/global";

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  span {
    font-family: "Days One";
    font-size: px2rem(20);
  }
}
</style>
