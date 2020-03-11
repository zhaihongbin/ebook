<template>
  <div class="home">
    <!-- <div id="read"></div> -->
    <span>{{test}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from 'epubjs'
import { mapGetters } from 'vuex'
global.ePub = Epub
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['test'])
  },
  components: {},
  mounted () {
    // this.book = new Epub('/东野圭吾天王套装.epub')
    // console.log(this.book)
    // this.book
    //   .renderTo('read', {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   })
    //   .display()
    console.log(this.test)
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/styles/global";

span {
  font-family: "Days One";
  font-size: px2rem(20);
}
</style>
