class DuplicatedTaskError extends Error
 constructor: (message)->
  super
  Error.captureStackTrace this, DuplicatedTaskError
  
  @name = this.constructor.name
  @message = message

module.exports = DuplicatedTaskError
