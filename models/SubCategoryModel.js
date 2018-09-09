const querying = require('./UniversalQuery')
module.exports = {
	getOwner(db, ownerId) {
		let query = 'SELECT id, name, owner, budget FROM categories WHERE id=?'
		return querying(db, query, [ownerId], true)
	}
}