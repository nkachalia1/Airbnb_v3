import React from 'react';
import { Link } from 'react-router-dom';

import BenchDetail from './bench_detail';
import BenchMap from '../bench_map/bench_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const ListingShow = ({ listing, listingId, fetchListing, reviews }) => {
  const listings = {
    [listingId]: listing
  };

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
