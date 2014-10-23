UnimplementError = require "../errors/unimplementerror.js"
AbstractError = require "../errors/abstracterror.js"

class IRouter
  constructor:
    @emit 'error', new AbstractError (this.constructor.name)
    