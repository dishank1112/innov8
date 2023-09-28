import React from 'react'
import myImage from './images/wheather.png'
import './home.css'; 
import myImages from "../commponents/Picture5.png"
import myImages1 from "../commponents/Picture4.png"
import myImages2 from "../commponents/Picture6.png"
import myImages3 from "../commponents/Picture8.png"
import myImages4 from "../commponents/Picture9.png"
import myImages5 from "../commponents/Picture10.png"
import myImages6 from "../commponents/Picture11.png"
import myImages7 from "../commponents/Picture12.png"
import myImages8 from "../commponents/Picture33.png"

export default function Home() {
  return (
    
    <div className='ani'>
       <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
      <div class="alert alert-danger" role="alert">

      <h4 class="alert-heading">Disaster Aleart!</h4>
       <p>: Heavy rainfall and rising water levels pose a flood risk in Goa. Stay updated on official alerts and prepare for possible evacuation.</p>
      <hr/>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
     </div>

<div className='my'>
<div className='wheather'>
<img width = "250px" height= "160px" src={myImage} alt="My Image" style={{ float: 'left' }} />

<img width = "250px" height= "160px" src={myImages2} alt="My Image" style={{ float : 'inherit' }} />
<img width = "250px" height= "160px" src={myImages3} alt="My Image" style={{ float: 'right' }} />

<br/>
<br/>
<br/>

<img width = "250px" height= "120px" src={myImages4} alt="My Image" style={{ float: 'left' }} />
<img width = "250px" height= "120px" src={myImages5} alt="My Image" style={{ float: 'inherit' }} />
<img width = "250px" height= "120px" src={myImages6} alt="My Image" style={{ float: 'right' }} />

</div>
</div>
     <div class="card">
        <img src={myImages} />
        <div class="card-content">
            <a href='/donate'>Donate </a>
        </div>
    </div>

    <div class="card">
        <img src={myImages2} alt="Image 2"/>
        <div class="card-content">
            <a href='/donate'>Needs </a>
        
        </div>
    </div>

    <div class="card">
        <img src={myImages3} alt="Image 3"/>
        <div class="card-content">
            <h2>
            
            </h2>
        
        </div>
    </div>

    <div class="card">
        <img src={myImages1} alt="Image 4"/>
    <div class="card-content">
        <h2>
            <h2><button type="button" class="btn btn-danger">Register</button></h2>
        </h2>
    
    </div>
    </div>

    <div class="card">
        <img src={myImages4} alt="Image 5"/>
    <div class="card-content">
        <h2>
            <h2><button type="button" class="btn btn-danger">Register</button></h2>
        </h2>
    
    </div>
    </div>

    <div class="card">
        <img src={myImages5} alt="Image 6"/>
    <div class="card-content">
        <h2>
            <h2><button type="button" class="btn btn-danger">Register</button></h2>
        </h2>
    
    </div>
    </div>

    <div class="card tt">
        <img src={myImages6} alt="Image 7"/>
        <div class="card-content">
            <h2>
                <h2><button type="button" class="btn btn-danger">Register</button></h2>
            </h2>
        
        </div>
    </div>

    <div class="card">
        <img src={myImages2} alt="Image 8"/>
    <div class="card-content">
        <h2>
            <h2><button type="button" class="btn btn-danger">Register</button></h2>
        </h2>
    
    </div>
    </div>
    {/* <script>
        // When the user clicks on <div>, open the popup
        function myFunction() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }
    </script> */}

    </div>
    
  )
}
