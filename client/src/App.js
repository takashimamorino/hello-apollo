import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client'

function App() {
  const client = new ApolloClient({uri: 'http://localhost:4000', cache: new InMemoryCache})

  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  )
}

const Books = () => {
  const FETCH_BOOKS = gql`
    query Books {
      books {
        title,
        author
      }
    }
  `

  const { loading, error, data } = useQuery(FETCH_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <>
      {data.books.map((book, index) => {
        return (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        )
      })}
    </>
  )
}



export default App
