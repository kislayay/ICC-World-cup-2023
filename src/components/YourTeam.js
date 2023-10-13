import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../Slices/Teamslice";

import { Button } from "@mui/material";

const YourTeam = (props) => {

    const{player} = props;

    const{img2,name,specialist} = player || {};
    
    const dispatch = useDispatch();

    const deleteItem = () => {
       dispatch(removeItem())
    }

    const playerlist  = useSelector((store) => store.items)
     console.log(playerlist)

    return (

        <div>
          {
            playerlist.map((data) => {

                return (
                    
                   <div className="india-card">
                      <img src={data?.img2} class='movie-img' />
                      <h2>{data?.name}</h2>
                      <h2>{data?.specialist}</h2>
                      <Button onClick={()=>deleteItem()} variant="contained">Remove - </Button>
                    </div>
                   
                    
                )
            })
          }
        </div>
    )
}

export default YourTeam;
