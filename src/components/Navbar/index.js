import React from 'react'
import  { Nav, NavbarContainer, NavLogo } from '../Navbar/NavbarElements'


function Navbar() {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> Dolla </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks> 
                    </NavItem>
                </NavMenu>
            </NavbarContainer>    
        </Nav>
       </>
    )
}

export default Navbar
