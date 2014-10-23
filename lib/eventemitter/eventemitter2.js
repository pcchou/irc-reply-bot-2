(function() {
  var EventEmitter2;

  EventEmitter2 = (function() {
    function EventEmitter2() {
      this.eventListerners = {};
      this.maxListener = 10;
    }

    EventEmitter2.prototype.addListener = function(type, listener, fullName, filter) {
      this.prepareListener(type);
      if (this.eventListerners[type].length + 1 > this.maxListener) {
        console.log("warning listener of " + type + " exceed the max limit of " + this.maxListener + ", their may potential memory leaks in the code");
      }
      return this.eventListerners[type].push;
    };

    EventEmitter2.prototype.removeListener = function(listerner) {};

    EventEmitter2.prototype.removeListenerByName = function() {};

    EventEmitter2.prototype.emit = function() {};

    EventEmitter2.prototype.once = function() {};

    EventEmitter2.prototype.removeAllListeners = function() {};

    EventEmitter2.prototype.setMaxListeners = function() {};

    EventEmitter2.prototype.listeners = function() {};

    EventEmitter2.prototype.listenersByName = function() {};

    EventEmitter2.prototype.prepareListener = function(eventName) {
      if (!this.eventListerners[eventName]) {
        return this.eventListerners[eventName] = [];
      }
    };

    EventEmitter2.prototype.on = addListener;

    EventEmitter2.prototype.off = removeListener;

    EventEmitter2.prototype.offByName = removeListenerByName;

    return EventEmitter2;

  })();

  module.exports = EventEmitter2;

}).call(this);
