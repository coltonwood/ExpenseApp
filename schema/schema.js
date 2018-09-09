const { gql } = require('apollo-server-lambda')
const a = gql`
	# users
	type User {
		id: ID!
		username: String!
		email: String!
		#password: String!
		expenses: [Expense]!
		categories: [Category]!
	}

	# expenses
	type Expense {
		id: ID!
		amount: Float!
		description: String
		category: Category!
		subcategory: SubCategory
		owner: User!
	}

	# expense categories
	type Category {
		id: ID!
		name: String!
		owner: User!
		budget: Float!
		subcategories: [SubCategory]!
	}

	# expense subcategory
	type SubCategory {
		id: ID!
		name: String!
		owner: Category!
		budget: Float!
	}
	
	# build out query
	type Query {
		users(id: Int): [User]!
		expenses: [Expense]!
		categories: [Category]!
		subcategories: [SubCategory]!
	}

	# modify database
	type Mutation {
		createUser(
			user: NewUser
		): User!
	}

	input NewUser {
		username: String!
		email: String!
		password: String!
	}
`
module.exports = a