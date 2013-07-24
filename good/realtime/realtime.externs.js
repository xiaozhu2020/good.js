/**
 * @fileoverview Externs for Goodow Realtime JavaScript API.
 * @externs
 */


/**
 * Suppresses the compiler warning when multiple externs files declare the good
 * namespace.
 *
 * @suppress {duplicate}
 */
var good = {};
good.realtime = {};


/** @param {function()} onLoad */
good.realtime.onLoad = function(onLoad) {};


/** @param {function()} onLoad */
window.gdrOnLoad = function(onLoad) {};


/**
 * @param {string} userId
 * @param {string} token
 */
good.realtime.authorize = function(userId, token) {};


/**
 * @param {string} docId
 * @param {function(!good.realtime.Document)} onLoaded
 * @param {function(!good.realtime.Model)=} opt_initializerFn
 * @param {function(!good.realtime.Error)=} opt_errorFn
 */
good.realtime.load =
    function(docId, onLoaded, opt_initializerFn, opt_errorFn) {};


/** @param {string} serverAddress */
good.realtime.setServerAddress = function(serverAddress) {};



/** @interface */
good.realtime.EventTarget = function() {};


/**
 * @param {string} type
 * @param {Function|Object} handler
 * @param {boolean=} opt_capture
 */
good.realtime.EventTarget.prototype.addEventListener =
    function(type, handler, opt_capture) {};


/**
 * @param {string} type
 * @param {Function|Object} handler
 * @param {boolean=} opt_capture
 */
good.realtime.EventTarget.prototype.removeEventListener =
    function(type, handler, opt_capture) {};

good.realtime.BaseModelEvent = function() {};


/** @return {boolean} */
good.realtime.BaseModelEvent.prototype.isBubbles = function() {};


/** @return {boolean} */
good.realtime.BaseModelEvent.prototype.isLocal = function() {};


/** @return {string} */
good.realtime.BaseModelEvent.prototype.getSessionId = function() {};


/** @return {string} */
good.realtime.BaseModelEvent.prototype.getType = function() {};


/** @return {string} */
good.realtime.BaseModelEvent.prototype.getUserId = function() {};


/** @return {good.realtime.EventTarget} */
good.realtime.BaseModelEvent.prototype.getTarget = function() {};



// /** @type {boolean} */
// good.realtime.BaseModelEvent.prototype.bubbles;
// /** @type {string} */
// good.realtime.BaseModelEvent.prototype.sessionId;
// /** @type {string} */
// good.realtime.BaseModelEvent.prototype.type;
// /** @type {string} */
// good.realtime.BaseModelEvent.prototype.userId;
/**
 * @constructor
 * @implements {good.realtime.EventTarget}
 */
good.realtime.Document = function() {};
good.realtime.Document.prototype.close = function() {};


/** @return {Array.<good.realtime.Collaborator>} */
good.realtime.Document.prototype.getCollaborators = function() {};


/** @return {good.realtime.Model} */
good.realtime.Document.prototype.getModel = function() {};



/**
 * @constructor
 * @implements {good.realtime.EventTarget}
 */
good.realtime.Model = function() {};


/**
 * @param {function(*)|string} ref
 * @param {...*} var_args
 * @return {Object}
 */
good.realtime.Model.prototype.create = function(ref, var_args) {};


/**
 * @param {Array.<*>=} opt_initialValue
 * @return {good.realtime.CollaborativeList}
 */
good.realtime.Model.prototype.createList = function(opt_initialValue) {};


/**
 * @param {Object.<*>=} opt_initialValue
 * @return {good.realtime.CollaborativeMap}
 */
good.realtime.Model.prototype.createMap = function(opt_initialValue) {};


/**
 * @param {string=} opt_initialValue
 * @return {good.realtime.CollaborativeString}
 */
good.realtime.Model.prototype.createString = function(opt_initialValue) {};


/** @return {good.realtime.CollaborativeMap} */
good.realtime.Model.prototype.getRoot = function() {};


/**
 * @param {string} objectId
 * @return {good.realtime.CollaborativeObject}
 */
good.realtime.Model.prototype.getObject = function(objectId) {};



/**
 * @constructor
 * @implements {good.realtime.EventTarget}
 * @param {good.realtime.Model} model
 */
good.realtime.CollaborativeObject = function(model) {};


