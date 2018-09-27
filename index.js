import { ApolloServer } from 'apollo-server'

import { Schema } from './src/schema'



const server = new ApolloServer({
    schema: Schema
})

server.listen()
    .then(url => console.log(`The server is listening on ${url.url}`))