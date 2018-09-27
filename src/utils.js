
import { promises as fs } from 'fs'
import { join } from 'path'

const SCHEMA_DIRECTORY = join(__dirname, '../schema')

export async function readTypeDefs() {
    const typeDefs = []
    const directory = await fs.readdir(SCHEMA_DIRECTORY).catch(console.error)
    for(const filename of directory) {
        const fileBuffer = await fs.readFile(join(SCHEMA_DIRECTORY, filename), 'utf8').catch(console.error)
        typeDefs.push(fileBuffer)
    }
    return typeDefs
}