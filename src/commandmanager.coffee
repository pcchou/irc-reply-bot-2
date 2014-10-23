Set = require "simplesets"

class CommandManager
  constructor: ()->
    @routerSet = new Set
    @pluginSet = new Set
    @eventLine = []
    @nameMap = {}
    
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
    
  ###
  #just use the same code as plugins
  registerRouter:()->
  
  #use router instance
  unloadRouter:()->
  
  getRouters:()->
  ###
  
  registerModules:(module)->
  
  #use [namespace.]plugin_name[#flag] or module instance, if blank, disable all module
  disableModule:(module)->
  
  #use [namespace.]plugin_name[#flag] or module instance, if blank, enable all disabled module
  enableModule:(module)->
  
  #use [namespace.]plugin_name[#flag] or module instance, if blank, reload all module
  reloadModule:(module)->
  
  #use [namespace.]plugin_name[#flag] or module instance, if blank, unload all module
  unloadModule:(module)->
  
  getModules:->
  
  listen:(type, listener, fullName, filter)->
  
  handle:(event)->
  
  #this method solve the command conflict if multiple commands requested the same command
  requestCommand:(command, fullName)->
    avaliableName = null
    if @nameMap[command] and @nameMap[command] != fullName
      avaliableName = command + "_"
    else
      avaliableName = command
    
    @nameMap[command] = fullName
    
    return command

  getCommandOwner:(command)->
    return @nameMap[command]

module.exports = CommandManager