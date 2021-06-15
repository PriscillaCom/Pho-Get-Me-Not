import React from 'react';
import './LocationDescription.css';

const LocationDescription = () => (
    <div className='locationDescription'>
        <h2>Restaurant Location</h2>
            <p><strong>Address:</strong> 1132 Leland Avenue, CA, 93274</p>
        <br></br>
        <h2>Business Information</h2>
            <p><strong>Phone Number:</strong> (123) 456-7890</p>
        <br></br>
        <p>
            <strong>Hours of Operation:</strong> 10 AM - 8 PM Tues-Sun
            <br></br>
            <strong>CLOSED MONDAYS</strong>
        </p>
        <br></br>
        <div>
            <h2>Amenities</h2>
            <div className='amenities-container'>
                <ul className='amenities-list'>
                    <li>Accepts Credit Cards</li>
                    <li>Accepts Android/Apple Pay</li>
                    <li>Sit-Down Dining</li>
                    <li>Street Parking</li>
                </ul>
                <br></br>
                <ul className='covid-list'>
                    <li>Social distancing enforced</li>
                    <li>Staff wears masks</li>
                    <li>Temperature checks</li>
                    <li>Hand sanitizers provided</li>
                </ul>
            </div>
        </div>
    </div>
)

export default LocationDescription;