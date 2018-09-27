
export const Posts = [
    { id: 1, userId: 2, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
    { id: 2, userId: 2, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
    { id: 3, userId: 1, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
    { id: 4, userId: 2, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
    { id: 5, userId: 1, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
    { id: 6, userId: 2, title: 'Lorem ipsum', body: 'Lorem ipsum a bit longer because this is the body'}, 
]

const Users = [{
    id: 1, username: 'bob', email: 'bob', 
    id: 2, username: 'bob2', email: 'bob2', 
}]

function user({ userId }, _args, _context) {
    return Users.find(({ id }) => id === userId)
}

export const Post = {
    user
}