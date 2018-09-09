const CategoryResolver = require('./CategoryResolver')
const ExpenseResolver = require('./ExpenseResolver')
const QueryResolver = require('./QueryResolver')
const SubCategoryResolver = require('./SubCategoryResolver')
const UserResolver = require('./UserResolver')
const MutationResolver = require('./MutationResolver')

// resolver functions for schema
module.exports = {
	Category: CategoryResolver,
	Expense: ExpenseResolver,
	Query: QueryResolver,
	SubCategory: SubCategoryResolver,
	User: UserResolver,
	Mutation: MutationResolver
}