var db = require("../common/database.js");

var conn = db.getConnection();

function addUser(user){
	if (user){
		return new Promise (function(resole, reject){
			let query = conn.query('INSERT INTO users SET ?', user, function(err, results, fields){
				if (err){
					reject(err);
				}else{
					resole(results.insertID);
				}
			});
		});
	}else{
		return false
	}
}

function getUserByEmail(email){
	if (email){
		return new Promise (function (resole, reject){
			let query = conn.query('SELECT * FROM users WHERE ?', {email: email}, function (err, results, fields){
				if (err){
					reject(err);
				}else{
					resole(results);
				}
			});
		});
	}else{
		return false
	}
}


function getAllUsers(){
	return new Promise (function(resole, reject){
		let query = conn.query('SELECT * FROM users ', function(err, users){
			if (err){
				reject(err)
			}else{
				resole(users);
			}
		});
	});
}
module.exports = {
	addUser: addUser,
	getUserByEmail: getUserByEmail,
	getAllUsers: getAllUsers
}