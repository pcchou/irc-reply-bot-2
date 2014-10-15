###
var util = require('util');

function UnimplementError(message) {
  Error.call(this); //super constructor
  Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in error object

  this.name = this.constructor.name; //set our function¡¦s name as error name.
  this.message = message; //set the error message
}

// inherit from Error
util.inherits(UnimplementError, Error);


module.exports = UnimplementError
###

class AbstractError extends Error
 constructor: (message)->
  super
  Error.captureStackTrace this, AbstractError
  
  @name = this.constructor.name
  @message = message

module.exports = AbstractError
