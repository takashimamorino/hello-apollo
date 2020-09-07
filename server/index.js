const {
  ApolloServer,
  gql
} = require('apollo-server')

const typeDefs = gql `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [{
    title: 'Title01',
    author: 'Author01',
  },
  {
    title: 'Title02',
    author: 'Author02',
  },
];

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({
  url
}) => {
  console.log(`Apollo Server ready at ${url} `)
})
