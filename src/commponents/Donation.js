import React, { useState } from 'react';
import './DonationPage.css'; // Import your CSS styles here

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonate = () => {
    // Implement your donation logic here, e.g., send the donationAmount to your server
    alert(`Thank you for donating $${donationAmount}!`);
  };

  return (
    <div className="donation-page">
      <h1>Calamity Relief Fund</h1>
      <p>Your contribution can make a difference.</p>

      <div className="donation-form">
        <label htmlFor="amount">Donation Amount:</label>
        <input
          type="number"
          id="amount"
          value={donationAmount}
          onChange={handleDonationChange}
        />
        <button onClick={handleDonate}>Donate</button>
      </div>

      <p className="donation-message">
        Thank you for supporting our cause. Your donation will help those in
        need during calamities.
      </p>
    </div>
  );
}

export default DonationPage;
