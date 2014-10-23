

class EventEmitter2
  constructor:()->
    @eventListerners = {}
    @maxListener = 10
  
  
  addListener:(type, listener, fullName, filter)->
    @prepareListener(type)
    if @eventListerners[type].length + 1 > @maxListener
      console.log "warning listener of #{type} exceed the max limit of #{@maxListener}, 
        their may potential memory leaks in the code"
        
    @eventListerners[type].push
      
      
      
  removeListener:(listerner)->
  
  removeListenerByName:()->
  
  emit:()->
  
  once:()->
  
  removeAllListeners:()->
  
  setMaxListeners:()->
  
  listeners:()->
  
  listenersByName:()->
  
  prepareListener:(eventName)->
    if !@eventListerners[eventName]
      @eventListerners[eventName] = []
      
  EventEmitter2::on = addListener
  EventEmitter2::off = removeListener
  EventEmitter2::offByName = removeListenerByName
  
  
module.exports = EventEmitter2