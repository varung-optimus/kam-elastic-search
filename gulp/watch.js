'use strict';

module.exports = function (gulp, $, config) {
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer('/' , {
    target: config.proxyServerUrl
  });

  gulp.task('browserSync', function () {
    $.browserSync({
      host: config.host,
      open: 'external',
      port: config.port,
      server: {
        baseDir: config.buildDir
      },
      middleware: [
        {
          route: "/api",
          handle: function (req, res, next) {
            // send through proxy
            proxy.web(req, res, {
              target: config.proxyServerUrl,
              changeOrigin: true
            }, function (e) { console.log(e) });
          }
        }
      ]
    });
  });

  gulp.task('watch', function () {
    $.browserSync.reload();
    gulp.watch([config.unitTestFiles], ['unitTest']);
    gulp.watch([config.appFiles, '!' + config.unitTestFiles], ['build', $.browserSync.reload]);
  });
};
