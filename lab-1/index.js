const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "uber-eats-clone.ckjsjavkgqyy.us-east-2.rds.amazonaws.com",
	user: "admin",
	password: "cmpe273_lab",
	database: "uber-eats",
});

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected!");
});
