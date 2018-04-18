module.exports = {
  "staticFileGlobs": [
    "site/css/**.css",
    "site/js/**.js",
    "site/fonts/**.*"
  ],
  "stripPrefix": "site/",
  "runtimeCaching": [{
    "urlPattern": "/site/(.*)",
    "handler": "fastest"
  }]
}
