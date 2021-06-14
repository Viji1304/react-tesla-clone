import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <div>
            <Container>
                <FooterNav>
                    <li><a href="#">Tesla © 2021</a></li>
                    <li><a href="#">Privacy & Legal</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Get Newsletter</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Forums</a></li>
                    <li><a href="#">Locations</a></li>
                </FooterNav>
            </Container>
        </div>
    )
}
const Container = styled.div`
   min-height: 50px; 
`;
const FooterNav = styled.ol`
    display: flex;
    justify-content: center;  
    align-items: flex-start;         
    list-style: none;
    li{
        padding: 8px 16px;
        a{
            font-size: 12px;
            font-weight: normal;
        }
    }
`;