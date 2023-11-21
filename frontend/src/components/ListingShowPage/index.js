import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchListing } from '../../store/listings';
import { useSelector } from 'react-redux/es/hooks/useSelector';

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
    <div className="single-listing-show">
      <div className="single-listing-map">
        <Link to="/">Back to Listings Index</Link>
      </div>
      <div className="listing-details">
        <h2>{listing.title}</h2>
        {/* <p>{`https://airbnb-seeds.s3.amazonaws.com/${listingId}.jpg`}</p> */}
        <p>{listing.description}</p>
        <p>Location: {listing.location}</p>
        <p>Rating: {listing.rating}</p>
        <p>Price: {listing.price}</p>
        <p>Beds: {listing.beds}</p>
        <p>Baths: {listing.baths}</p>
        <img style={{width: "150px"}} src={listing.image_url} alt="Listing" />
        <p>Reviews: {reviews.map(review => review.body)} </p>
      </div>
    </div>
  );
};

export default ListingShow;
