import "./index.css";
import Logo from "../../static/images/R.png";
import Close from "../../static/images/close-icon.png";
import FooterLog from "../../static/images/FooterRob.png";

const links = [
  { name: "CASH", to: "" },
  { name: "STOCKS", to: "" },
  { name: "PRICING", to: "" },
  { name: "AUTOMATED INVESTING", to: "" },
];

const NavBar = ({ setOpen }) => {
  return (
    <nav>
      <img src={Logo} alt="Paydoor Logo" />
      <div className="navLinks">
        {links.map((item) => (
          <a href={item.to}>{item.name}</a>
        ))}
      </div>
      <div>
        <button className="signin-button">SIGN IN</button>
        <button className="create-account-button">CREATE ACCOUNT</button>
      </div>
      <button className="small-menu" onClick={() => setOpen(true)}></button>
    </nav>
  );
};
const MobileNav = ({ open, setOpen }) => {
  return (
    <div className="mobile_nav" style={{ display: open ? "block" : "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <img
          src={FooterLog}
          alt="Close Icon"
          style={{ width: "100px", height: "80px" }}
        />
        <button
        onClick={() => setOpen(false)}
          style={{
            backgroundImage: "url(" + Close + ")",
            width: "50px",
            height: "50px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "0",
            backgroundColor: "#000000",
          }}
        ></button>
      </div>
      <div className="navLinks">
        {links.map((item) => (
          <a href={item.to}>{item.name}</a>
        ))}
      </div>
      <br />
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <button className="signin-button">SIGN IN</button><br />
      <button className="create-account-button">CREATE ACCOUNT</button></div>
    </div>
  );
};

export default NavBar;
export { MobileNav };
