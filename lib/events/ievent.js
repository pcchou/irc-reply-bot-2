(function() {
  var AbstractError, EventEmitter, IEvent, UnimplementError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EventEmitter = require('events').EventEmitter;

  UnimplementError = require("../errors/unimplementerror.js");

  AbstractError = require("../errors/abstracterror.js");

  IEvent = (function(_super) {
    __extends(IEvent, _super);

    function IEvent() {
      this.emit('error', new AbstractError(this.constructor.name));
    }

    IEvent.prototype.getType = function() {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "getType"));
    };

    IEvent.prototype.setType = function(type) {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "setType"));
    };

    IEvent.prototype.defer = function(timewaitOveride) {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "defer"));
    };

    IEvent.prototype.async = function(timewaitOveride) {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "async"));
    };

    IEvent.prototype.getStat = function() {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "getStat"));
    };

    IEvent.prototype.destroy = function() {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "destroy"));
    };

    return IEvent;

  })(EventEmitter);

  module.exports = IEvent;

}).call(this);
