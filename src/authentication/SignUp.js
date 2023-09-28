// SignUpForm.js
import React from 'react';
import './loginn.css';

function SignUpForm() {
  return (
    <div>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    <div className="box-form">
      <br />
      <br />
      <br />
      <br />
      <div className="left">
        <div className="overlay">
          <h1></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur et est sed felis aliquet sollicitudin
          </p>
          <span>
            <p>Sign Up with social media</p>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i> Sign Up with Facebook
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i> Sign Up with Google
            </a>
          </span>
        </div>
      </div>

      <div className="right">
        <h5 className='signup'>Sign Up</h5>
        <br /><br /><br /><br /><br /><br />
        <div className="inputs">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Middle Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Date of Birth" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="email" placeholder="Email ID" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <br />
        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">I agree to the Terms and Conditions</span>
          </label>
        </div>

        <br />
        <button>Sign Up</button>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUpForm;