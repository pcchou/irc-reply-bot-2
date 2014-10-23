(function() {
  var DuplicatedTaskError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DuplicatedTaskError = (function(_super) {
    __extends(DuplicatedTaskError, _super);

    function DuplicatedTaskError(message) {
      DuplicatedTaskError.__super__.constructor.apply(this, arguments);
      Error.captureStackTrace(this, DuplicatedTaskError);
      this.name = this.constructor.name;
      this.message = message;
    }

    return DuplicatedTaskError;

  })(Error);

  module.exports = DuplicatedTaskError;

}).call(this);
