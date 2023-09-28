import React, { useState } from 'react';
import './emergency.css'; 

const EmergencyPage = () => {
  const [locationInfo, setLocationInfo] = useState(null);

  const handleEmergencyClick = () => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const locationData = { latitude, longitude };

        // Send the location data to the service center
        sendLocationData(locationData);

        // Optionally, you can also display the location information to the user
        setLocationInfo(locationData);
      });
    } else {
      alert('Geolocation is not available in your browser.');
    }
  };

  const sendLocationData = (locationData) => {
    // Implement the logic to send location data to the nearest service center.
    // This may involve making an API request to a service center's endpoint.
    // Ensure you have a backend server set up for this purpose.
    // For this example, we'll assume an imaginary function sendLocationToServiceCenter.

    // sendLocationToServiceCenter(locationData);
  };

  return (
    <div className="emergency-page">
      <h1>Emergency Page</h1>
      <button onClick={handleEmergencyClick}>Send Location</button>

      {locationInfo && (
        <div>
          <h2>Your Location Information:</h2>
          <p>Latitude: {locationInfo.latitude}</p>
          <p>Longitude: {locationInfo.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default EmergencyPage;
