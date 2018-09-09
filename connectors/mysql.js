const mysql = require('mysql')

function startDriver() {
	return mysql.createConnection({
		host: process.env.DBHOST,
		user: process.env.DBUSER,
		password: process.env.DBPASSWORD,
		database: process.env.DB
	})
}

let driver
module.exports = function getDBDriver() {
	if (!driver) driver = startDriver()
	return driver
}