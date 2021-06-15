import React from 'react'
import { ModelSection } from '../ModelSection';


export const ModelS = () => {
    const modelsSpecs = {
        "id": 0,
        "title": "Model S",
        "description": "Plaid",
        "bgImage": "model-s.jpg",
        "leftCTAText": "Order Now",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    };
    
    return (
        <div>
            {/* Banner Image or ModelSection */}
            <ModelSection {...modelsSpecs} />

            {/* Text with Image */}
            <div>
                {/* Carousel */}
                {/* Text with Image - 4 times alternate sides*/}                
            </div>
            <div>
                {/* Similar to Banner image */}
            </div>
            <div>
                {/* Text with description + CTA */}
            </div>   
            <div>
                {/* Text with description */}
                { /* Tab Component */}
            </div>   
            <div>
                {/* Image Carousel */}                
            </div>    
            <div>
                {/* Video Carousel */}                
            </div> 
            <div>
                {/* Specs Component */}                
            </div>  
        </div>
    )
}
