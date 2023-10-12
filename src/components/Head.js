import React from "react";
import { Link } from "react-router-dom";
import { ICCimg } from "../utils/Worldcupimg";
const Head = () => {
    return (
      <div className="header">
      <div className="logo">
        <img src={ICCimg} alt="ICC logo" />
      </div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Teams</Link>
        </li>
        <li>
          <Link to="/venue">Venue</Link>
        </li>
        <li>
          <Link to="/createteam">Create Team</Link>
        </li>
        <li>
           <Link to="/yourteam">YourTeam</Link>
        </li>
      </ul>
    </div>
    )
}

export default Head;