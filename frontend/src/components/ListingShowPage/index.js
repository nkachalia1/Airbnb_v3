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

  const generateCalendarDays = () => {
    const daysInMonth = 30; // Number of days in November 2023
    const startingDay = 3; // Wednesday (0-indexed: Sunday - 0, Monday - 1, Tuesday - 2, Wednesday - 3)

    const days = [];
    for (let i = 1; i <= daysInMonth + startingDay; i++) {
      if (i > startingDay) {
        days.push(<div key={i - startingDay}>{i - startingDay}</div>);
      } else {
        days.push(<div key={i}></div>);
      }
    }

    return days;
  };

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
                <p className="location">{listing.location}</p>
                <p className="beds-baths">{listing.beds} beds | {listing.baths} baths</p>
                <div className="image-container">
                  <div className="image-container1">
                    <img className="listing-image" src={listing.imageUrl1} alt="Listing" />
                  </div>
                  <div className="image-container2">
                    <img className="listing-image" src={listing.imageUrl2} alt="Listing" />
                  </div>
                  <div className="image-container3">
                    <img className="listing-image" src={listing.imageUrl3} alt="Listing" />
                  </div>
                  <div className="image-container4">
                    <img className="listing-image" src={listing.imageUrl4} alt="Listing" />
                  </div>
                </div>
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
                <p className="rating">Rating: {listing.rating}</p>
                <p className="price">${listing.price} / night</p>
              </div>
              <div className="description">
                <p>{listing.description}</p>
              </div>
              <div className="reviews">
                {/* <h2>Reviews</h2> */}
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <div className="review-box">
                      <p className="review-body">{review.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div class="calendar">
  <div class="month">
    <h2>November 2023</h2>
  </div>
  <div class="weekdays">
    <div>Sun</div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
  </div>
  <div class="days">
  {generateCalendarDays()}
    <div class="other-month">1</div>
    <div class="other-month">2</div>
    <div class="other-month">3</div>
    <div class="other-month">4</div>
    <div class="other-month">5</div>
    <div class="other-month">6</div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ListingShow;
