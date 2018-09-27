import { makeExecutableSchema } from 'graphql-tools'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import * as resolvers from './resolvers'



const SCHEMA_DIRECTORY = join(__dirname, '../schema')

const Schema = makeExecutableSchema({
    typeDefs: readdirSync(SCHEMA_DIRECTORY).map(filename => readFileSync(join(SCHEMA_DIRECTORY, filename), 'utf8')),
    resolvers
})

export { Schema }
