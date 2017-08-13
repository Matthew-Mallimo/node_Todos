const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} =  require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then( (doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (err) => {
		res.send(err);
	});
});

app.get('/todos/:id', (req,res) => {
	var id = req.params.id;
	if(ObjectID.isValid(id)){
		Todo.findById(id).then( (todo) => {
			if(todo){
				res.status(200).send({todo});
			} else {
				res.status(404).send();
			}
		}, (err) => {
			res.status(400).send();
		});
	} else {
		res.status(404).send();
	}
});

app.listen(3000, () => {
	console.log("Started on port 3000");
});

module.exports = {
	app
};