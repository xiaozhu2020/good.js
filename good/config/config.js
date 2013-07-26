'use strict';
goog.provide('good.config');


/** @type {string} */
good.config.ACCOUNT = 'account';


/** @type {string} */
good.config.VERSION = 'v0.0.1';


/**@type {string} */
good.config.REALTIME_SERVER = 'http://realtime.goodow.com';
//good.config.REALTIME_SERVER = 'http://192.168.1.15:8080';
/**@type {string} */
good.config.SERVERADRESS = good.config.REALTIME_SERVER + '/ah/api/';


/** */
good.config.start = function() {
  // var serverAddress = 'http://192.168.1.15:8080';
  if (good && good.realtime) {
    good.realtime.setServerAddress(good.config.REALTIME_SERVER);
  }
  //  if (good && good.net.CrossDomainRpc) {
  //    good.net.CrossDomainRpc.BASE_URL = serverAddress + '/_ah/api/';
  //  }
};
