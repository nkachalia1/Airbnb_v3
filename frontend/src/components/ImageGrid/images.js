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
        <div className="image-grid">
            {
                listings_array.map(listing => (
                    <div className="grid-item" key={listing.id}>
                        <a href="#">
                            <img src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt={`Image ${listing.id}`} />
                            {/* Add columns of location, price, and rating */}
                            <p>{listing.title}</p>
                       y     <p>Rating: {listing.rating}</p>
                        </a>
                    </div>
                ))
            }
        </div>
    );

}

export default ImageGrid;
