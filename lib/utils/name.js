(function() {
  var Name;

  Name = (function() {
    function Name() {}

    Name.prototype.parse = function(name) {
      var res;
      if ('object' === typeof name) {
        return name;
      }
      res = {};
      if (name.search('#') < 0) {
        res.tags = [];
      } else {
        res.tags = (name.split("#")).slice(1);
        res.tags = res.tags.filter(function(item) {
          if (item === '') {
            return false;
          } else {
            return true;
          }
        });
        name = (name.split("#"))[0];
      }
      if (name.search('::') < 0) {
        res.nameSpace = null;
      } else {
        res.nameSpace = (name.split("::"))[0];
        name = (name.split("::")).slice(1).join('::');
      }
      res.name = name;
      res.name = res.name || null;
      res.nameSpace = res.nameSpace || null;
      return res;
    };

    Name.prototype.match = function(name, rule) {
      var tag, _i, _len, _ref;
      name = this.parse(name);
      rule = this.parse(rule);
      if (rule.name) {
        if (rule.name !== name.name) {
          return false;
        }
      }
      if (rule.nameSpace) {
        if (rule.nameSpace !== name.nameSpace) {
          return false;
        }
      }
      if (rule.tags.length > 0) {
        _ref = rule.tags;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (0 > name.tags.indexOf(tag)) {
            return false;
          }
        }
      }
      return true;
    };

    Name.prototype.stringify = function(item) {
      var full;
      if ('string' === typeof item) {
        item = this.parse(item);
      }
      item.name = item.name || "";
      full = item.name;
      if (item.nameSpace) {
        full = item.nameSpace + "::" + full;
      }
      if ((Array.isArray(item.tags)) && item.tags.length > 0) {
        full = full + '#' + item.tags.join("#");
      }
      return full;
    };

    return Name;

  })();

  module.exports = new Name;

}).call(this);
