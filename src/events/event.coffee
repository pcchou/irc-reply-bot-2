IEvent = require "./ievent.js"

class Event extends IEvent
  constructor: (options)->
    @type = options.type
  
  getType: ->
    return @type
  
  setType: (type)->
    @type = type.toString()
  