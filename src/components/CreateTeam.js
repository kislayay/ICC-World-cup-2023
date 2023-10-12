import React, { useState } from 'react';
import { IndianTeam } from '../utils/IndianTeam';
import Indiancard from './Indiancard';
import { Button } from '@mui/material';

const CreateTeam = () => {

     const[india,setIndia] = useState(IndianTeam);
     const[showdata,setShowdata] = useState(false);

     const click = () => {
          setShowdata(!showdata);
     }
     

    return (

        <div>
            <Button variant="contained" onClick={click}>{showdata ? 'Hide Team' : 'Indian Team'}</Button>
           {
            showdata &&
           india?.map((info) => {

            return  <Indiancard player={info} />
           
           })

        }
        </div>
    )
}

export default CreateTeam;