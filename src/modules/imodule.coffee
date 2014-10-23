UnimplementError = require "../errors/unimplementerror.js"
AbstractError = require "../errors/abstracterror.js"


class imodule
  constructor: ()->
    @emit 'error', new AbstractError (this.constructor.name)
  
  getNamespace: ()->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "getNamespace")
    
  getName: ()->
    @emit 'error', new UnimplementError (this.constructor.name + " / " + "getName")
  
  getFlags: ()->
    return []
    #return any flags it had
  
  getFullName: ()->
    return "#{@getNamespace()}.#{@getNamespace()#{if @getFlags().length == 0 then '' else '#' + (@getFlags().join '#')}}"
    
  getRequiredModules: ()->
    return []
    #return any module it requires by return "namespace.name#flag" or "name#flag" or "name"

  getRequestedCommandName: ()->
    return []
    #return any commands it wish to reqister
    
  load: (manager)->
    @commandNameMap = {}


module.exports = imodule