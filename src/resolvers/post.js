
import got from 'got'

async function user({ userId }, _args, _context) {
    const response = await got('https://jsonplaceholder.typicode.com/users', { json: true }).catch(console.error)
    const users = response.body
    return users.find(({ id }) => id === userId)
}

export const Post = {
    user
}