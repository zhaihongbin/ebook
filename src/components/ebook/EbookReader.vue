<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Epub from 'epubjs'
import { getFontFamily, saveFontFamily, getFontSize, saveFontSize, getTheme, saveTheme } from '../../utils/localStorage'
global.ePub = Epub
export default {
  mixins: [ebookMixin],
  methods: {
    prevPage () {
      if (this.rendition) { this.rendition.prev() }
    },
    nextPage () {
      if (this.rendition) { this.rendition.next() }
    },
    toggleTitleAndMenu () {
      this.toggleMenuVisible()
      this.setSettingVisible(-1)
      this.setFontFamilyVisible(false)
    },
    intiFontSize () {
      const fontSize = getFontSize(this.fileName)
      // 如果没有缓存字体设置，则缓存默认字体
      if (!fontSize) {
        saveFontSize(this.fileName, this.defaultFontSize)
      } else {
        this.rendition.themes.fontSize(fontSize)
        this.setDefaultFontSize(fontSize)
      }
    },
    initFontFamily () {
      const font = getFontFamily(this.fileName)
      // 如果没有缓存字体设置，则缓存默认字体
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily)
      } else {
        this.rendition.themes.font(font)
        this.setDefaultFontFamily(font)
      }
    },
    initTheme () {
      let defaultTheme = getTheme(this.fileName)
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name
        saveTheme(this.fileName, defaultTheme)
      }
      this.setDefaultTheme(defaultTheme)
      // 遍历主题列表进行注册
      this.themeList.forEach((theme) => {
        this.rendition.themes.register(theme.name, theme.style)
      })
      // 设置默认主题
      this.rendition.themes.select(defaultTheme)
    },
    initRendition () {
      // 将电子书绑定到dom节点，并进行基础设置
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        // 实现在微信上能正常访问
        method: 'default'
      })
      // 显示电子书,并从缓存中读取相关设置
      this.rendition.display().then(() => {
        this.initTheme()
        this.intiFontSize()
        this.initFontFamily()
        this.initGlobalStyle()
      })
      // epubjs是独立的iframe，所以字体文件需要导入到那个iframe中
      // contents.addStylesheet()只接受一个url作为地址！
      this.rendition.hooks.content.register(contents => {
        Promise.all(
          [
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
          ]
        ).then(() => {
          console.log('字体全部加载完毕')
        })
      })
    },
    initGesture () {
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
        this.setFontFamilyVisible(false)
        // event.preventDefault()
        event.stopPropagation()
      })
    },
    initEpub () {
      const url = `${process.env.VUE_APP_RES_URL}/epub/` + this.fileName + '.epub'
      // 初始化epub，传入电子书地址
      this.book = new Epub(url)
      this.setCurrentBook(this.book)
      this.initRendition()
      this.initGesture()
      // 电子书全本解析完成后调用分页
      this.book.ready.then(() => {
        return this.book.locations.generate().then(() => {
          this.setBookAvailable(true)
        })
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
