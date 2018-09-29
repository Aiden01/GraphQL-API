import { ApolloServer } from 'apollo-server'
import * as Mutation from './mutations'
import { Schema } from './schema'



const server = new ApolloServer({
    schema: Schema,
    rootValue: Mutation
})

server.listen()
    .then(url => console.log(`The server is listening on ${url.url}`))