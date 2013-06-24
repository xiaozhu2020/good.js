'use strict';
goog.provide('good.auth.signup');

goog.require('good.net.CrossDomainRpc');
goog.require('goog.dom');
goog.require('goog.events');

good.auth.signup.start = function() {
  var submit = goog.dom.getElement('submitbutton');
  goog.events.listen(submit, goog.events.EventType.CLICK, function(e) {
    var displayName = goog.dom.getElement('LastName').value + goog.dom.getElement('FirstName').value;
    var name = goog.dom.getElement('user').value;
    var pwd = goog.dom.getElement('Passwd').value;
    var rpc = new good.net.CrossDomainRpc('POST', 'account/v1/accountinfo');
    var body = {
      'name' : name,
      'token' : pwd,
      'displayName' : displayName};
    rpc.body = body;
    rpc.send(function(json) {
      if (json && !json['error']) {
        window.location.assign('../../index.html');
      }
    });
  });

};

goog.exportSymbol('good.auth.signup.start', good.auth.signup.start);
