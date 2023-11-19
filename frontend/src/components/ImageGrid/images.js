import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./images.css";

function ImageGrid() {
    debugger
    const listings = useSelector(state => {
        return Object.values(state.listings);
    });

    useEffect( () => {
        // fetch the listings
    })

  return (
      <div class="image-grid">
        {
            listings.map( listing => (<div class="grid-item"><a href="#"><img src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="Image 1"/>
            Add columns of location, price, and rating in curly (listing.price, listing.etc) </a></div>)
            )
        }
  </div>
  );
}

export default ImageGrid;
