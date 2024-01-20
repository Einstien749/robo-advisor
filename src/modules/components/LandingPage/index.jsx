import NavBar, {MobileNav} from "../../../common/NavBar";
import "./index.css";
import Section_One from "./components/section1";
import Section_Two from "./components/section2";
import Footer from "../../../common/Footer";
import { useEffect, useState, useCallback } from "react";
import Section_Three from "./components/section3";

const LandingPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [open, setOpen] =useState(false);
  const getData = useCallback(async () => {
    let response = await fetch("http://localhost:8000/home/")
      .then((res) => {
        return res.json();
      })
      .then((re) => {
        //setPortfolios(re);
        return re;
      });
      setPortfolios(response)
    console.log(response);
  }, []);

  useEffect(() => {
    getData();
    console.log(portfolios);
  }, []);

  return (
    <div className="landingpage">
      <NavBar setOpen={setOpen}/>
      <Section_One />
      <Section_Two portfolios={portfolios} />
      <Section_Three />
      <Footer />
      <MobileNav open={open} setOpen={setOpen}/>
    </div>
  );
};

export { LandingPage };
