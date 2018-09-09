const getDBDriver = require('../connectors/mysql')
const QueryModel = require('../models/QueryModel')

module.exports = {
	users(obj, args, context) {
		if (args.id)
			return QueryModel.getUserById(getDBDriver(), args.id)
				.then(res => res)
				.catch(err => [])
		// dev
		else 
			return QueryModel.getAllUsers(getDBDriver(), null)
				.then(res => res)
				.catch(err => [])
	},
	expenses(obj, args, context) {
		return QueryModel.getAllExpenses(getDBDriver())
			.then(res => res)
			.catch(err => [])
	},
	categories(obj, args, context) {
		return QueryModel.getAllCategories(getDBDriver(), args)
			.then(res => res)
			.catch(err => [])
	},
	subcategories(obj, args, context) {
		return QueryModel.getAllSubCategories(getDBDriver(), args)
			.then(res => res)
			.catch(err => [])
	}
}