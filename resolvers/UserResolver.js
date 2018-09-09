const getDBDriver = require('../connectors/mysql')
const UserModel = require('../models/UserModel')

module.exports = {
	// fetch expenses of user
	expenses(user) {
		return UserModel.getExpenses(getDBDriver(), user.id)
			.then(res => res)
			.catch(err => [])
	},
	// fetch categories of user
	categories(user) {
		return UserModel.getCategories(getDBDriver(), user.id)
			.then(res => res)
			.catch(err => [])
	}
}