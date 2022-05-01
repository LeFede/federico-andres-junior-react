import { 
  ApolloClient, 
  //gql, 
  HttpLink, 
  InMemoryCache,
  //ApolloLink,
  //ApolloError
} from "@apollo/client";


const cache = new InMemoryCache()
const link = new HttpLink({
  uri: process.env.APOLLO_ENDPOINT ?? 'http://localhost:4000'
})

const client = new ApolloClient({
  cache,
  link
})


export default client