export const fetchListings = () => async dispatch => {
    const response = await fetch(`/api/listings`);

    if (response.ok) {
        const fetchedListings = await response.json();
        console.log(fetchedListings);
        // dispatch(receivePosts(fetchedPosts)); // same as dispatch(type: RECEIVE_POSTS key: fetchedPosts)
    }
}
