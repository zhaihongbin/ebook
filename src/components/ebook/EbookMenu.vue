<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        :class="{'hide-box-shadow': !menuVisible || settingVisible >= 0}"
        v-show="menuVisible"
      >
        <div class="icon-wrapper">
          <span class="icon-menu" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import EbookSettingFont from './EbookSettingFont'
import EbookSettingFontPopup from './EbookSettingFontPopup'
export default {
  mixins: [ebookMixin],
  methods: {
    showSetting (key) {
      console.log(this.settingVisible)
      if (this.settingVisible !== key) {
        this.setSettingVisible(key)
      } else {
        this.setSettingVisible(-1)
      }
    }
  },
  components: { EbookSettingFont, EbookSettingFontPopup }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background-color: #fff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(22);
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    flex: 1;
    @include center;
  }
}
</style>>
