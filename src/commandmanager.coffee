Set = require "simplesets"

class CommandManager
  constructor: ()->
    @routerSet = new Set
    @pluginSet = new Set
    @eventLine = []
    
    #create event.currentText
    #create event.sender
    @eventLine.push "text"#the original event
    
    #create event.args
    @eventLine.push "pre_parse"#keyword search, text replace
    @eventLine.push "parse"
    @eventLine.push "post_parse"
    
    #create event.command
    #create event.tempPermission
    @eventLine.push "pre_find_command"#sudo, append permission, upgrade command
    @eventLine.push "find_command"
    @eventLine.push "post_find_command"#ban, set command to null, so it is never a command and never be handled
    
    #create event.hasPermission
    #create event.hasPermission
    @eventLine.push "pre_permission"
    @eventLine.push "permission"
    @eventLine.push "post_permission"
    
    #create event.handled
    @eventLine.push "pre_handle_command"
    @eventLine.push "handle_command"#log... etc here
    @eventLine.push "post_handle_command"#sudo, reset permission, print help if exec failed
    
    
  registerRouter:()->
  
  #use router instance
  unloadRouter:()->
  
  getRouters:()->
  
  registerPlugins:(plugin)->
  
  #use either namespace, namespace.plugin_name or plugin instance, if blank, disable all plugins
  disablePlugin:(plugin)->
  
  #use either namespace, namespace.plugin_name or plugin instance, if blank, enable all disabled plugins
  enablePlugin:(plugin)->
  
  #use either namespace, namespace.plugin_name or plugin instance, if blank, reload all plugins
  reloadPlugin:(plugin)->
  
  getPlugins:->
  
  listen:(type, listener, filter)->
  
  handle:(event)->
  


module.exports = CommandManager