import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export const ModelSection = (props) => {
   const {title, description, leftCTAText, rightCTAText, bgImage} = props;
    return (
        <Wrapper backgroundImage={bgImage}>
            <Fade bottom>
                <SectionText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </SectionText>
            </Fade>            
            <SectionCTA>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftCTAText}
                        </LeftButton>
                        {rightCTAText && 
                            <RightButton>
                                {rightCTAText}
                            </RightButton>
                        }                    
                    </ButtonGroup>
                </Fade>                
                <DownArrow src="images/down-arrow.svg" />
            </SectionCTA>                     
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;  
    background-image: url('images/model-s.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("images/${props.backgroundImage}")`}   
    
`;
const SectionText = styled.div`
    padding-top: 18vh;
    text-align: center;    
`;
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 764px) {
        flex-direction: column;
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: #FFFFFF;
    width: 256px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`;
const RightButton = styled(LeftButton)`
    color:#171A20;
    background-color: rgba(255, 255, 255, 0.8);
`;

const DownArrow = styled.img`    
    height: 40px;
    animation: animateDownArrow infinite 1.5s;
`;

const SectionCTA = styled.div`

`;


