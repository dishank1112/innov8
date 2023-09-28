import './loginn.css'; 
import React from 'react';

function LoginForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");
    typingText.style.display = "block"; // Show the element if hidden initially
    typingText.classList.add("animate-typing");
  });
  
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
  </div>
    <div className="box-form">
      
      <br />
      <br />
      <br />
      <br />
      <div className="left">
        <div className="overlay">
          <h1 className='welcome'>Welcome</h1>
          <p>
          
          </p>Rescue zone welcomes you to Login Page if  You don't Have Login Then you can Re<p></p>
          <span>
            <p>Login with social media</p>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true">Login With Email</i>
            </a>
            <a className="google" href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i> Login with
            Google
            </a>
          </span>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <br /><br /><br /><br /><br /><br />
        <p>
          Don't have an account? <a className='create' href="/sign">Create Your Account</a> it takes
          less than a minute
        </p>
        <div className="inputs">
          <input type="text" placeholder="user name" />
          <br />
          <input type="password" placeholder="password" />
        </div>

        <br />
        <br />

        <div className="remember-me--forget-password">
          {/* Angular */}
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>forget password?</p>
        </div>

        <br />
        <button >Login</button>
      </div>
    </div>
    </div >
  );
}

export default LoginForm;