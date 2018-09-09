const getDBDriver = require('../connectors/mysql')
const MutationModel = require('../models/MutationModel')

module.exports = {
	
	createUser(_, args, context) {
		return MutationModel.createUser(getDBDriver(), args)
			.then(res => res)
			.catch(err => null)
	}
}