const {mongoose} = require('../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');
var id = '598f1f5d2fd28e396f5cd2f9';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then ( (todos) => {
// 	console.log("todos",todos);	
// });

// Todo.findOne({
// 	_id: id
// }).then ( (todo) => {
// 	console.log("todo",todo);	
// })

User.findById(id).then ( (todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log("todo",todo);	
}).catch((e) => {
	console.log(e);
});