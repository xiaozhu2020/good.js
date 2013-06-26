'use strict';
goog.provide('good.net.CrossDomainRpc');

goog.require('good.config');
goog.require('goog.json');

good.net.CrossDomainRpc = function(method, url) {
  if (url.indexOf('http') != 0) {
    url = good.net.CrossDomainRpc.BASE_URL + url;
  }
  var xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != 'undefined') {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS
    // requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  this.xhr = xhr;
  this.body = null;
};

good.net.CrossDomainRpc.BASE_URL = 'http://realtime.goodow.com/ah/api/';

good.net.CrossDomainRpc.prototype.send = function(onload) {
  this.xhr.onload = function() {
    var responseText = this.responseText;
    if (responseText.length == 0) {
      onload(null);
      return;
    }
    onload(goog.json.parse(responseText));
  };
  this.xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  var contentType = 'text/plain; charset=utf-8';
  if (this.body) {
    var serializer = new goog.json.Serializer();
    this.body = serializer.serialize(this.body);
    if (window.navigator.userAgent.toLowerCase().indexOf('msie') == -1) {
      //contentType = 'application/json';
    }
  }
  this.xhr.setRequestHeader('Content-Type', contentType);
  this.xhr.send(this.body);
};

good.config.start();