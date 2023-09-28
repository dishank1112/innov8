import React from 'react';
import './NearestHospitals.css'; // Import your CSS file for styling

function NearestHospitals() {
  // Your fake hospital data
  const fakeHospitals = [
    {
        name: 'Poki Jaising',
        address: '143, Jaisingh Road',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302013',
        phone: '1800223778',
        image: '/commponents/images/newimage/aone.jpg', // Update with the correct image path
        
      },
      {
        name: 'Ayush kendra',
        address: '77, Narsingh Vihar',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302013',
        phone: '1800239236',
        image: '/images/hospital2.jpg', // Update with the correct image path
      }, {
        name: 'Sanjeev kendra',
        address: 'Narcircle, Jahanpura',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302017',
        phone: '1800876765',
        image: '/images/hospital1.jpg',
      },
      {
        name: 'aam Dh',
        address: 'Shrimal Road',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302017',
        phone: '1800121121',
        image: '/images/hospital2.jpg',
      },
      {
        name: 'AAurved ',
        address: 'Pareek Colony',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302011', 
        phone: '1800121232',
        image: '/images/hospital3.jpg',
      },
      {
        name: 'Vidhyang Jain Charity Clinic',
        address: 'Vrindavan Gali',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302013',
        phone: '1800234123',
        image: '/images/hospital4.jpg',
      },
      {
        name: 'Yadav Hospital',
        address: 'Kamaali Mohalla',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302012',
        phone: '1800234231',
        image: '/images/hospital5.jpg',
      },
      {
        name: 'Saharan Seva Kendra',
        address: 'Vaishnavi Raod',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302017',
        phone: '1800678675',
        image: '/images/hospital6.jpg',
      },
      {
        name: 'Shreyansh Hospitals',
        address: 'Ojal Road, Sneha Colony',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302014',
        phone: '1800456345',
        image: '/images/hospital7.jpg',
      },
      {
        name: 'Sawai Man Singh Hospital',
        address: 'Sanganeri Road',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302017',
        phone: '1800800800',
        image: '/images/hospital8.jpg',
      },
      {
        name: 'Dishank TGJ International Healthcare Services Ltd.',
        address: 'Gojo Colony, Sasukepura',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302012',
        phone: '1800111222',
        image: '/images/hospital9.jpg',
      },
      {
        name: 'Central Government Healthcare Services',
        address: 'Bakebihari Mohalla',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302017',
        phone: '1800900899',
        image: '/images/hospital10.jpg',
      },
      {
        name: 'Chouhan Aspatal',
        address: 'Yashveer Nagar',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302013',
        phone: '1800780987',
        image: '/images/hospital11.jpg',
      },
      {
        name: 'Avyukta Ayurveda Centre',
        address: 'Stuti Vihar',
        city: 'Jaipur',
        state: 'Rajasthan',
        zip: '302013',
        phone: '1800455223',
        image: '/images/hospital12.jpg',
      },
      {
        name: 'Fake Hospital 13',
        address: '456 Pinecone Lane',
        city: 'Valleytown',
        state: 'State',
        zip: '53579',
        phone: '555-555-5555',
        image: '/images/hospital13.jpg',
      },
      {
        name: 'Fake Hospital 14',
        address: '789 Oakwood Drive',
        city: 'Riverside',
        state: 'State',
        zip: '24680',
        phone: '555-555-5555',
        image: '/images/hospital14.jpg',
      },
      {
        name: 'Fake Hospital 15',
        address: '101 Maple Street',
        city: 'Beachville',
        state: 'State',
        zip: '86420',
        phone: '555-555-5555',
        image: '/images/hospital15.jpg',
      },
      {
        name: 'Fake Hospital 16',
        address: '234 Cedar Avenue',
        city: 'Greenville',
        state: 'State',
        zip: '97531',
        phone: '555-555-5555',
        image: '/images/hospital16.jpg',
      },
      {
        name: 'Fake Hospital 17',
        address: '567 Pine Road',
        city: 'Countryside',
        state: 'State',
        zip: '31415',
        phone: '555-555-5555',
        image: '/images/hospital17.jpg',
      },
      {
        name: 'Fake Hospital 18',
        address: '890 Elm Lane',
        city: 'Hometown',
        state: 'State',
        zip: '92635',
        phone: '555-555-5555',
        image: '/images/hospital18.jpg',
      },
    
  ];

  return (
    <div style={{
        backgroundImage: 'url(./images/5490812.jpg)',
    }} className="nearest-hospitals">
        <h1 className="headline">Nearest Service</h1>
    
    

        <div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
<br />,
<br />

     <button type="button" class="btn btn-outline-success">Filter</button>
      <div id="container">
     <iframe
          class="harshit"
          src="https://www.embedmymap.com/?gclid=EAIaIQobChMI2MOeuc_KgQMVuqtmAh0tHQiJEAAYASAAEgKfT_D_BwE"
          frameborder="0"
        ></iframe>
        
      <div className="hospital-list">
        {fakeHospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <img src={hospital.image} alt={hospital.name} />
          
            <div className="hospital-info">
              <strong>{hospital.name}</strong>
              <p>{hospital.address}</p>
              <p>
                {hospital.city}, {hospital.state} {hospital.zip}
              </p>
              <p>Phone: {hospital.phone}</p>
            </div>
            
          </div>
          
        ))}
      </div>
      </div>
    </div>
  );
}

export default NearestHospitals;

