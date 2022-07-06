import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';
export default function Navbarcomp() {
  return (
    <div>
        <Navbar
    color="dark"
    expand="lg"
    dark
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink to="postData">
            PostData
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="galleryData">
          GalleryData
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    </div>
  )
}
