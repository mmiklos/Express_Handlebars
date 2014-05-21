var express = require('express');
var app = express();
var hbs = require('hbs');
var fs = require('fs');

var jsonData;
fs.readFile(__dirname + '/json/jobject.json', handleJSON);

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static(__dirname + '/public'));

function handleJSON(err, data){
	if (err) throw err;
	jsonData = JSON.parse(data);

	app.get('/', function(req, res) {
   		res.render("index", {data:jsonData, list:jsonData.testAgain, header:jsonData.test.title, title:jsonData.test.h1});
   		//Available in Handlebars:
   		//{{data}} -> the entire object
   		//{{list}} -> contains the array list the data
   		//{{header}} -> the title, to be used in <title> tags
   		//{{title}} -> to be used in <h1> tags
	});
}

app.listen(3000);

//Much thanks to Raymond Camden's Introduction to Express article
//http://code.tutsplus.com/tutorials/introduction-to-express--net-33367
//and stackoverflow