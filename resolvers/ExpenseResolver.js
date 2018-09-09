const getDBDriver = require('../connectors/mysql')
const ExpenseModel = require('../models/ExpenseModel')

module.exports = {
	// fetch owner (User) of expense
	owner(expense) {
		return ExpenseModel.getOwner(getDBDriver(), expense.owner)
			.then(res => res)
			.catch(err => {})
	},
	// fetch expense category
	category(expense) {
		return ExpenseModel.getCategory(getDBDriver(), expense.category)
			.then(res => res)
			.catch(err => {})
	},
	// fetch expense subcategory
	subcategory(expense) {
		return ExpenseModel.getSubCategory(getDBDriver(), expense.subcategory)
			.then(res => res)
			.catch(err => {})
	}
}