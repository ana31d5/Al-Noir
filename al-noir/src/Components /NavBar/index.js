import React from 'react';
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu} from './NavbarElements';


const NavBar = () => {
  return (
    <>
    <Nav>
      <NavLink to = "/">
        {/* <img src='logo' alt=''/> */}
        <h1> Logo </h1>

      </NavLink>

      <Bars/>

      <NavMenu>

        <NavLink to = "/HOME" activeStyle>
        HOME
        </NavLink>

        <NavLink to = "/PRODUCT" activeStyle>
        PRODUCT
        </NavLink>

        <NavLink to = "/CONTACT-US" activeStyle>
        CONTACT US
        </NavLink>

        <NavLink to = "/SIGN-UP" activeStyle>
        SIGN UP
        </NavLink>

      </NavMenu>

      <NavBtn>
        <NavBtnLink to= '/signin'> SIGN IN </NavBtnLink>

      </NavBtn>


    </Nav>
    </>


  );
};


export default NavBar;