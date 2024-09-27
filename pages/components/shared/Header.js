import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  NavbarToggler,
} from 'reactstrap';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* Add your logo here */}
        <NavbarBrand href="/">
          <img
            src="logo1.jpg" // Update this path to your logo's location
            alt="Logo"
            style={{ height: '75px', marginRight: '10px' }} // Adjust styling as needed
          />
          Adaptive Marketing
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="email">
              <NavLink href="mailto:brandonpovio@gmail.com" style={{ color: "#000" }}>
                brandonpovio@gmail.com
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyHeader;
