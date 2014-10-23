class AbstractError extends Error
 constructor: (message)->
  super
  Error.captureStackTrace this, AbstractError
  
  @name = this.constructor.name
  @message = message

module.exports = AbstractError
