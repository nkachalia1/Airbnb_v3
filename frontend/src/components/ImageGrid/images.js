import React, { useEffect, useState, useDebugValue } from 'react';
import { NavLink } from 'react-router-dom';
import "./images.css";
import { fetchListings } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

// const selectListingsData = state => state.listings

// export const makeSelectListings = createSelector(
//     selectListingsData,
//     listings => {
//         if (listings) {
//             return Object.values(listings);
//         } else {
//             return [];
//         }
//     }
// );

function ImageGrid() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings || {});
    const listings_array = Object.values(listings);

    useEffect( () => {
        dispatch(fetchListings());
    }, [dispatch]);

    return (
        <div className="page-container">
          <div className="image-grid">
            {listings_array.map(listing => (
              <div className="grid-item" key={listing.id}>
                <a href={`/listings/${listing.id}`}>
                  <img src={`https://airbnb-seeds.s3.amazonaws.com/${listing.id}.jpeg`} alt={`Image ${listing.id}`} />
                  <div className="text-content">
                    <div className="title-and-rating">
                      <p className="title">{listing.title}</p>
                      <p className="rating">
                        {listing.rating} <span className="star"></span>
                      </p>
                    </div>
                    <p className="location">{listing.location}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      );


}

export default ImageGrid;
