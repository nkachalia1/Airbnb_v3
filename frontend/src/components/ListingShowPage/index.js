import React, { useEffect, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// import ListingDetail from './listing_detail';
// import ListingMap from '../listing_map/listing_map';
// import ReviewFormContainer from './review_form_container';
// import { ProtectedRoute } from '../../util/route_util';
// import { ReviewLink } from '../../util/link_util';

const ListingShow = ({ listing, listingId, fetchListing, reviews }) => {
  const listings = {
    [listingId]: listing
  };

  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchListing(id))
  }, [id]);

  return(
    <div className="single-listing-show">
      <div className="single-listing-map">
        <Link to="/">Back to Listings Index</Link>
        <ListingMap
          listings={listings}
          listingId={listingId}
          singleListing={true}
          fetchListing={fetchListing}
        />
      </div>
      <div className="right-half listing-details">
        <ListingDetail listing={listing} reviews={reviews} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/listings/${listingId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/listings/:listingId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default ListingShow;
