//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB server');
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('598f03d98aa1da4805915a5f')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('598f02c37a4ec64949c630bf')
	}, {
		$inc: {
			age: 10
		},
		$set: {
			name: 'Natalie' 
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	//db.close();
});