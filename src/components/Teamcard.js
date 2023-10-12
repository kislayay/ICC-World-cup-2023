import React from 'react';
import Team from './Teams';

const Teamcard = (props) => {
    const{cricket} = props;
    const{img,title,Ranking,captain} = cricket;
    return (
        <div className="team-card">
      <img src={img} className="team-img" alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <h2>Rank: {Ranking}</h2>
        <h2>Captain: {captain}</h2>
      </div>
      </div>
    )
}

export default Teamcard;