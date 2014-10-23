(function() {
  var UnknownTaskError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  UnknownTaskError = (function(_super) {
    __extends(UnknownTaskError, _super);

    function UnknownTaskError(message) {
      UnknownTaskError.__super__.constructor.apply(this, arguments);
      Error.captureStackTrace(this, UnknownTaskError);
      this.name = this.constructor.name;
      this.message = message;
    }

    return UnknownTaskError;

  })(Error);

  module.exports = UnknownTaskError;

}).call(this);
