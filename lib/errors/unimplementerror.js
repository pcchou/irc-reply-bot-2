
/*
var util = require('util');

function UnimplementError(message) {
  Error.call(this); //super constructor
  Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in error object

  this.name = this.constructor.name; //set our function��s name as error name.
  this.message = message; //set the error message
}

// inherit from Error
util.inherits(UnimplementError, Error);


module.exports = UnimplementError
 */

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