/** @return {string} */
good.realtime.CollaborativeObject.prototype.getId = function() {};


/** @return {string} */
good.realtime.CollaborativeObject.prototype.toString = function() {};


/** @param {function(!good.realtime.ObjectChangedEvent)} handler */
good.realtime.CollaborativeObject.prototype.addObjectChangedListener =
    function(handler) {};


/** @param {function(!good.realtime.ObjectChangedEvent)} handler */
good.realtime.CollaborativeObject.prototype.removeObjectChangedListener =
    function(handler) {};



// /** @type {string} */
// good.realtime.CollaborativeObject.prototype.id;
/**
 * @constructor
 * @extends {good.realtime.BaseModelEvent}
 */
good.realtime.ObjectChangedEvent = function() {};


/** @return {Array.<gapi.drive.realtime.BaseModelEvent>} */
good.realtime.ObjectChangedEvent.prototype.getEvents = function() {};



/**
 * @constructor
 * @extends {good.realtime.CollaborativeObject}
 */
good.realtime.CollaborativeMap = function() {};
good.realtime.CollaborativeMap.prototype.clear = function() {};


/**
 * @param {string} key
 * @return {*}
 */
good.realtime.CollaborativeMap.prototype.remove = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
good.realtime.CollaborativeMap.prototype.get = function(key) {};


/**
 * @param {string} key
 * @return {boolean}
 */
good.realtime.CollaborativeMap.prototype.has = function(key) {};


/** @return {boolean} */
good.realtime.CollaborativeMap.prototype.isEmpty = function() {};


/** @return {Array.<Array>} */
good.realtime.CollaborativeMap.prototype.items = function() {};


/** @return {Array.<string>} */
good.realtime.CollaborativeMap.prototype.keys = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @return {*}
 */
good.realtime.CollaborativeMap.prototype.set = function(key, value) {};


/** @return {Array.<Object>} */
good.realtime.CollaborativeMap.prototype.values = function() {};


/** @return {number} */
good.realtime.CollaborativeMap.prototype.getSize = function() {};


/** @param {function(!good.realtime.ValueChangedEvent)} handler */
good.realtime.CollaborativeMap.prototype.addValueChangedListener =
    function(handler) {};


/** @param {function(!good.realtime.ValueChangedEvent)} handler */
good.realtime.CollaborativeMap.prototype.removeValueChangedListener =
    function(handler) {};



/**
 * @constructor
 * @extends {good.realtime.BaseModelEvent}
 */
good.realtime.ValueChangedEvent = function() {};


/** @return {string} */
good.realtime.ValueChangedEvent.prototype.getProperty = function() {};


/** @return {*} */
good.realtime.ValueChangedEvent.prototype.getOldValue = function() {};


/** @return {*} */
good.realtime.ValueChangedEvent.prototype.getNewValue = function() {};



/**
 * @constructor
 * @extends {good.realtime.CollaborativeObject}
 */
good.realtime.CollaborativeList = function() {};


/** @return {Array.<*>} */
good.realtime.CollaborativeList.prototype.asArray = function() {};
good.realtime.CollaborativeList.prototype.clear = function() {};


/**
 * @param {number} index
 * @return {*}
 */
good.realtime.CollaborativeList.prototype.get = function(index) {};


/**
 * @param {*} value
 * @param {function(*, *): boolean=} opt_comparatorFn
 * @return {number}
 */
good.realtime.CollaborativeList.prototype.indexOf =
    function(value, opt_comparatorFn) {};


/**
 * @param {number} index
 * @param {*} value
 */
good.realtime.CollaborativeList.prototype.insert = function(index, value) {};


/**
 * @param {number} index
 * @param {Array.<*>} values
 */
good.realtime.CollaborativeList.prototype.insertAll =
    function(index, values) {};


/**
 * @param {*} value
 * @param {function(*, *): boolean=} opt_comparatorFn
 * @return {number}
 */
good.realtime.CollaborativeList.prototype.lastIndexOf =
    function(value, opt_comparatorFn) {};


/**
 * @param {*} value
 * @return {number}
 */
good.realtime.CollaborativeList.prototype.push = function(value) {};


/** @param {Array.<*>} values */
good.realtime.CollaborativeList.prototype.pushAll = function(values) {};


