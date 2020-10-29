const { ApolloServer, gql } = require('apollo-server-lambda');
const faunadb = require('faunadb'),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
    allAuthors: [Author!]
  }
  type Author {
    id: ID!
    name: String!
    married: Boolean!
  }
`

const authors = [
  { id: 1, name: 'Terry Pratchett', married: false },
  { id: 2, name: 'Stephen King', married: true },
  { id: 3, name: 'JK Rowling', married: false },
]

const resolvers = {
  Query: {
    allAuthors: () => {
      return authors
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
