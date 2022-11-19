import React from 'react'
import {Tab} from 'bootstrap';
import styled from 'styled-components';
function Navbar() {
  return (
    <NavbarContainer className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h5><a className="navbar-brand text-uppercase" href="#">MERCY</a></h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About MERCY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Business Guide</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Add your Business<br/>Support Organization</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Find Role Model</a>
        </li>
      </ul>
    </div>
  </div>
</NavbarContainer>
  )
}

export default Navbar
const NavbarContainer=styled.nav`
.navbar{
    text-decoration:none;
    margin-top:5rem;
    padding-top:3rem;
}
h5 a{
    padding-left:2rem;
}
ul li a{

    margin-left:2rem
    text-align:right;
}
ul li{
    text-align:center;
}
`;