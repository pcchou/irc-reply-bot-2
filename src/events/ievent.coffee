{EventEmitter} = require 'events'
UnimplementError = require "../errors/unimplementerror.js"
AbstractError = require "../errors/abstracterror.js"

#defer : the event need to be handled and alter other action, but it can't run in sync
#async : the event need to be handled but will not alter other action, and it can't run in sync

class IEvent extends EventEmitter
  constructor: ()->
    @emit 'error', new AbstractError (this.constructor.name)

  getType: ()->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "getType")

  setType: (type)->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "setType")

  defer: (timewaitOveride)->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "defer")
    #emit defer_finish when all defered runner complete
    #emit defer_timeout when defered runner failed to response in time
    #return function
  async: (timewaitOveride)->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "async")
    #emit async_finish when all async runner complete
    #emit async_timeout when async runner failed to response in time
    #return function

  getStat: ()->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "getStat")
    #return one word in ['defer', 'async', 'idle']

  destroy: ()->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "destroy")
    #remove all listeners and related reference to router...etc

module.exports = IEvent