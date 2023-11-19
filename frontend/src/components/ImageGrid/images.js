import React, { useEffect, useState, useDebugValue } from 'react';
import { NavLink } from 'react-router-dom';
import "./images.css";
import { fetchListings } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

const selectListingsData = state => state.listings

export const makeSelectListings = createSelector(
    selectListingsData,
    listings => {
        if (listings) {
            return Object.values(listings);
        } else {
            return [];
        }
    }
);

function ImageGrid() {
    const listings = useSelector(makeSelectListings);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchListings());
    }, [dispatch]);

    return (
        <div className="image-grid">
            {
                listings.map(listing => (
                    <div className="grid-item" key={listing.id}>
                        <a href="#">
                            <img src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt={`Image ${listing.id}`} />
                            {/* Add columns of location, price, and rating */}
                            <p>Location: {listing.location}</p>
                            <p>Price: {listing.price}</p>
                            <p>Rating: {listing.rating}</p>
                        </a>
                    </div>
                ))
            }
        </div>
    );

}

export default ImageGrid;
