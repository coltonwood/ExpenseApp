const getDBDriver = require('../connectors/mysql')
const CategoryModel = require('../models/CategoryModel')

module.exports = {
	// fetch owner (User) of category
	owner(category) {
		return CategoryModel.getOwner(getDBDriver(), category.owner)
			.then(res => res)
			.catch(err => {})
	},
	subcategories(category) {
		return CategoryModel.getSubCategories(getDBDriver(), category.id)
			.then(res => res)
			.catch(err => {})
	}
}