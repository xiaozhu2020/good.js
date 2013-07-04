'use strict';
goog.provide('good.auth.signup');

goog.require('good.config');
goog.require('good.net.CrossDomainRpc');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.FocusHandler');
goog.require('goog.events.InputHandler');


/**
 * @param {string} str
 * @return {boolean}
 */
good.auth.signup.isEmpty = function(str) {
  if (str == null || str == '') {
    return true;
  }else {
    return false;
  }
};


/**
 * @param {string} id
 */
good.auth.signup.validate = function(id) {
  var $ = goog.dom.getElement;
  var el = $(id);
  var elvalue = el.value;
  var errormsg = $('errormsg_0_' + id);
  if (elvalue == null || elvalue == '') {
    if (id == 'LastName' || id == 'FirstName') {
      if (id == 'LastName') {
        $('errormsg_0_FirstName').innerText = '';
        var lastname_placeholder = $('lastname-placeholder');
        lastname_placeholder.style.display = 'block';
      }else {
        $('errormsg_0_LastName').innerText = '';
        var firstname_placeholder = $('firstname-placeholder');
        firstname_placeholder.style.display = 'block';
      }
    }
    el.className = 'form-error';
    errormsg.innerText = '此处不能留空。';
  }else {
    if (id == 'User' && !good.auth.signup.isEmpty(elvalue)) {
      var rpc = new good.net.CrossDomainRpc('POST',
          good.config.ACCOUNT, good.config.VERSION,
          'findByName/' + elvalue);
      rpc.send(function(json) {
        if (json && json['token']) {
          errormsg.innerText = '该用户名已存在。改用其他用户名?';
        }
      });
    }else if (id == 'PasswdAgain') {
      var pwd = $('Passwd').value;
      var pwdAgain = $('PasswdAgain').value;
      if (!good.auth.signup.isEmpty(pwd) &&
          !good.auth.signup.isEmpty(pwdAgain) &&
          pwd != pwdAgain) {
        errormsg.innerText = '两个密码不匹配。';
      }
    }
  }

};


/**
 *  @param {Array.<string>} array
 */
good.auth.signup.focus = function(array) {
  var $ = goog.dom.getElement;
  goog.object.forEach(array, function(id) {
    var el = $(id);
    goog.events.listen(el,
        goog.events.FocusHandler.EventType.FOCUSIN,
        function(e) {
          var errormsg = $('errormsg_0_' + id);
          errormsg.innerText = '';
          el.className = '';
        });

    goog.events.listen(el,
        goog.events.FocusHandler.EventType.FOCUSOUT,
        function(e) {
          good.auth.signup.validate(id);
        });
  });
};


/**
 *  @param {Array} array
 *  @return {Boolean}
 */
good.auth.signup.formCheck = function(array) {
  goog.object.forEach(array, function(id) {
    good.auth.signup.validate(id);
  });
  var errors = goog.dom.getElementsByClass('form-error');
  if (errors.length > 0) {
    return false;
  }
  return true;
};


/** */
good.auth.signup.start = function() {
  good.config.start();
  var $ = goog.dom.getElement;
  var LastName = $('LastName');
  var FirstName = $('FirstName');

  var DOM_EVENTS = ['keydown', 'keyup', 'keypress', 'change', 'cut', 'paste',
    'drop', 'input'];

  goog.events.listen(LastName, DOM_EVENTS, function(e) {
    var lastname_placeholder = $('lastname-placeholder');
    lastname_placeholder.style.display = 'none';
  });

  goog.events.listen(FirstName, DOM_EVENTS, function(e) {
    var firstname_placeholder = $('firstname-placeholder');
    firstname_placeholder.style.display = 'none';
  });

  var array = new Array('LastName', 'FirstName',
      'User', 'Passwd', 'PasswdAgain');
  good.auth.signup.focus(array);

  var submit = goog.dom.getElement('submitbutton');
  goog.events.listen(submit, goog.events.EventType.CLICK, function(e) {
    if (!good.auth.signup.formCheck(array)) {
      return false;
    }
    var displayName = $('LastName').value +
        $('FirstName').value;
    var name = $('User').value;
    var pwd = $('Passwd').value;
    var rpc = new good.net.CrossDomainRpc('POST', good.config.ACCOUNT,
        good.config.VERSION, 'accountinfo');
    var body = {
      'name' : name,
      'token' : pwd,
      'displayName' : displayName};
    rpc.body = body;
    rpc.send(function(json) {
      if (json && !json['error']) {
        window.location.assign('../../../index.html');
      }
    });
  });

};

goog.exportSymbol('good.auth.signup.start', good.auth.signup.start);
