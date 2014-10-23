Class Name
  constructor:()->
  
  parse:(name)->
    res = {}
    
    if name.search('#') < 0
      res.tags = []
    else
      res.tags = (name.split "#")[1..]
      name = (name.split "#")[0]
    
    if name.search('.') < 0
      res.nameSpace = null
    else
      res.nameSpace = name.split "."
      name = (name.split ".")[1..].join('.')
    
    res.name = name
    
    return res
  
  match:(name, rule)->
    

EventEmitter2 = new Name