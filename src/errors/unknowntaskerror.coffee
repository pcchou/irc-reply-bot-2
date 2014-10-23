class UnknownTaskError extends Error
 constructor: (message)->
  super
  Error.captureStackTrace this, UnknownTaskError
  
  @name = this.constructor.name
  @message = message

module.exports = UnknownTaskError
