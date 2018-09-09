const querying = require('./UniversalQuery')
module.exports = {
	getExpenses(db, userId) {
		let query = 'SELECT id, amount, description, category, subcategory, owner FROM expenses WHERE owner=?'
		return querying(db, query, [userId])
	},
	getCategories(db, userId) {
		let query = 'SELECT * FROM categories WHERE owner=?'
		return querying(db, query, [userId])
	}
}