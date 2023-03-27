import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import icon2 from "../../Images/icon2.jpg";
import india from "../../Images/india.jpg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer" style={{ backgroundColor: "#1A181E" }}>
        <div className="footer-div2">
          <div className="footer-brand">
            <img
              style={{ height: "50px", width: "200px" }}
              src={icon2}
              alt="Brand Image"
            />
          </div>

          <div style={{ marginRight: "40px" }}>
            <div style={{ color: "white", marginBottom: "10px" }}>Contact</div>
            <div style={{ color: "white" }}>FAQ's</div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div style={{ color: "white", marginBottom: "10px" }}>
              Tutorials
            </div>
            <div style={{ color: "white" }}>Blogs</div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div style={{ color: "white", marginBottom: "10px" }}>Privacy</div>
            <div style={{ color: "white" }}>Banned Items</div>
          </div>
          <div style={{ marginRight: "40px" }}>
            <div style={{ color: "white", marginBottom: "10px" }}>About</div>
            <div style={{ color: "white" }}>Jobs</div>
          </div>

          <div className="footer-socials">
            <div style={{ color: "white", marginBottom: "10px" }}>Facebook</div>
            <div style={{ color: "white", marginBottom: "10px" }}>
              Instagram
            </div>
            <div style={{ color: "white", marginBottom: "10px" }}>LinkedIn</div>
          </div>
        </div>
        <div className="footer-div3">
          <div className="right-div">
            <p style={{ color: "white" }}>Dukaan 2020, All right reserved.</p>
          </div>
          <p style={{ color: "white" }}>
            Made in <img className="india-icon" src={india} alt="Indian_flag" />
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
