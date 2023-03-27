import React from "react";

import icon2 from "../../Images/icon2.jpg";
import india from "../../Images/india.jpg";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer" style={{ backgroundColor: "#1A181E" }}>
        <div className="footer-div2">
          <div className="footer-brand">
            <img
              style={{ height: "50px", width: "200px" }}
              src={icon2}
              alt="Brand "
            />
          </div>

          <div style={{ marginRight: "40px" }}>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <Link className="link-name" to="#">
                Contact
              </Link>
            </div>
            <div className="footer-info" style={{ color: "white" }}>
              <Link className="link-name" to="#">
                {" "}
                FAQ's
              </Link>
            </div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            ><Link className="link-name" to="#">
              Tutorials</Link>
            </div>
            <div className="footer-info" style={{ color: "white" }}>
              <Link className="link-name" to="#">
              Blogs
              </Link>
            </div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <Link className="link-name" to="#">
              Privacy
              </Link>
            </div>
            <div className="footer-info" style={{ color: "white" }}>
              <Link className="link-name" to="#">
              Banned Items
              </Link>
            </div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <Link className="link-name" to="#">
              About
              </Link>
            </div>
            <div className="footer-info" style={{ color: "white" }}>
              <Link className="link-name" to="#">
              Jobs
              </Link>
            </div>
          </div>

          <div className="footer-socials">
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              
              Facebook
              
            </div>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              
              Twitter
              
            </div>
            <div
              className="footer-info"
              style={{ color: "white", marginBottom: "10px" }}
            >
              
              LinkedIn
              
            </div>
          </div>
        </div>
        <div className="footer-div3">
          <div className="right-div">
            <p className="footer-down-text" style={{ color: "white" }}>
              Dukaan 2020, All right reserved.
            </p>
          </div>
          <p className="footer-down-text" style={{ color: "white" }}>
            Made in <img className="india-icon" src={india} alt="Indian_flag" />
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
