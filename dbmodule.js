var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");
exports.authenticateUser = function(email, password, response) {
	db.cars.find({ "email": email, "password": password },
	  function(err, users) {
		if (err || !users) {
		  response.write("Not authorized user");
		  response.end();
		} else if (users.length == 0) {
		  response.write("Not authorized user");
		  response.end();
		} else {
		  // If the user is authorized, set the redirect response
		  response.writeHead(302, { 'Location': 'index.html' }); // Change '/dashboard.html' to the desired URL
		  response.end();
		}
	  });
  }
  exports.saveUser = function(name, password, email, phone, response) {
	console.log("Saving user to MongoDB");
	db.cars.insert({ name, password, email, phone }, function(err, saved) {
	  if (err || !saved) {
		console.error(err);
		response.status(500).send("Error saving user");
	  } else {
		// Redirect to login.html
		response.redirect('/login.html');
	  }
	});
  };
  
  