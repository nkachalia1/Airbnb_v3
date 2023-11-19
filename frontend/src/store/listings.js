import { Dispatch } from "react";

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = ({ listing, reviews, authors }) => ({
  type: RECEIVE_LISTING,
  listing,
  reviews,
  authors,
});

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const createReview = (review) => async dispatch => {
    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const createdReview = await response.json();
        dispatch(receiveReview(createdReview));
    }
}

export const createListing = (listing) => async dispatch => {
    const response = await fetch(`/api/listings`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(listing)
    })

    if (response.ok) {
        const createdListing = await response.json();
        dispatch(receiveListing(createdListing));
    }
}

export const fetchListings = () => async dispatch => {
    const response = await fetch(`/api/listings`);

    if (response.ok) {
        const fetchedListings = await response.json();
        console.log(fetchedListings);
        // dispatch(receivePosts(fetchedPosts)); // same as dispatch(type: RECEIVE_POSTS key: fetchedPosts)
    }
}

export const fetchListing = (id) => async dispatch => {
    const response = await fetch(`/api/listings/${id}`);

    if (response.ok) {
        const fetchedListing = await response.json();
        console.log(fetchedListing);
        // dispatch(receivePosts(fetchedPosts)); // same as dispatch(type: RECEIVE_POSTS key: fetchedPosts)
    }
}

const listingsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing };
            return Object.assign({}, state, newListing);
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = Object.assign({}, state);
            newState[review.listing_id].reviewIds.push(review.id);
            newState[review.listing_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
  };

  export default listingsReducer;
