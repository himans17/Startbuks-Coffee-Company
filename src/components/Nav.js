import React from "react";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 mt-2">
          <NavLink to="/">
            <img src="./images/starbucks-logo-png-1688.png" className="logos" />
          </NavLink>
        </div>
        <div className="col-lg-6 col-md-4 mid text-center">
          <ul
            style={{
              display: "flex",
            }}
          >
            <NavLink className="menu" to="/">
              <li className="list-0">MENU</li>
            </NavLink>
            <NavLink className="menu" to="/">
              <li className="list-0">REWARDS</li>
            </NavLink>
            <NavLink className="menu" to="/">
              <li className="list-0">GISTS CARD</li>
            </NavLink>
          </ul>
        </div>
        <div className="col-lg-4 col-md-3 mx-auto mt-3">
          <NavLink className="button">
            <LocationOnIcon />
            Find The Store
          </NavLink>
          <button type="button" className=" sign-up">
            SIGN UP
          </button>
          <button type="button" className=" join-now">
            JOIN NOW
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
