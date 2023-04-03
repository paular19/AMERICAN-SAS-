import React from 'react'
import Card1 from "../Assets/card1.png";
import Card2 from "../Assets/card2.png";
import Card3 from "../Assets/card3.png";
import Fondo from "../Assets/testura.png"

const Work = () => {
    const workData=[
        {
            image: Card2, 
            title: "este es el edificio", 
        },
        {
            image: Card1, 
            title: "este es el edificio", 
        },
        {
            image: Card3, 
            title: "este es el edificio", 
        },

    ]

  
    return (
    <div className='work-section-wrapper'>
    
        <div className='work-section-top'>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem odit, dicta sequi ullam amet, accusamus debitis consequuntur laborum non, beatae cumque exercitationem a hic in commodi cupiditate? Atque, rerum!
            </p>
        </div>
        
        <div className='work-section-bottom'>
            {
                workData.map((data)=>(
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=""/>
                    </div>
                    </div>
                     ))}

        </div>
        
     
        </div>
    
   
    );
            };
    
    
    
    


export default Work