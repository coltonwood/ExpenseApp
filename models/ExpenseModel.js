const querying = require('./UniversalQuery')
module.exports = {
	getOwner(db, ownerId) {
		let query = 'SELECT id, username, email FROM users WHERE id=?'
		return querying(db, query, [ownerId], true)
	},
	getCategory(db, categoryId) {
		let query = 'SELECT id, name, owner, budget FROM categories WHERE id=?'
		return querying(db, query, [categoryId], true)
	},
	getSubCategory(db, subCategoryId) {
		let query = 'SELECT id, name, owner, budget FROM subcategories WHERE id=?'
		return querying(db, query, [subCategoryId], true)
	}
}