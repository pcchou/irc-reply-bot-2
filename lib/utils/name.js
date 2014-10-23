(function() {
  var EventEmitter2;

  Class(Name({
    constructor: function() {},
    parse: function(name) {
      var res;
      res = {};
      if (name.search('#') < 0) {
        res.tags = [];
      } else {
        res.tags = (name.split("#")).slice(1);
        name = (name.split("#"))[0];
      }
      if (name.search('.') < 0) {
        res.nameSpace = null;
      } else {
        res.nameSpace = name.split(".");
        name = (name.split(".")).slice(1).join('.');
      }
      res.name = name;
      return res;
    },
    match: function(name, rule) {}
  }));

  EventEmitter2 = new Name;

}).call(this);
