import React from "react";
import "./Nearest Hospitals.css"; // Import your CSS file for styling
import myImage from "./images/newimage/IMG-20230927-WA0012.jpg";
import myImage1 from "./images/newimage/IMG-20230927-WA0013.jpg";
import myImage2 from "./images/newimage/IMG-20230927-WA0014.jpg";
import myImage3 from "./images/newimage/IMG-20230927-WA0015.jpg";
import myImage4 from "./images/newimage/IMG-20230927-WA0017.jpg";
import myImage5 from "./images/newimage/IMG-20230927-WA0018.jpg";
import myImage6 from "./images/newimage/IMG-20230927-WA0019.jpg";
import myImage7 from "./images/newimage/IMG-20230927-WA0012.jpg";
import myImage8 from "./images/newimage/IMG-20230927-WA0031.jpg";
import myImage9 from "./images/newimage/IMG-20230927-WA0030.jpg";
import myImage10 from "./images/newimage/IMG-20230927-WA0028.jpg";
import myImage11 from "./images/newimage/IMG-20230927-WA0027.jpg";
import myImage12 from "./images/newimage/IMG-20230927-WA0026.jpg";
import myImage13 from "./images/newimage/IMG-20230927-WA0026.jpg";
import myImage14 from "./images/newimage/IMG-20230927-WA0022.jpg";
function NearestHospitals() {
  // Your fake hospital data
  const fakeHospitals = [
    {
      name: "Chirayu Hospital",
      address: "143, Jaisingh Road",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302013",
      phone: "1800223778",
      image: myImage, // Update with the correct image path
    },
    {
      name: "Ayush Hospital",
      address: "77, Narsingh Vihar",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302013",
      phone: "1800239236",
      image: myImage1, // Update with the correct image path
    },
    {
      name: "Sanjeev Aspatal",
      address: "Narcircle, Jahanpura",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302017",
      phone: "1800876765",
      image: myImage2,
    },
    {
      name: "Peak Hospitals",
      address: "Shrimal Road",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302017",
      phone: "1800121121",
      image: myImage3,
    },
    {
      name: "AAurved Clinic",
      address: "Pareek Colony",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302011",
      phone: "1800121232",
      image: myImage4,
    },
    {
      name: "Vidhyang Jain Charity Clinic",
      address: "Vrindavan Gali",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302013",
      phone: "1800234123",
      image: myImage5,
    },
    {
      name: "Yadav Hospital",
      address: "Kamaali Mohalla",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302012",
      phone: "1800234231",
      image: myImage6,
    },
    {
      name: "Saharan Seva Kendra",
      address: "Vaishnavi Raod",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302017",
      phone: "1800678675",
      image: myImage7,
    },
    {
      name: "Shreyansh Hospitals",
      address: "Ojal Road, Sneha Colony",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302014",
      phone: "1800456345",
      image: myImage8,
    },
    {
      name: "Sawai Man Singh Hospital",
      address: "Sanganeri Road",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302017",
      phone: "1800800800",
      image: myImage9,
    },
    {
      name: "Dishank TGJ International Healthcare Services Ltd.",
      address: "Gojo Colony, Sasukepura",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302012",
      phone: "1800111222",
      image: myImage10,
    },
    {
      name: "Central Government Healthcare Services",
      address: "Bakebihari Mohalla",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302017",
      phone: "1800900899",
      image: myImage11,
    },
    {
      name: "Chouhan Aspatal",
      address: "Yashveer Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302013",
      phone: "1800780987",
      image: myImage12,
    },
    {
      name: "Avyukta Ayurveda Centre",
      address: "Stuti Vihar",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302013",
      phone: "1800455223",
      image: myImage13,
    },
    {
      name: "Fake Hospital 13",
      address: "456 Pinecone Lane",
      city: "Valleytown",
      state: "State",
      zip: "53579",
      phone: "555-555-5555",
      image: myImage14,
    },
    {
      name: "Fake Hospital 14",
      address: "789 Oakwood Drive",
      city: "Riverside",
      state: "State",
      zip: "24680",
      phone: "555-555-5555",
      image: "/images/hospital14.jpg",
    },
    {
      name: "Fake Hospital 15",
      address: "101 Maple Street",
      city: "Beachville",
      state: "State",
      zip: "86420",
      phone: "555-555-5555",
      image: "/images/hospital15.jpg",
    },
    {
      name: "Fake Hospital 16",
      address: "234 Cedar Avenue",
      city: "Greenville",
      state: "State",
      zip: "97531",
      phone: "555-555-5555",
      image: "/images/hospital16.jpg",
    },
    {
      name: "Fake Hospital 17",
      address: "567 Pine Road",
      city: "Countryside",
      state: "State",
      zip: "31415",
      phone: "555-555-5555",
      image: "/images/hospital17.jpg",
    },
    {
      name: "Fake Hospital 18",
      address: "890 Elm Lane",
      city: "Hometown",
      state: "State",
      zip: "92635",
      phone: "555-555-5555",
      image: "/images/hospital18.jpg",
    },
  ];

  return (
    <div className="nearest-hospitals bgimage">
      <h1 className="headline">Nearest Hospitals</h1>
      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button class="btn btn-outline-secondary" type="button">
          Button
        </button>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Example text with two button addons"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <button class="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button class="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <br />,
      <br />
      <button type="button" class="btn btn-outline-success">
        Filter
      </button>
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