/**
 * @param {number} index
 * @param {boolean} canBeDeleted
 * @return {good.realtime.IndexReference}
 */
good.realtime.CollaborativeList.prototype.registerReference =
    function(index, canBeDeleted) {};


/** @param {number} index */
good.realtime.CollaborativeList.prototype.remove = function(index) {};


/**
 * @param {number} startIndex
 * @param {number} endIndex
 */
good.realtime.CollaborativeList.prototype.removeRange =
    function(startIndex, endIndex) {};


/**
 * @param {*} value
 * @return {boolean}
 */
good.realtime.CollaborativeList.prototype.removeValue = function(value) {};


/**
 * @param {number} index
 * @param {Array.<*>} values
 */
good.realtime.CollaborativeList.prototype.replaceRange =
    function(index, values) {};


/**
 * @param {number} index
 * @param {*} value
 */
good.realtime.CollaborativeList.prototype.set = function(index, value) {};


/** @return {number} */
good.realtime.CollaborativeList.prototype.getLength = function() {};


/** @param {number} */
good.realtime.CollaborativeList.prototype.setLength = function(length) {};


/** @param {function(!good.realtime.ValuesAddedEvent)} handler */
good.realtime.CollaborativeList.prototype.addValuesAddedListener =
    function(handler) {};


/** @param {function(!good.realtime.ValuesRemovedEvent)} handler */
good.realtime.CollaborativeList.prototype.addValuesRemovedListener =
    function(handler) {};


/** @param {function(!good.realtime.ValuesSetEvent)} handler */
good.realtime.CollaborativeList.prototype.addValuesSetListener =
    function(handler) {};


/**
 * @param
 * {function(!good.realtime.ValuesAddedEvent|good.realtime.ValuesRemovedEvent|good.realtime.ValuesSetEvent)}
 * handler
 */
good.realtime.CollaborativeList.prototype.removeListListener =
    function(handler) {};



/**
 * @constructor
 * @extends {good.realtime.BaseModelEvent}
 */
good.realtime.ValuesAddedEvent = function() {};


/** @return {number} */
good.realtime.ValuesAddedEvent.prototype.getIndex = function() {};


/** @return {Array.<!Object|string|number|boolean>} */
good.realtime.ValuesAddedEvent.prototype.getValues = function() {};



/**
 * @constructor
 * @extends {good.realtime.BaseModelEvent}
 */
good.realtime.ValuesRemovedEvent = function() {};


/** @return {number} */
good.realtime.ValuesRemovedEvent.prototype.getIndex = function() {};


/** @return {Array.<!Object|string|number|boolean>} */
good.realtime.ValuesRemovedEvent.prototype.getValues = function() {};



/**
 * @constructor
 * @extends {good.realtime.BaseModelEvent}
 */
good.realtime.ValuesSetEvent = function() {};


/** @return {number} */
good.realtime.ValuesSetEvent.prototype.getIndex = function() {};


/** @return {Array.<*>} */
good.realtime.ValuesSetEvent.prototype.getNewValues = function() {};


/** @return {Array.<*>} */
good.realtime.ValuesSetEvent.prototype.getOldValues = function() {};



/**
 * @constructor
 * @extends {good.realtime.CollaborativeObject}
 */
good.realtime.CollaborativeString = function() {};


/** @param {string} text */
good.realtime.CollaborativeString.prototype.append = function(text) {};


/** @return {string} */
good.realtime.CollaborativeString.prototype.getText = function() {};


/**
 * @param {number} index
 * @param {string} text
 */
good.realtime.CollaborativeString.prototype.insertString =
    function(index, text) {};


/**
 * @param {number} index
 * @param {boolean} canBeDeleted
 * @return {good.realtime.IndexReference}
 */
good.realtime.CollaborativeString.prototype.registerReference =
    function(index, canBeDeleted) {};


/**
 * @param {number} startIndex
 * @param {number} endIndex
 */
good.realtime.CollaborativeString.prototype.removeRange =
    function(startIndex, endIndex) {};


/** @param {string} text */
good.realtime.CollaborativeString.prototype.setText = function(text) {};


/** @return {number} */
good.realtime.CollaborativeString.prototype.getLength = function() {};


/** @param {function(!good.realtime.TextDeletedEvent)} handler */
good.realtime.CollaborativeString.prototype.addTextDeletedListener =
    function(handler) {};


