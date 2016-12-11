//app.js
var express = require('express');
var app = express();
var path = require('path');
var serv = require('http').Server(app);
var mysql = require("mysql");

// All HTML files
app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/client/index.html')); });
app.get('/login', function(req, res) { res.sendFile(path.join(__dirname + '/client/login/login.html')); });
app.get('/createAccount', function(req, res){ res.sendFile(path.join(__dirname + '/client/create-account/createAccount.html')); });
app.get('/mainMenu', function(req, res) { res.sendFile(path.join(__dirname + '/client/main-menu/mainMenu.html')); });
app.get('/game', function(req, res) { res.sendFile(path.join(__dirname + '/client/game/game.html')); });

app.use('/client', express.static(__dirname + '/client'));

var User = 	require("./controllers/user.js");
var Pokemon = require("./controllers/pokemon.js");


var SOCKET_LIST = {};

serv.listen(2000);
console.log("Server started.");

var numPokemon=0;
var timer = 100;
var timer2 = 0;

var verifypassword = function(username, password, callback){
	var connection = mysql.createConnection({
		  host     : 'mysql.cs.iastate.edu',
		  user     : 'dbu319t33',
		  password : '2*STaspu',
		  database : 'dbu319t33'
	});

	connection.connect();
	
	connection.query("SELECT _password from User_Info WHERE username ="+ "'" + username+ "'" +";", function(err, rows, fields) {
		if (!err){
			var string = JSON.stringify(rows);
			var json = JSON.parse(string);
			if (JSON.stringify(rows) === "[]"){
				console.log("username was not in database... create new account");
				correct = 0;
			}
			else{
				var correctpassword = json[0]._password;
				console.log("entered password: " + password);
				console.log("correct password: " + correctpassword)
				if (password === correctpassword){
					console.log(true);
					correct = 1; 
				}
				else{
					console.log(false);
					correct = 2;
				}
			}
			return callback(correct);
		}
	});
	connection.end();
}


var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket) {
	socket.id = Math.random();
	SOCKET_LIST[socket.id] = socket;

	

	socket.on('disconnect', function() {
		delete SOCKET_LIST[socket.id];
	});

	socket.on('sendLoginData',function(data){
		 var username = data.username;
	     var password = data.password;
	     verifypassword(username, password, function(correct){
	      	 sendCorrectPassword(username, correct);
	    });  
    });	
	
	socket.on('cord', function(data){
		var x = data.x;
		var y = data.y;
		var user = data.user;
		console.log(x +" " +y);
		var arr = Pokemon.checkIfClicked(x,y);
		
		var pokeName = Pokemon.getName(arr[1]);
		
		if(arr[0]){
			var connection = mysql.createConnection({
				host     : 'mysql.cs.iastate.edu',
				user     : 'dbu319t33',
				password : '2*STaspu',
				port     : '3306',
				database : 'db319t33'
			});
			console.log(user +" "+ arr[0] + " " + arr[1] +" "+ pokeName);
			var info = [user, arr[1], pokeName];
			
			connection.connect();
				//connection.query("INSERT INTO Rooms SET Room_Id = ?, Room_Object = ?", roominfo, function(err, result) {

			console.log("INSERT INTO Pokemon SET NAME = ?, POKEMON = ?, POKEMON_NAME = ?",info);
			//connection.query("INSERT INTO Pokemon (NAME, POKEMON, POKEMON_NAME) VALUES ("+ "'"+ user + "'" + ",'"+ arr[1] + "','"+ pokeName +"'" + ");", function(err, rows, fields) {
				connection.query("INSERT INTO Pokemon SET NAME = ?, POKEMON = ?, POKEMON_NAME = ?",info, function(err) {
				if (err){
					console.log("ERROR");
					console.log(err);
				}
				else console.log("You caught a "+ pokeName);
				});
			connection.end();
		}
	});
	
	function sendCorrectPassword(username, correct) {
		console.log(correct);
		var correct = correct;
		var sendpasswordverification = {correct: correct, username: username};
		socket.emit('sendpasswordverification', sendpasswordverification)
	}
		
});


function generatePokemon(){
	console.log("Generate");
		numPokemon++
		var num = Math.floor((Math.random() * 151) + 1);
		Pokemon.pokemon(numPokemon, num);
		
}

setInterval(function() {
	
	if(timer++ > 100){
		generatePokemon();
		timer = 0;
	}
	
	if(timer2++ > 10000){
		Pokemon.deletePokemon();
		numPokemon = 0;
		timer2 = 0;
	}
	
	console.log("this");
	var pack = {
		pokemon:Pokemon.updatePokemon(),
	}
	
	for ( var i in SOCKET_LIST) {
			var socket = SOCKET_LIST[i];
			socket.emit('newPositions', pack);
		}
	
}, 1000/25);