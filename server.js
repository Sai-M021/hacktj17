const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('/Users/Vinay/IdeaProjects/hacktj17/images'));


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname) + '/Login.html');

});





app.get('/Homescreen.html', (request, response) => {

    response.sendFile(path.resolve(__dirname) + '/Homescreen.html');
});

app.get('/Community.html', (request, response) => {

    response.sendFile(path.resolve(__dirname) + '/Community.html');
});

app.get('/Tools.html', (request, response) => {

    response.sendFile(path.resolve(__dirname) + '/Tools.html');
});


app.get('/Learn.html', (request, response) => {


    response.sendFile(path.resolve(__dirname) + '/Learn.html');
});


app.get('/Login.html', (request, response) => {


    response.sendFile(path.resolve(__dirname) + '/Login.html');
});


app.get('/Signup.html', (request, response) => {


    response.sendFile(path.resolve(__dirname) + '/Signup.html');
});

app.post('/signup', (request, response) => {

    const url = 'mongodb://vbhaip:SV9yS3d7VKEmib8z@cluster0-shard-00-00-8dljh.mongodb.net:27017,cluster0-shard-00-01-8dljh.mongodb.net:27017,cluster0-shard-00-02-8dljh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

var user = request.body.username;
var pass = request.body.password;

var first = request.body.first;
var last = request.body.last;



    var insertDocument = function(db, callback) {


        db.collection('users').insertOne( {
            "first" : first, "last" : last, "user" : user, "pass" : pass

        }, function(err, result) {
            assert.equal(err, null);

            console.log("Inserted a document into the collection.");
            callback();
        });

    };


    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    //console.log(db.collection('users').find());


    insertDocument(db, function() {
        console.log(db);
    });

    db.collection('users').find().toArray(function(err, docs) {
        console.log(docs)
        db.close();
    });
});

response.sendFile(path.resolve(__dirname) + '/Login.html');

});



app.post('/login', (request, response) => {

    const url = 'mongodb://vbhaip:SV9yS3d7VKEmib8z@cluster0-shard-00-00-8dljh.mongodb.net:27017,cluster0-shard-00-01-8dljh.mongodb.net:27017,cluster0-shard-00-02-8dljh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

var user = request.body.username;
var pass = request.body.password;




var insertDocument = function(db, callback) {
    //
    // console.log("ayyyy " . db.collection('users').find({ "user" : {$eq : user}}));
    //
    // if(db.collection('users').find({ user : user}) == 1){
    //
    //     if(db.collection('users').find({ pass : pass}) == 1){
    //         response.sendFile(path.resolve(__dirname) + '/Homescreen.html');
    //     }
    //     else{
    //         response.sendFile(path.resolve(__dirname) + '/Login.html')
    //     }
    //
    //
    // }
    // else{
    //     response.sendFile(path.resolve(__dirname) + '/Signup.html')
    // }

    db.collection('users').find({ "user" : user}).toArray( function(err, doc) {

        console.log("doc: ", doc)


        if( doc.length == 0 ) {

            console.log("user wrong, pass not checked");
            response.sendFile(path.resolve(__dirname) + '/Signup.html')
            // do whatever you need to do if it's not there
        }
        else {
            db.collection('users').find({ "user" : user, "pass" : pass}).toArray( function(err2, doc2) {
                if( doc2.length == 0 ) {

                    console.log("user right, pass wrong");
                    response.sendFile(path.resolve(__dirname) + '/Login.html')

                    // do whatever you need to do if it's not there
                }
                else {

                    console.log("user right, pass right");
                    response.sendFile(path.resolve(__dirname) + '/Homescreen.html');


                }
            // do whatever you need to if it is there
        });
        db.close();
    }
    });



    // db.collection('users').insertOne( {
    //       "user" : user, "pass" : pass
    //
    //   }, function(err, result) {
    //       assert.equal(err, null);
    //
    //       console.log("Inserted a document into the restaurants collection.");
    //       callback();
    //     });

    callback();
    };

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    //console.log(db.collection('users').find());


      insertDocument(db, function() {
          console.log(db);
      });

    db.collection('users').find().toArray(function(err, docs) {
        console.log(docs)
        db.close();
    });
});


  console.log("Username", user);
  console.log("Password", pass);

});

app.get('/something', (request, response) => {
  const url = 'mongodb://vbhaip:SV9yS3d7VKEmib8z@cluster0-shard-00-00-8dljh.mongodb.net:27017,cluster0-shard-00-01-8dljh.mongodb.net:27017,cluster0-shard-00-02-8dljh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
  //
  // var insertDocument = function(db, callback) {
  //   db.collection('users').insertOne( {
  //       "vinay": "password"
  //   }, function(err, result) {
  //       assert.equal(err, null);
  //
  //       console.log("Inserted a document into the restaurants collection.");
  //       callback();
  //     });
  // };
  //
  // MongoClient.connect(url, function(err, db) {
  //   assert.equal(null, err);
  //   insertDocument(db, function() {
  //       db.close();
  //   });
  // });

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection('users').find().toArray(function(err, docs) {
        response.send(docs);
        db.close();
      });
    });

  // response.send('Hello from Express!')
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
