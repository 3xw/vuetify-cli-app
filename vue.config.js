module.exports = {
  "css": {
    "loaderOptions": {
      "css": {},
      "postcss": {},
      "sass": {}
    }
  },
  "pwa": {
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "./src/sw.js"
    },
    "appleMobileWebAppCapable": "yes",
    "msTileColor": "#FFFFFF",
    "themeColor": "#FFFFFF",
    "name": "Vue CLI App"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}