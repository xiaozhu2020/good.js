'use strict';
goog.provide('good.auth');
goog.provide('good.auth.login');

goog.require('good.config');
goog.require('good.net.CrossDomainRpc');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.dom');
goog.require('goog.events');



/**
 * @constructor
 * @param {string} userId
 * @param {string} access_token
 */
good.auth.Auth = function(userId, access_token) {
  this.userId = userId;
  this.access_token = access_token;
};


/** @type {good.auth.Auth} */
good.auth.Auth.current = null;


/**
 * @param {string} name
 * @param {string} pwd
 */
good.auth.login = function(name, pwd) {
  var rpc = new good.net.CrossDomainRpc('POST', 'account/v1/login/' + name +
      '/' + pwd);
  rpc.send(function(json) {
    if (json && json['token']) {
      var uri = new goog.Uri(window.location);
      var redirect_uri = uri.getParameterValue('redirect_uri');
      window.location.assign(redirect_uri + '#userId=' + json['userId'] +
          '&access_token=' + json['token']);
    } else {
      window.alert('登录失败');
    }
  });
};


/** */
good.auth.login.start = function() {
  good.config.start();
  var signIn = goog.dom.getElement('signIn');
  goog.events.listen(signIn, goog.events.EventType.CLICK, function(e) {
    var name = goog.dom.getElement('Email').value;
    var pwd = goog.dom.getElement('Passwd').value;
    good.auth.login(name, pwd);
  });
};


/** */
good.auth.check = function() {
  var query = new goog.Uri.QueryData(window.location.hash.substring(1));
  var userId = query.get('userId');
  var access_token = query.get('access_token');
  if (!userId || !access_token) {
    var uri = new goog.Uri('good.js/good/auth/ServiceLogin.html');
    uri.setParameterValue('redirect_uri', window.location);
    window.location.assign(uri.toString());
  } else {
    var auth = new good.auth.Auth(userId, access_token);
    good.auth.Auth.current = auth;
  }
};

goog.exportSymbol('good.auth.login.start', good.auth.login.start);
goog.exportSymbol('good.auth.check', good.auth.check);
