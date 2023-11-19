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

export const createReview = review => dispatch => (
    csrfFetch(`/api/listings/${review}/`).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchListings = filters => dispatch => (
    csrfFetch(`/api/listings/${filters}/`).then(listings => (
    dispatch(receiveListings(listings))
  ))
);

export const fetchListing = id => dispatch => (
    csrfFetch(`/api/listings/${id}/`).then(payload => (
    dispatch(receiveListing(payload))
  ))
);

export const createListing = listing => dispatch => (
    csrfFetch(`/api/listings/${listing}/`).then(listing => (
    dispatch(receiveListing(listing))
  ))
);
