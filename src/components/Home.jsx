import React from 'react'
import { ModelSection } from './ModelSection'
import styled from 'styled-components'
import { teslaProductsList } from './teslaProductsList'

export const Home = () => {
    return (
        <Container>
            {/* 
                Array of Model set/section 
                Each containing bg-image + Title/P + 2 CTA
            */}
            {
                teslaProductsList && teslaProductsList.map((product, key) => {                   
                    return(
                        <ModelSection key={key} {...product} />
                    );                    
                })
            }                       
        </Container>
    )
}
const Container = styled.div`

`;