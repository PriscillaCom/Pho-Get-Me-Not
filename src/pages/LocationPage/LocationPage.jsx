import React from 'react';
import GoogleLocation from '../../components/GoogleLocation/Location';
import LocationDescription from '../../components/LocationDescription/LocationDescription';
import './LocationPage.css';

const LocationPage = () => (
    <div className="locationPage">
        <GoogleLocation/>
        <LocationDescription/>
    </div>
);

export default LocationPage;