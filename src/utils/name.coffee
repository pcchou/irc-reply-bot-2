class Name
  constructor:()->
  
  parse:(name)->
    if 'object' is typeof name
      return name
    res = {}
    
    if name.search('#') < 0
      res.tags = []
    else
      res.tags = (name.split "#")[1..]
      res.tags = res.tags.filter (item)->
        if item is ''
          false
        else
          true
      name = (name.split "#")[0]
    
    if name.search('::') < 0
      res.nameSpace = null
    else
      res.nameSpace = (name.split "::")[0]
      name = (name.split "::")[1..].join('::')
    
    res.name = name
    
    
    res.name = res.name || null
    res.nameSpace = res.nameSpace || null
    
    return res
  
  match:(name, rule)->
    name = @parse name
    rule = @parse rule
    
    if rule.name
      if rule.name isnt name.name
        return false
    
    if rule.nameSpace
      if rule.nameSpace isnt name.nameSpace
        return false
    
    if rule.tags.length > 0
      for tag in rule.tags
        if 0 > name.tags.indexOf tag
          return false
    
    true
  
  stringify:(item)->
    if 'string' is typeof item
      item = @parse item
    
    item.name = item.name || ""
    
    full = item.name
    
    if item.nameSpace
      full = item.nameSpace + "::" + full
      
    if (Array.isArray item.tags) && item.tags.length > 0
      full = full + '#' + item.tags.join "#"
    
    return full

module.exports = new Name