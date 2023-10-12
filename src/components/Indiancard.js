import React from 'react'

const Indiancard = (props) => {
    const{player} = props;
    const{img2,name,specialist} = player;

  return (
    <div className='india-card'>
         <img src={img2} />
         <h2>{name}</h2>
         <h2>{specialist}</h2>
    </div>
  )
}

export default Indiancard;