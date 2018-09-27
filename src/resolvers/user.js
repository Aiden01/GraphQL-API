
import got from 'got'

async function posts({ id }, _args, _ctx) {
    const response = await got('https://jsonplaceholder.typicode.com/posts', { json: true }).catch(console.error)
    const posts = response.body
    return posts.filter(({ userId }) => userId === id)
}

export const User = {
    posts
}