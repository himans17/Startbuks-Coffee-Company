import React from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <hr />
        <div className="row">
          <div className="col-md-2">
            <ul className="list-style">
              <li>
                <h4>About US</h4>
              </li>
              <li>Our Company</li>
              <li>Our Coffee</li>
              <li>Stories And News</li>
              <li>Starbucks Archive</li>
              <li>Investors Relation</li>
              <li>Customer Services</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-style">
              <li>
                <h4>Career</h4>
              </li>
              <li>Culture And Values</li>
              <li>Inclusion, Diversity And Equity</li>
              <li>College Achivement Plans</li>
              <li>Alumuni Commuity</li>
              <li>U.S Career</li>
              <li>International Career</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-style">
              <li>
                <h4>Social Impact</h4>
              </li>
              <li>People</li>
              <li>Planet</li>
              <li>Environmental And Social Impact Reporting</li>
            </ul>
          </div>

          <div className="col-md-2">
            <ul className="list-style">
              <li>
                <h4>For Bussiness partner</h4>
              </li>
              <li>LandLord Career Support</li>
              <li>Suppilers</li>
              <li>Corporate Sale Card Gifts</li>
              <li>Office And FoodServices Coffee</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-style">
              <li>
                <h4>Order And Pickup</h4>
              </li>
              <li>Order On The App</li>
              <li>Order On The web</li>
              <li>Delivery</li>
              <li>Order And Pickup Services</li>
              <li>Investors Relation</li>
              <li>Customer Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <hr />
        </div>
        <span style={{ margin: "10px" }}>
          <PinterestIcon sx={{ fontSize: 40 }} />
        </span>
        <span style={{ margin: "10px" }}>
          <InstagramIcon sx={{ fontSize: 40 }} />
        </span>
        <span style={{ margin: "10px" }}>
          <YouTubeIcon sx={{ fontSize: 40 }} />
        </span>
        <span style={{ margin: "10px" }}>
          <FacebookIcon sx={{ fontSize: 40 }} />
        </span>
        <span style={{ margin: "10px" }}>
          <TwitterIcon sx={{ fontSize: 40 }} />
        </span>
        <div className="row">
          <ul style={{ display: "flex" }}>
            <li className="list-1">Privacy Policy</li>
            <li className="list-1">
              <span
                aria-hidden="true"
                class="color-textBlackSoft px2 hidden lg-inline"
                style={{ paddingRight: "15px" }}
              >
                |
              </span>
              Term Of Use
            </li>
            <li className="list-1">
              <span
                aria-hidden="true"
                class="color-textBlackSoft px2 hidden lg-inline"
                style={{ paddingRight: "15px" }}
              >
                |
              </span>
              CA Supply Chain Act
            </li>
            <li className="list-1">
              <span
                aria-hidden="true"
                class="color-textBlackSoft px2 hidden lg-inline"
                style={{ paddingRight: "15px" }}
              >
                |
              </span>
              Cookies Prefrence
            </li>
          </ul>
          <p class="color-textBlackSoft py3 text-xxs">
            © 2022 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
