import RoboAdvisor from "../../../../../static/images/rob.jpg";
import "./index.css";

const Section_One = () => {
  return (
    <div className="section_one">
      <div className="safest-way">
        <h2 className="h1-bold">
          There’s no secret to <span>long-term wealth</span>, but if there were
          it would be this:
          <span> Automated Index Investing.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur sit amet ipsum sed do eiusmod
          tempor incididunt ut labore
        </p>
        <button className="get-started">GET STARTED</button>
      </div>
      <div className="sectio_image">
        <img src={RoboAdvisor} alt="Section_One" className="section_img1" />
      </div>
    </div>
  );
};

export default Section_One;
