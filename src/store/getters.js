const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  defaultTheme: state => state.book.defaultTheme,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  currentBook: state => state.book.currentBook
}

export default book
