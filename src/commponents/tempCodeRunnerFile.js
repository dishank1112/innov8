   <div className="nearest-hospitals">
      <h1 className="headline">Nearest Hospitals</h1>
      <div className="hospital-list">
        {fakeHospitals.map((hospital, index) => (
          <div className="hospital-card" key={index} ref={hospitalRefs[index]}>
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