(function() {
  var AbstractError, IRouter, UnimplementError;

  UnimplementError = require("../errors/unimplementerror.js");

  AbstractError = require("../errors/abstracterror.js");

  IRouter = (function() {
    var _class;

    function IRouter() {
      return _class.apply(this, arguments);
    }

    _class = IRouter.emit('error', new AbstractError(IRouter.constructor.name));

    return IRouter;

  })();

}).call(this);
