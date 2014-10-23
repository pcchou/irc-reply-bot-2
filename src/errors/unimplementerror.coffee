class UnimplementError extends Error
 constructor: (message)->
  super
  Error.captureStackTrace this, UnimplementError
  
  @name = this.constructor.name
  @message = message

module.exports = UnimplementError
