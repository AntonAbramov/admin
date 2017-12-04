var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('serviceiphone', [
  'iphone3',
  'iphone4',
  'iphone4s',
  'iphone5',
  'iphone5s',
  'iphone5c',
  'iphone6',
  'iphone6plus',
  'iphone6s',
  'iphone6splus',
  'iphonese',
  'iphone7',
  'iphone7plus',
  'iphone8',
  'iphone8plus',
  'iphone10',
  'ipad2',
  'ipad3',
  'ipad4',
  'ipadmini',
  'ipadmini2',
  'ipadmini3',
  'ipadair',
  'ipadair2',
  'mini4',
  'ipadpro129',
  'ipadpro97',
  'macbookmacbook',
  'macbookpro',
  'macbookproretina',
  'macbookair',
  'macbookproa1278',
  'macbookproa1286',
  'macbookproretinaa1398',
  'macbookproretinaa1425',
  'macbookproretinaa1502',
  'macbookaira1304',
  'macbookaira1369',
  'macbookaira1370',
  'macbookaira1465',
  'macbookaira1466',
  'imaca1224',
  'imaca1225',
  'imaca1311',
  'imaca1312',
  'imaca1418',
  'imaca1419'
]);
//var db = mongojs('contaclist', ['contacts']);

app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/public/views');
app.set('views engine', 'html');

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.render('index.html', {
    title: "Это Комментарии"
  });
});

// ************ START *************

app.get('/iphone/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'iphone' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/iphone/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'iphone' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/iphone/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'iphone' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/iphone/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'iphone' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/iphone/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'iphone' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** IPAD *****************

app.get('/ipad/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'ipad' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/ipad/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'ipad' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/ipad/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'ipad' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/ipad/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'ipad' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/ipad/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'ipad' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** macbook old *****************

app.get('/macbook/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'macbook' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/macbook/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'macbook' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/macbook/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbook' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/macbook/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbook' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/macbook/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbook' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************

// *************** macbook Pro *****************

app.get('/macbookpro/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'macbookpro' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/macbookpro/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'macbookpro' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/macbookpro/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookpro' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/macbookpro/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookpro' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/macbookpro/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookpro' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************

// *************** macbook Pro RETINA *****************

app.get('/macbookproretina/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'macbookproretina' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/macbookproretina/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'macbookproretina' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/macbookproretina/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookproretina' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/macbookproretina/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookproretina' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/macbookproretina/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookproretina' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************


// *************** macbook Air *****************

app.get('/macbookair/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'macbookair' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/macbookair/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'macbookair' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/macbookair/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookair' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/macbookair/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookair' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/macbookair/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbookair' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************

// *************** iMac *****************

app.get('/imac/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'imac' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/imac/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'imac' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/imac/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'imac' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/imac/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'imac' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/imac/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'imac' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************

// *************** macbook simple *****************

app.get('/macbooksimple/:model', function (req, res) {
  console.log('I reveived a GET request');
  var dbName = 'macbooksimple' + req.params.model;
  db[dbName].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

app.post('/macbooksimple/:model', function (req, res) {
  console.log(req.body);
  var dbName = 'macbooksimple' + req.params.model;
  db[dbName].insert(req.body, function (err, doc) {
    res.json(doc);
    console.log(doc);
  })

});

app.delete('/macbooksimple/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbooksimple' + req.params.model;
  db[dbName].remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/macbooksimple/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbooksimple' + req.params.model;
  db[dbName].findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/macbooksimple/:model/:id', function (req, res) {
  var id = req.params.id;
  var dbName = 'macbooksimple' + req.params.model;
  db[dbName].findAndModify({query:{_id: mongojs.ObjectId(id)},
    update: {$set: {
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
      idx: req.body.idx
    }
    },
    new: true

  }, function (err, doc) {
    res.json(doc);
  });
});

// *************** END *****************

app.listen(5000);
console.log('Server runing: localhost:5000');


