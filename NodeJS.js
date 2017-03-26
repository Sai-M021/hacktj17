/**
 * Created by Vinay on 3/25/17.
 */


<script>

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://vbhaip:SV9yS3d7VKEmib8z@cluster0-shard-00-00-8dljh.mongodb.net:27017,cluster0-shard-00-01-8dljh.mongodb.net:27017,cluster0-shard-00-02-8dljh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';



var insertDocument = function(db, callback) {
    db.collection('users').insertOne( {
        "vinay": "password"
    }, function(err, result) {
        assert.equal(err, null);

        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});

// var insertDocuments = function(db, callback) {
// Get the documents collection
//                var collection = db.collection('Users');
//                // Insert some documents
//                collection.insertOne(
//                {username:"vbhaip", password:"1234"});
//
//                 db.close();


//, function(err, result) {
//assert.equal(err, null);
//assert.equal(3, result.result.n);
//assert.equal(3, result.ops.length);
//console.log("Inserted 3 documents into the collection");
//callback(result);
//});
// }

</script>