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
    prevPage () {
      if (this.rendition) { this.rendition.prev() }
    },
    nextPage () {
      if (this.rendition) { this.rendition.next() }
    },
    toggleTitleAndMenu () { },
    initEpub () {
      const url = 'http://192.168.0.103:8181/epub/' + this.fileName + '.epub'
      // 初始化epub，传入电子书地址
      this.book = new Epub(url)
      // 将电子书绑定到dom节点，并进行基础设置
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        // 实现在微信上能正常访问
        method: 'default'
      })
      // 显示电子书
      this.rendition.display()
      // 监听电子书页面的手势
      this.rendition.on('touchstart', event => {
        // console.log(event)
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTimeStamp = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        this.touchEndX = event.changedTouches[0].clientX
        this.touchEndTimeStamp = event.timeStamp
        const offsetX = this.touchEndX - this.touchStartX
        const timeInterval = this.touchEndTimeStamp - this.touchStartTimeStamp
        console.log(offsetX, timeInterval)
        if (timeInterval < 500 && offsetX > 40) {
          this.prevPage()
        } else if (timeInterval < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        // event.preventDefault()
        event.stopPropagation()
      })
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
