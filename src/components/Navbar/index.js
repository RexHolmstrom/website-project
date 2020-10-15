import React from 'react'
import {FaBars} from 'react-icons/fa'
import  { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from '../Navbar/NavbarElements'


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
