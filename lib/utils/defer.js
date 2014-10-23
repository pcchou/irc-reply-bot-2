(function() {
  var Deferer, DuplicatedTaskError, EventEmitter, UnknownTaskError, rand,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EventEmitter = require('events').EventEmitter;

  UnknownTaskError = require("../errors/unknowntaskerror.js");

  DuplicatedTaskError = require("../errors/duplicatedtaskerror.js");

  rand = function() {
    var id;
    id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/s/g, function() {
      return (Math.floor(Math.random() * 16)).toString(16);
    });
    return id;
  };


  /*
    Defer tasks and handle timeout
    @class
    @param   {int} defaultTimeout - The default timeout.
    @emits   Deferer#timeout
    @emits   Deferer#progress
   */

  Deferer = (function(_super) {
    __extends(Deferer, _super);

    function Deferer(defaultTimeout) {
      this.defaultTimeout = defaultTimeout != null ? defaultTimeout : 60000;
      this.count = 0;
      this.tasks = [];
      this.unfinishedTasks = [];
      this.canceledTasks = [];
      this.lastFinish = null;
      this.dueTime = null;
      this.timeoutHandle = null;
      this.startTime = Date.now();
    }


    /*
      @emits  Deferer#error
     */

    Deferer.prototype.addTask = function(id, timeout) {
      var newDueTime, newHandle;
      if (id == null) {
        id = rand();
      }
      if (timeout == null) {
        timeout = this.defaultTimeout;
      }
      if (0 > this.tasks.indexOf(id)) {
        this.tasks.push(id);
      } else {
        this.emit('error', new DuplicatedTaskError(id));
      }
      if (0 > this.unfinishedTasks.indexOf(id)) {
        this.unfinishedTasks.push(id);
      }
      newDueTime = Date.now() + timeout;
      if (!this.timeoutHandle || newDueTime > this.dueTime) {
        if (this.timeoutHandle) {
          clearTimeout(this.timeoutHandle);
        }
        newHandle = (function(_this) {
          return function() {
            if (_this.unfinishedTasks.length > 0) {
              return _this.emit('timeout', _this);
            }
          };
        })(this);
        this.timeoutHandle = setTimeout(newHandle);
      }
      return id;
    };


    /*
      @emits   Deferer#error
      @emits   Deferer#done
     */

    Deferer.prototype.finish = function(id) {
      var index;
      index = this.unfinishedTasks.indexOf(id);
      this.lastFinish = id;
      if (0 > index && 0 > this.canceledTasks.indexOf(id)) {
        this.emit('error', new UnknownTaskError(id));
        return false;
      }
      this.unfinishedTasks.splice(index, 1);
      this.emit('progress', this);
      if (this.unfinishedTasks.length === 0) {
        if (this.timeoutHandle) {
          clearTimeout(this.timeoutHandle);
          this.timeoutHandle = null;
        }
        this.emit('done', this);
      }
      return true;
    };


    /*
      @emits   Deferer#error
      @emits   Deferer#done
     */

    Deferer.prototype.cancelTask = function(id) {
      var index;
      index = this.tasks.indexOf(id);
      if (0 > index) {
        this.emit('error', new UnknownTaskError(id));
        return false;
      } else {
        this.index.splice(index, 1);
      }
      index = this.unfinishedTasks.indexOf(id);
      if (0 <= index) {
        this.unfinishedTasks.splice(index, 1);
      }
      this.canceledTasks.push(id);
      if (this.unfinishedTasks.length === 0) {
        if (this.timeoutHandle) {
          clearTimeout(this.timeoutHandle);
          this.timeoutHandle = null;
        }
        this.emit('done', this);
      }
      return true;
    };

    return Deferer;

  })(EventEmitter);

  module.exports = Deferer;

}).call(this);
