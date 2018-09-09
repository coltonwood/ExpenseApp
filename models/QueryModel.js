const querying = require('./UniversalQuery')
module.exports = {
	// dev queries for testing
	getAllUsers: (db) => {
		let query = 'SELECT * FROM users'
		return querying(db, query, [])
	},
	getAllExpenses: (db) => {
		let query = 'SELECT id, description, amount, category, subcategory, owner, date FROM expenses'
		return querying(db, query, [])
	},
	getAllCategories(db, args) {
		let query = 'SELECT id, name, owner, budget FROM categories'
		return querying(db, query, [])
	},
	getAllSubCategories(db, args) {
		let query = 'SELECT * FROM subcategories'
		return querying(db, query, [])
	},
	
	// queries for production
	getUserById: (db, userid) => {
		let query = 'SELECT id, username, email FROM users WHERE id=?'
		return querying(db, query, [userid])
	}
}