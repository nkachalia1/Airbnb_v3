import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchListing } from '../../store/listings';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './listingShow.css';

const ListingShow = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListing(listingId));
  }, [dispatch, listingId]);

  const reviews = useSelector(state => {
    return Object.values(state.reviews || {}).filter(review => review.listingId == listingId);
  });

  const listing = useSelector(state => state.listings?.[listingId] || {});

  return (
    <div className="listing-show-container">
    {/* Back to Listings link */}
    <div className="back-link">
      <Link to="/">Back to Listings</Link>
    </div>
    <div className="listing-details">
        <div className="listing-left">
          {Object.keys(listing).length > 0 ? (
            <>
              <div className="listing-header">
                <h1 className="listing-title">{listing.title}</h1>
                <p className="location">{listing.location}</p> {/* Moved location here */}
                <p className="beds-baths">{listing.beds} beds | {listing.baths} baths</p>
                <img className="listing-image" src={listing.imageUrl} alt="Listing" />
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="listing-right">
          {Object.keys(listing).length > 0 ? (
            <>
              <div className="listing-info">
                <p className="location">{listing.location}</p>
                <p className="rating">Rating: {listing.rating}</p>
                <p className="price">Price: {listing.price}</p>
              </div>
              <div className="description">
                <h2>Description</h2>
                <p>{listing.description}</p>
              </div>
              <div className="reviews">
                <h2>Reviews</h2>
                {reviews.map(review => (
                  <p key={review.id} className="review-body">{review.body}</p>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingShow;
