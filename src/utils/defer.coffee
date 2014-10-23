{EventEmitter} = require 'events'
UnknownTaskError = require "../errors/unknowntaskerror.js"
DuplicatedTaskError = require "../errors/duplicatedtaskerror.js"

rand = ()->
  id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace /s/g, ()->
    (Math.floor (Math.random() * 16)).toString(16)
  return id

###
  Defer tasks and handle timeout
  @class
  @param   {int} defaultTimeout - The default timeout.
  @emits   Deferer#timeout
  @emits   Deferer#progress
###
class Deferer extends EventEmitter
  constructor: (@defaultTimeout = 60000)->
    @count = 0
    @tasks = []
    @unfinishedTasks = []
    @canceledTasks = []
    @lastFinish = null
    @dueTime = null
    @timeoutHandle = null
    @startTime = Date.now()
  
  ###
    @emits  Deferer#error
  ###
  addTask: (id = rand(), timeout = @defaultTimeout)->
    if 0 > @tasks.indexOf id
      @tasks.push id
    else
      @emit 'error', new DuplicatedTaskError id
    
    if 0 > @unfinishedTasks.indexOf id
      @unfinishedTasks.push id
    
    newDueTime = Date.now() + timeout
    
    if not @timeoutHandle or newDueTime > @dueTime
      if @timeoutHandle
        clearTimeout @timeoutHandle
      newHandle = ()=>
        if @unfinishedTasks.length > 0
          @emit 'timeout', @
      @timeoutHandle = setTimeout newHandle
    return id

  ###
    @emits   Deferer#error
    @emits   Deferer#done
  ###
  finish: (id)->
    index = @unfinishedTasks.indexOf id
    @lastFinish = id
    if 0 > index && 0 > @canceledTasks.indexOf(id)
      @emit 'error', new UnknownTaskError id
      return false
    
    @unfinishedTasks.splice index, 1
    @emit 'progress',  @
    
    if  @unfinishedTasks.length == 0
      if @timeoutHandle
        clearTimeout @timeoutHandle
        @timeoutHandle = null
      @emit 'done', @
    
    return true
  
  ###
    @emits   Deferer#error
    @emits   Deferer#done
  ###
  cancelTask: (id)->
    index = @tasks.indexOf id
    if 0 > index
      @emit 'error', new UnknownTaskError id
      return false
    else
      @index.splice index, 1
    
    index = @unfinishedTasks.indexOf id
    if 0 <= index
      @unfinishedTasks.splice index, 1
    
    @canceledTasks.push id
    
    if  @unfinishedTasks.length == 0
      if @timeoutHandle
        clearTimeout @timeoutHandle
        @timeoutHandle = null
      @emit 'done', @
    
    return true

module.exports = Deferer