(function() {
  var CommandManager, Set;

  Set = require("simplesets");

  CommandManager = (function() {
    function CommandManager() {
      this.routerSet = new Set;
      this.pluginSet = new Set;
      this.eventLine = [];
      this.nameMap = {};
      this.eventLine.push("text");
      this.eventLine.push("pre_parse");
      this.eventLine.push("parse");
      this.eventLine.push("post_parse");
      this.eventLine.push("pre_find_command");
      this.eventLine.push("find_command");
      this.eventLine.push("post_find_command");
      this.eventLine.push("pre_permission");
      this.eventLine.push("permission");
      this.eventLine.push("post_permission");
      this.eventLine.push("pre_handle_command");
      this.eventLine.push("handle_command");
      this.eventLine.push("post_handle_command");
    }


    /*
     *just use the same code as plugins
    registerRouter:()->
    
     *use router instance
    unloadRouter:()->
    
    getRouters:()->
     */

    CommandManager.prototype.registerModules = function(module) {};

    CommandManager.prototype.disableModule = function(module) {};

    CommandManager.prototype.enableModule = function(module) {};

    CommandManager.prototype.reloadModule = function(module) {};

    CommandManager.prototype.unloadModule = function(module) {};

    CommandManager.prototype.getModules = function() {};

    CommandManager.prototype.listen = function(type, listener, fullName, filter) {};

    CommandManager.prototype.handle = function(event) {};

    CommandManager.prototype.requestCommand = function(command, fullName) {
      var avaliableName;
      avaliableName = null;
      if (this.nameMap[command] && this.nameMap[command] !== fullName) {
        avaliableName = command + "_";
      } else {
        avaliableName = command;
      }
      this.nameMap[command] = fullName;
      return command;
    };

    CommandManager.prototype.getCommandOwner = function(command) {
      return this.nameMap[command];
    };

    return CommandManager;

  })();

  module.exports = CommandManager;

}).call(this);
