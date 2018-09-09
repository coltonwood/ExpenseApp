const { ApolloServer } = require('apollo-server-lambda')
const resolvers = require('./resolvers/resolvers')
const typeDefs = require('./schema/schema')

// apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: false
})

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true
	}
})