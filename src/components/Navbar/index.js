import React from 'react';
//import {Link} from 'react-router-dom';
import {NavbarSection , Logo , LogoText , ListItem , UlList , Anchor ,LinkAnchor } from './style.js';

const Navbar = ()=>{
    return(
       <div>
            <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><LinkAnchor to="/">Home</LinkAnchor></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><LinkAnchor to="/contact">Contact</LinkAnchor></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
        
       </div>
    )
}

export default Navbar 