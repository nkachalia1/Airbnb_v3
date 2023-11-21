export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

// export const receiveListing = ({ listing, reviews, authors }) => ({
//   type: RECEIVE_LISTING,
//   listing,
//   reviews,
//   authors,
// });

export const receiveListing = data => ({
    type: RECEIVE_LISTING,
    listing: data.listing,
    reviews: data.reviews
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
        dispatch(receiveListings(fetchedListings));
    }
}

export const fetchListing = (id) => async dispatch => {
    const response = await fetch(`/api/listings/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveListing(data));
    }
}

const listingsReducer = (state = {}, action) => {
    const newState = {...state};
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            newState[action.listing.id] = action.listing;
            return newState;
            // const newListing = { [action.listing.id]: action.listing };
            // return Object.assign({}, state, newListing);
        default:
            return state;
    }
  };

  export default listingsReducer;
