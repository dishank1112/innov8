
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GoogleMaps from './commponents/GoogleMaps';
import Login from './authentication/Login';
import NavBar from './commponents/NavBar';
import Emergency from './commponents/Emergency';
import DisaDesti from './commponents/DisaDesti';
import Home from './commponents/Home';
import SignUp from './authentication/SignUp';
import Donation from './commponents/Donation';

function App() {
  return (
    <div className="App">
       <Router>
       <NavBar/>
        <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dfd" element={<GoogleMaps/>}/>
      <Route path="/emergancy" element={<Emergency/>}/>
      <Route path="/d" element={<DisaDesti/>}/>
            <Route path="/sign" element={<SignUp/>}/>
            <Route path="/donate" element={<Donation/>}/>
       
        </Routes>
       </Router>
    </div>
  );
}

export default App;
