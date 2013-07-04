'use strict';
goog.provide('good.config');


/** @type {string} */
good.config.ACCOUNT = 'account';


/** @type {string} */
good.config.VERSION = 'v1';


/** */
good.config.start = function() {
  var channel = 'http://192.168.1.15:8080';
  if (good && good.realtime) {
    good.realtime.setServerAddress(channel);
  }
  if (good && good.net.CrossDomainRpc) {
    good.net.CrossDomainRpc.BASE_URL = channel + '/_ah/api/';
  }
};
