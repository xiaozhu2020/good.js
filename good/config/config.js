'use strict';
goog.provide('good.config');


/** @type {string} */
good.config.ACCOUNT = 'account';


/** @type {string} */
good.config.VERSION = 'v0.0.1';


/** */
good.config.start = function() {
  var serverAddress = 'http://192.168.1.15:8080';
  if (good && good.realtime) {
    good.realtime.setServerAddress(serverAddress);
  }
  if (good && good.net.CrossDomainRpc) {
    good.net.CrossDomainRpc.BASE_URL = serverAddress + '/_ah/api/';
  }
};
