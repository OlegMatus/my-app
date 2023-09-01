const getCommentsPost = async (id) => {
    return await fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
};

export {
    getCommentsPost
}