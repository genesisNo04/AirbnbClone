import React, { Component } from 'react';
import './Home.css';
import Banner from './Banner';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner />
                <div className="home_section">

                </div>
            </div>
        );
    }
}

export default Home;