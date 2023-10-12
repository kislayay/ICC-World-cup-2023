import React from "react";

const Venuecard = (props) => {
    const{pitch} = props;
    const{img1,name,place,capacity} = pitch;
    return (

        <div className="venue-card">
            <div className="venue-card-details">
                <img src={img1} />
                <h2>{name}</h2>
                <h2>{place}</h2>
                <h2>{capacity}</h2>
            </div>
        </div>
    )
}

export default Venuecard;