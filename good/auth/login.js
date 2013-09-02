'use strict';
goog.provide('good.auth');
goog.provide('good.auth.login');

goog.require('good.auth.signup');
goog.require('good.config');
goog.require('good.net.CrossDomainRpc');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.FocusHandler');



/**
 * login登录控制类
 * @constructor
 * @param {string}
 *          userId
 * @param {string}
 *          access_token
 */
good.auth.Auth = function(userId, access_token) {
  this.userId = userId;
  this.access_token = access_token;
};


/** @type {good.auth.Auth} */
good.auth.Auth.current = null;


/**
 * 登录页面输入框check方法
 * @param {string}
 *          name
 * @param {string}
 *          pwd
 */
good.auth.login = function(name, pwd) {
  if (good.auth.signup.isEmpty(name)) {
    var errormsg_0_Email = goog.dom.getElement('errormsg_0_Email');
    errormsg_0_Email.innerText = '输入您的用户名。 ';
    var Email = goog.dom.getElement('Email');
    Email.className = 'form-error';
    return;
  }

  if (good.auth.signup.isEmpty(pwd)) {
    var errormsg_0_Passwd = goog.dom.getElement('errormsg_0_Passwd');
    errormsg_0_Passwd.innerText = '输入您的密码。 ';
    var Passwd = goog.dom.getElement('Passwd');
    Passwd.className = 'form-error';
    return;
  }

  var rpc = new good.net.CrossDomainRpc('POST', good.config.ACCOUNT,
      good.config.VERSION, 'login/' +
      encodeURIComponent(name) + '/' + encodeURIComponent(pwd),
      good.config.SERVERADRESS);
  rpc.send(function(json) {
    if (json && json['token']) {
      var uri = new goog.Uri(window.location);
      var redirect_uri = uri.getParameterValue('redirect_uri');

      if (good.auth.signup.isEmpty(redirect_uri)) {
        window.location.assign('../../../' + 'index.html' +
            '#userId=' + json['userId'] +
            '&access_token=' + json['token']);
      }else {
        window.location.assign(redirect_uri + '#userId=' + json['userId'] +
            '&access_token=' + json['token']);
      }
    } else {
      var errormsg_0_Passwd = goog.dom.getElement('errormsg_0_Passwd');
      errormsg_0_Passwd.innerText = '您输入的用户名或密码不正确。 ';
      var Passwd = goog.dom.getElement('Passwd');
      Passwd.className = 'form-error';
    }
  });
};


/**
 * login.html页面初始化类 
 */
good.auth.login.start = function() {
  good.config.start();
  var Passwd = goog.dom.getElement('Passwd');
  goog.events.listen(Passwd, goog.events.FocusHandler.EventType.FOCUSIN,
      function(e) {
        var errormsg_0_Passwd = goog.dom.getElement('errormsg_0_Passwd');
        errormsg_0_Passwd.innerText = '';
        Passwd.className = '';
      });
  var Email = goog.dom.getElement('Email');
  goog.events.listen(Email, goog.events.FocusHandler.EventType.FOCUSIN,
      function(e) {
        var errormsg_0_Email = goog.dom.getElement('errormsg_0_Email');
        errormsg_0_Email.innerText = '';
        Email.className = '';
      });
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
