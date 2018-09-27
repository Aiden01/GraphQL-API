
import got from 'got'

export async function createPost({ post: { title, body, userId } }) {

    console.log(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const response = await got(`https://jsonplaceholder.typicode.com/users/${userId}`, { json: true }).catch(console.error)
    if(response.statusCode === 404) {
        throw new Error(`User with id ${userId} does not exist.`)
    } else {
        const user = response.body
        const postCreatedResponse = await got.post('https://jsonplaceholder.typicode.com/posts', { 
            body: JSON.stringify({ title, body, userId }) 
        })
        return {
            id: postCreatedResponse.body.id,
            title: title,
            body: body,
            userId: userId,
            ...user
        }
    }

}