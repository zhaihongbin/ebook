<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
  computed: { ...mapGetters(['fileName']) },
  methods: {
    ...mapActions('book', ['setFileName']),
    initEpub () {
      const url = 'http://192.168.0.103:8181/epub/' + this.fileName + '.epub'
      this.book = new Epub(url)
      this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        // 实现在微信上能正常访问
        method: 'default'
      }).display()
    }
  },
  created () {
    // 获取电子书文件名
    const fileName = this.$route.params.fileName.replace('|', '/')
    // 更新vuex，然后初始化epub
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
</style>>
