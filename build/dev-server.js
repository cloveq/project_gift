require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var appData = require('../data/banner1.json');
var appData2 = require('../data/banner2.json');
var appData3 = require('../data/jingxuan.json');
var appData4 = require('../data/tabremen2.json');
var appData5 = require('../data/zhuanti.json');
var appData6 = require('../data/tab3gonglve.json');
var appData7 = require('../data/liwu.json');
var banner1 = appData.data;
var banner2 = appData2.data;
var home = appData3.data;
var hot = appData4.data;
var collection = appData5.data;
var channel = appData6.data;
var gift = appData7.data;
var appiRoutes = express.Router();

appiRoutes.get('/banner1',function(req,res){
  res.json({
  	errno: 0,
  	data: banner1
  });
});

appiRoutes.get('/banner2',function(req,res){
  res.json({
  	errno: 0,
  	data: banner2
  });
});

appiRoutes.get('/home',function(req,res){
  res.json({
  	errno: 0,
  	data: home
  });
});

appiRoutes.get('/hot',function(req,res){
  res.json({
  	errno: 0,
  	data: hot
  });
});

appiRoutes.get('/collection',function(req,res){
  res.json({
  	errno: 0,
  	data: collection
  });
});

appiRoutes.get('/channel',function(req,res){
  res.json({
  	errno: 0,
  	data: channel
  });
});

appiRoutes.get('/gift',function(req,res){
  res.json({
  	errno: 0,
  	data: gift
  });
});

app.use('/api',appiRoutes)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
