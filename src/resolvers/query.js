
import { Posts } from './post'

function posts(obj, { id }, ctx, _info) {
    if(typeof id !== 'undefined') {
        return Posts.filter(post => post.id === id)
    }
    return Posts
}

export const Query = {
    posts
}
