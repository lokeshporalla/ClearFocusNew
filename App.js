//import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
  <a class="navbar-brand bg-light" href="#"><img src="http://www.clearfocus.in/wp-content/uploads/2018/01/cropped-2.png" alt="error" width="60PX" height="60PX"></img></a>
    <a class="navbar-brand" href="#">ClearFocus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Registrations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Payments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Certificates</a>
        </li>
   
        </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <span className="dropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Profile
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">About Us</a></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        </ul>
      </span>
    </div>
  </div>
</nav>

    </div>
  );
}

export default App;
