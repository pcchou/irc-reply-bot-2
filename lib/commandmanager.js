(function() {
  var CommandManager, Set;

  Set = require("simplesets");

  CommandManager = (function() {
    function CommandManager() {
      this.routerSet = new Set;
      this.pluginSet = new Set;
      this.eventLine = [];
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

    CommandManager.prototype.registerRouter = function() {};

    CommandManager.prototype.unloadRouter = function() {};

    CommandManager.prototype.getRouters = function() {};

    CommandManager.prototype.registerPlugins = function(plugin) {};

    CommandManager.prototype.disablePlugin = function(plugin) {};

    CommandManager.prototype.enablePlugin = function(plugin) {};

    CommandManager.prototype.reloadPlugin = function(plugin) {};

    CommandManager.prototype.getPlugins = function() {};

    CommandManager.prototype.listen = function(type, listener, filter) {};

    CommandManager.prototype.handle = function(event) {};

    return CommandManager;

  })();

  module.exports = CommandManager;

}).call(this);
