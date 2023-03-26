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
            <div style={{ marginBottom: "20px" }}>
              <h1 className="head-title">Free Slogan Maker</h1>
              <p className="head-title">
                Simply enter a term that describes your business, and get up to
                1,000 <br />
                relevant slogans for free.
              </p>
            </div>
            <div className="pagi-div">
              <h4 className="head-title" style={{ fontSize: "16px" }}>
                Word for your Slogan
              </h4>
              <div className="input-wrapper">
                <input type="text" placeholder="Enter text" />
                <span className="clear-button">&times;</span>
              </div>

              <br />
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  color: "white",
                  backgroundColor: "#146EB4",
                  borderRadius: "4px",
                }}
              >
                Generate slogans
              </button>
              <hr style={{ marginTop:"5%",marginBottom:"5%",width: "85%" }} />
            </div>
            <Pagination />
          </div>
        </section>
      </div>
      <div
        style={{
          height: "auto",
          backgroundColor: "#f3f9fa",
          position: "relative",
          minHeight: "300px",
        }}
      >
        <Features />
      </div>
      <div className="products-div">
        <h1 className="products-div-heading">Try our other free Products</h1>
        <div className="cards-div">
          <div
            className="card cards-info"
            style={{ marginBottom: "15px", marginRight: "2%" }}
          >
            <img className="card-img-top" src={bracket} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Privacy Policy Generator</h5>
              <p className="card-text" style={{ textAlign: "center" }}>
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div
            className="card cards-info"
            style={{ marginBottom: "15px", marginRight: "2%" }}
          >
            <img className="card-img-top" src={rec2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Terms & Conditions Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div
            className="card cards-info"
            style={{ marginBottom: "15px", marginRight: "2%" }}
          >
            <img className="card-img-top" src={rec3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Domain Name Generator</h5>
              <p className="card-text">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging.
              </p>
            </div>
          </div>
          <div
            className="card cards-info"
            style={{ marginBottom: "5px", marginRight: "2%" }}
          >
            <img className="card-img-top" src={rec4} alt="Card image cap" />
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
