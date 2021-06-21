import React, { useState } from 'react'
import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close'

export const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <div>           
            {
                /* Logo
                Navigation
                Account/Misc links */                
            }
            <Container>
                <Logo>
                    <a href="/">
                        <img src="images/logo.svg" />
                    </a>
                </Logo>
                <MainNav>
                    <a href="/models">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </MainNav>
                <MenuItem>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#" onClick={() => setBurgerStatus(true)}>Menu</a>                    
                </MenuItem>
                <BurgerMenu show={burgerStatus}> 
                    <CloseWrapper>
                        <CloseMenuIcon onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>                   
                    <a href="#">Existing Inventory</a>
                    <a href="#">Used Inventory</a>
                    <a href="#">Trade-In</a>
                    <a href="#">Powerwall</a>
                    <a href="#">Commercial Energy</a>
                    <a href="#">Utilities</a>
                    <a href="#">Test Drive</a>
                    <a href="#">Charging</a>
                    <a href="#">Find Us</a>
                    <a href="#">Support</a>
                    <a href="#">Careers</a>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#">More</a>                       
                </BurgerMenu>                                   
            </Container>                        
        </div>
    )
}
const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
top:0;
left:0;
right:0;
z-index: 1;
`
const MainNav = styled.div`    
a {
   padding: 0 10px;
   margin: 0 8px;
   position: relative;
   z-index: 1;
   :after{       
        color: transparent;
        background: #A6ACAF;
        visibility: none;
        opacity: 0; 
        content: '.'; 
        height: 1px;  
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        margin: auto;
        transition: all .5s;
        border-radius: 15px;
        padding: 2px;
           
   }
   :hover{
       :after{
            opacity: 1;
            visibility: visible;
            height: 100%;
       }
    
}  
   
}
@media (max-width:764px) {
    display: none;
}

`
const MenuItem = styled.div`
a {
    padding: 0 10px;
    :hover{
        background: border-box;
        background-color: #A6ACAF;
        border-radius: 15px;
        padding: 5px 10px;        
                
   }
}
`
const Logo = styled.div`
padding: 0 20px;
`
const BurgerMenu = styled.div`
    /*background-color: white;
    min-height: 100vh;
    width: 375px;
    display: flex;
    flex-direction: column;    
    align-items: flex-start;
    padding: 24px;
    a {
        margin: 10px;
    }*/
    position: fixed;
    top: 0;
    right: 0; 
    bottom: 0;
    background-color: white;
    width: 350px;
    display: flex;
    flex-direction: column; 
    //align-items: flex-start; // align-items set will clash with nested flex
    padding: 24px;
    a {
        margin: 10px;
        padding-left: 8px;
        text-align: left;
    }
    z-index:10;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s;
}
`;
const CloseMenuIcon = styled(CloseIcon)`
    cursor: pointer;
    
`;
const CloseWrapper = styled.div`
    display: flex;    
    justify-content: flex-end;
    
`;



