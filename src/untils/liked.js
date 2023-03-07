export const setLike = (commentData, id) => {
    const result = commentData;
    result.likes.push(id);
    return result;
}

export const removeLike = (commentData, id) => {
    const result = commentData;
    result.likes = result.likes.filter(likeId => likeId !== id)
    return result;
}
