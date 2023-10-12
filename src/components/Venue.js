import React, { useState } from 'react';
import { Venueplace } from '../utils/Venueplace';
import Venuecard from './Venuecard';
import { Button } from '@mui/material';
const Venue = () => {

    const[venue,setVenue] = useState(Venueplace);

    const venuefilter = () => {
         const stadium = venue.filter((top) => top.capacity > 40000)
         return stadium;
    }

    return (
          
        <div className='venue'>
            <Button onClick={()=>setVenue(venuefilter())} variant="contained" style={{marginTop:"10px"}}>Top Stadium</Button>
           {/* <button onClick={()=>setVenue(venuefilter())}>Top Stadiums</button> */}

             {
                venue.map((list) => {
                    return (
                        <Venuecard pitch={list} />
                    )
                })
             }
        </div>
    )
}

export default Venue;