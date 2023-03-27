import React from "react";
import Pagination from "../Pagination/Pagination";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import bracket from "../../Images/bracket.jpg";
import rec2 from "../../Images/rec2.png";
import rec3 from "../../Images/rec3.png";
import rec4 from "../../Images/rec4.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="features-div">
        <div className="mainDiv">{/* So here is the empty space */}</div>
        <section className="slogan-maker">
          <div className="features-div2">
            <div className="features-div-3">
              <h1 className="head-title-heading">Free Slogan Maker</h1>
              <p className="head-title-para">
                Simply enter a term that describes your business, and get up to
                1,000 <br />
                relevant slogans for free.
              </p>
            </div>
            <div className="pagi-div">
              <h4 className="head-title-slogan">Word for your Slogan</h4>
              <div className="input-wrapper">
                <input type="text" placeholder="Enter text" />
                <span className="clear-button">&times;</span>
              </div>

              <br />
              <button type="button" className="generate-button btn btn-lg">
                Generate slogans
              </button>
              <hr className="below-generate-hr" />
            </div>
            <Pagination />
          </div>
        </section>
      </div>
      <div className="feature-home-div">
        <Features />
      </div>
      <div className="products-div">
        <h1 className="products-div-heading">Try our other free Products</h1>
        <div className="cards-div">
          <div className="card cards-info">
            <img className="card-img-top" src={bracket} alt="Card  cap" />
            <div className="card-body">
              <h5 className="card-title">Privacy Policy Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div className="card cards-info">
            <img className="card-img-top" src={rec2} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Terms & Conditions Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div className="card cards-info">
            <img className="card-img-top" src={rec3} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Domain Name Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div className="card cards-info">
            <img className="card-img-top" src={rec4} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Invoice Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
