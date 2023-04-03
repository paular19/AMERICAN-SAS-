import Cards from './Cards'
import React from 'react'
import CardCarro from "../Assets/cargamrec.png";
import CardObrero from "../Assets/camionrec.png";
import CardCargamento from "../Assets/obrerorecortada.png";

const Card = () => {
        const cardInfoData = [
          {
            image: CardCarro,
            title: "carro",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
          },
          {
            image: CardObrero,
            title: "obrero",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
          },
          {
            image: CardCargamento,
            title: "cargamento",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
          },
        ];
  return (
   
<div className="fondo col-md-12">                 
<div className='data-card'>
    {cardInfoData.map((data) => (
        <div className="card text-center">
            <div className="overflow-hiden">
                    <img src={data.image} alt=""/>
            </div>
            <div className='card-body text-dark'>
                    <h4 className="card-title">{data.title}</h4>
            </div>
                    <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque consectetur hic et minus ullam perferendis sit autem sed. Illum.</p>
        </div>
        
    ))}
</div>
</div>   
           
       
  )
}


export default Card
