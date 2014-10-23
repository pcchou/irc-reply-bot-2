(function() {
  var AbstractError, UnimplementError, imodule;

  UnimplementError = require("../errors/unimplementerror.js");

  AbstractError = require("../errors/abstracterror.js");

  imodule = (function() {
    function imodule() {
      this.emit('error', new AbstractError(this.constructor.name));
    }

    imodule.prototype.getNamespace = function() {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "getNamespace"));
    };

    imodule.prototype.getName = function() {
      return this.emit('error', new UnimplementError(this.constructor.name + " / " + "getName"));
    };

    imodule.prototype.getFlags = function() {
      return [];
    };

    imodule.prototype.getFullName = function() {
      return "" + (this.getNamespace()) + "." + (this.getNamespace());
    };

    imodule.prototype.getRequiredModules = function() {
      return [];
    };

    imodule.prototype.getRequestedCommandName = function() {
      return [];
    };

    imodule.prototype.load = function(manager) {
      return this.commandNameMap = {};
    };

    return imodule;

  })();

}).call(this);
