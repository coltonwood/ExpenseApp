const querying = require('./UniversalQuery')
module.exports = {
	getOwner(db, ownerId) {
		let query = 'SELECT id, username, email FROM users WHERE id=?'
		return querying(db, query, [ownerId], true)
	},
	getSubCategories(db, categoryId) {
		let query = 'SELECT * FROM subcategories WHERE owner=?'
		return querying(db, query, [categoryId])
	}
}