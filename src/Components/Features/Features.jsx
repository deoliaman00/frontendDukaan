import "./Features.css";
import featureIcon1 from "../../Images/featureIcon1.jpg";
import featureIcon2 from "../../Images/featureIcon2.jpg";
import featureIcon3 from "../../Images/featureIcon3.jpg";

const Features = () => {
  return (
    <>
      <div className="feature">
        <div className="feature-div" style={{ marginTop: "5%" }}>
          <img className="imgIcon" src={featureIcon1} alt="" />
          <h5 className="feature-heading-2">Search</h5>
          <p className="ptext">
            Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen.
          </p>
        </div>
        <div className="feature-div" style={{ marginTop: "5%" }}>
          <img className="imgIcon" src={featureIcon2} alt="" />
          <h5 className="feature-heading-2">Select</h5>
          <p className="ptext">
            Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen.
          </p>
        </div>
        <div className="feature-div" style={{ marginTop: "5%" }}>
          <img className="imgIcon" src={featureIcon3} alt="" />
          <h5 className="feature-heading-2">Stand out</h5>
          <p className="ptext">
            Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
