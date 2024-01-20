import "./index.css";
import RoboLogo from "../../static/images/FooterRob.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerimg_holder">
        <img src={RoboLogo} alt="footer" />
      </div>
      <div className="footer_links">
        <div className="holder1">
          <h4>Investing</h4>
          <div>
            <a>Automated Investing</a><br />
            <a>Stock Investing</a><br />
            <a>Explore Investing</a><br />
            <a>Pricinging</a>
          </div>
        </div>
        <div className="holder1">
          <h4>Save</h4>
          <div>
            <a>Cash</a><br />
            <a>Atm Locator</a><br />
            <a>Automated Bond</a><br />
            <a>Tax Loss</a>
          </div>
        </div>
      </div>
      <div className="footer_links">
        <div className="holder1">
          <h4>Learn</h4>
          <div>
            <a>Blog</a><br />
            <a>Help Center</a><br />
            <a>Home Planning</a><br />
            <a>Pricinging</a>
          </div>
        </div>
        <div className="holder1">
          <h4>About</h4>
          <div>
            <a>About Us</a><br />
            <a>News Room</a><br />
            <a>Reviews</a><br />
            <a>Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
