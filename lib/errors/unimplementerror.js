(function() {
  var UnimplementError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  UnimplementError = (function(_super) {
    __extends(UnimplementError, _super);

    function UnimplementError(message) {
      UnimplementError.__super__.constructor.apply(this, arguments);
      Error.captureStackTrace(this, UnimplementError);
      this.name = this.constructor.name;
      this.message = message;
    }

    return UnimplementError;

  })(Error);

  module.exports = UnimplementError;

}).call(this);