/** @param {function(!good.realtime.TextInsertedEvent)} handler */
good.realtime.CollaborativeString.prototype.addTextInsertedListener =
    function(handler) {};


/**
 * @param
 * {function(!good.realtime.TextDeletedEvent|good.realtime.TextInsertedEvent)}
 * handler
 */
good.realtime.CollaborativeString.prototype.removeStringListener =
    function(handler) {};



/**
 * @constructor
 * @extends {good.realtime.CollaborativeObject}
 */
good.realtime.IndexReference = function() {};


/**
 * @enum {string}
 */
good.realtime.EventType = {
  OBJECT_CHANGED: '',
  VALUES_SET: '',
  VALUES_ADDED: '',
  VALUES_REMOVED: '',
  VALUE_CHANGED: '',
  TEXT_INSERTED: '',
  TEXT_DELETED: '',
  COLLABORATOR_JOINED: '',
  COLLABORATOR_LEFT: '',
  REFERENCE_SHIFTED: '',
  DOCUMENT_SAVE_STATE_CHANGED: '',
  UNDO_REDO_STATE_CHANGED: ''};
/*
var gapi = {
    "gapi": {
        "drive": {
            "realtime": {
                "databinding": {
                    "AlreadyBoundError": function () {},
                    "Binding": function () {},
                    "StringBinding": function () {},
                    "bindString": function () {}
                },
                "EventTarget": function () {},
                "BaseModelEvent": function () {},
                "EventType": {
                    "Oh": {},
                    "Xh": {},
                    "Vh": {},
                    "Wh": {},
                    "Yh": {},
                    "Sh": {},
                    "Rh": {},
                    "Hh": {},
                    "Ih": {},
                    "Ph": {},
                    "Kh": {},
                    "Uh": {},
                    "OBJECT_CHANGED": {},
                    "VALUES_SET": {},
                    "VALUES_ADDED": {},
                    "VALUES_REMOVED": {},
                    "VALUE_CHANGED": {},
                    "TEXT_INSERTED": {},
                    "TEXT_DELETED": {},
                    "COLLABORATOR_JOINED": {},
                    "COLLABORATOR_LEFT": {},
                    "REFERENCE_SHIFTED": {},
                    "DOCUMENT_SAVE_STATE_CHANGED": {},
                    "UNDO_REDO_STATE_CHANGED": {}
                },
                "ReferenceShiftedEvent": function () {},
                "ValuesAddedEvent": function () {},
                "ValuesRemovedEvent": function () {},
                "ValuesSetEvent": function () {},
                "TextInsertedEvent": function () {},
                "TextDeletedEvent": function () {},
                "ValueChangedEvent": function () {},
                "ObjectChangedEvent": function () {},
                "CollaborativeObject": function () {},
                "CollaborativeString": function () {},
                "CollaborativeList": function () {},
                "CollaborativeMap": function () {},
                "CollaboratorJoinedEvent": function () {},
                "CollaboratorLeftEvent": function () {},
                "Collaborator": function () {},
                "ErrorType": {
                    "Jh": {},
                    "Mh": {},
                    "Nh": {},
                    "Lh": {},
                    "Qh": {},
                    "Gh": {},
                    "Th": {},
                    "CONCURRENT_CREATION": {},
                    "INVALID_COMPOUND_OPERATION": {},
                    "NOT_FOUND": {},
                    "FORBIDDEN": {},
                    "SERVER_ERROR": {},
                    "CLIENT_ERROR": {},
                    "TOKEN_REFRESH_REQUIRED": {}
                },
                "Error": function () {},
                "CorsCommunicationService": {
                    "prototype": {
                        "sendRpc": function () {},
                        "addEventListener": function () {}
                    }
                },
                "custom": {
                    "registerType": function () {},
                    "setInitializer": function () {},
                    "setOnLoaded": function () {},
                    "collaborativeField": function () {},
                    "getId": function () {},
                    "getModel": function () {},
                    "isCustomObject": function () {}
                },
                "DocumentSaveStateChangedEvent": function () {},
                "IndexReference": function () {},
                "UndoRedoStateChangedEvent": function () {},
                "Model": function () {},
                "Document": function () {},
                "load": function () {},
                "setServerAddress": function () {}
            }
        }
    }
}
*/
