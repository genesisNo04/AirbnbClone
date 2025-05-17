import React, { Component, useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import Search from "./Search";

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div class="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button onClick={() => setShowSearch(!showSearch)} variant="outlined" className="banner_searchButton">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    );
}

export default Banner;