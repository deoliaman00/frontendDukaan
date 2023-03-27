import React from "react";

import icon2 from "../../Images/icon2.jpg";
import india from "../../Images/india.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer" >
        <div className="footer-div2">
          <div className="footer-brand">
            <img className="brand-img" src={icon2} alt="Brand " />
          </div>

          <div className="info-footer-div">
            <div className="footer-info">
              <Link className="link-name" to="#">
                Contact
              </Link>
            </div>
            <div className="footer-info-2">
              <Link className="link-name" to="#">
                {" "}
                FAQ's
              </Link>
            </div>
          </div>
          <div className="info-footer-div">
            <div className="footer-info">
              <Link className="link-name" to="#">
                Tutorials
              </Link>
            </div>
            <div className="footer-info-2">
              <Link className="link-name" to="#">
                Blogs
              </Link>
            </div>
          </div>
          <div className="info-footer-div">
            <div className="footer-info">
              <Link className="link-name" to="#">
                Privacy
              </Link>
            </div>
            <div className="footer-info-2">
              <Link className="link-name" to="#">
                Banned Items
              </Link>
            </div>
          </div>
          <div className="info-footer-div">
            <div className="footer-info">
              <Link className="link-name" to="#">
                About
              </Link>
            </div>
            <div className="footer-info-2">
              <Link className="link-name" to="#">
                Jobs
              </Link>
            </div>
          </div>

          <div className="footer-socials">
            <div className="footer-info-social">Facebook</div>
            <div className="footer-info-social">Twitter</div>
            <div className="footer-info-social">LinkedIn</div>
          </div>
        </div>
        <div className="footer-div3">
          <div className="right-div">
            <p className="footer-down-text">Dukaan 2020, All right reserved.</p>
          </div>
          <p className="footer-down-text">
            Made in <img className="india-icon" src={india} alt="Indian_flag" />
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
