//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Users').deleteMany({name: 'Matthew'}).then((result) => {
	 	console.log(result);
	});
	db.collection('Users').deleteOne({_id: new ObjectID('598e45fe73c9e14cf0d45c0b')}).then((result) => {
	 	console.log(result);
	});

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })
	//db.close();
});