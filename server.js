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
  'ipad2',
  'ipad3',
  'ipad4',
  'ipadmini',
  'ipadmini2',
  'ipadmini3',
  'ipadair',
  'ipadair2',
  'macbookmacbook',
  'macbookpro',
  'macbookair'
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

// *************** macbook *****************

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

app.listen(5000);
console.log('Server runing: localhost:5000');


