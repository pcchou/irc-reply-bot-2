(function() {
  var Event, IEvent,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  IEvent = require("./ievent.js");

  Event = (function(_super) {
    __extends(Event, _super);

    function Event(options) {
      this.type = options.type;
    }

    Event.prototype.getType = function() {
      return this.type;
    };

    Event.prototype.setType = function(type) {
      return this.type = type.toString();
    };

    return Event;

  })(IEvent);

}).call(this);
