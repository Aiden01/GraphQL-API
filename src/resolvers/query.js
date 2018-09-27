
import got from 'got'

async function posts(_obj, { id }, _ctx, _info) {

    const response = await got('https://jsonplaceholder.typicode.com/posts', {
        json: true
    }).catch(console.error)

    const posts = response.body

    if(typeof id !== 'undefined') {
        return posts.filter(post => post.id === id)
    }
    return posts
}

async function users(_obj, { id }, _ctx, _info) {
    const response = await got('https://jsonplaceholder.typicode.com/users', { json: true }).catch(console.error)
    const users = response.body
    if(typeof id !== 'undefined') {
        return users.filter(({ id }) => id === id)
    }
    return users
}

export const Query = {
    posts,
    users
}
