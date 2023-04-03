import React from 'react';
import '../App.css';
import flayer from '../Assets/flayer.png'



const Flayercard = () => {
  const flayerData=[
    {
      image: flayer,
    }
  ];

  return (
    <div className="flayer-div">
    {flayerData.map((data) => (
    
    <img src={data.image} alt=""/>
        
      
  ))}
  </div>  
  );

}


export default Flayercard;