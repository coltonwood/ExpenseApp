const getDBDriver = require('../connectors/mysql')
const SubCategoryModel = require('../models/SubCategoryModel')

module.exports = {
	// fetch owner (Sategory) of subcategory
	owner(subcategory) {
		return SubCategoryModel.getOwner(getDBDriver(), subcategory.owner)
			.then(res => res)
			.catch(err => {})
	}
}