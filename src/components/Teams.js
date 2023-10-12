import { useState } from "react";
import React from 'react';
import Teamcard from "./Teamcard";
import { Teamdata } from "../utils/Teamdata";
import { Button } from "@mui/material";

const Team = () => {
    
      const[team,setTeam] = useState(Teamdata);
      const[text,setText] = useState("");

      const searchplayer = () => {
            const player = team.filter((info) => info.captain.toLowerCase().includes(text.toLowerCase()));
            return player;
      }
 
    return team.length === 0 ? <h1>Loading... </h1> : (

        <div className="team-card">
            
              <div className="search-team">
                 <input type="text"  className="custom-input" value={text} onChange={(e) => setText(e.target.value)} /> 
               
                 <Button  variant="contained" onClick={()=>setTeam(searchplayer())}>search Favorite Player</Button>
              </div>

            {
                team.map((list) => {
                    return <Teamcard cricket={list}/>
                })
            }
            
        </div>
    )
}

export default Team;