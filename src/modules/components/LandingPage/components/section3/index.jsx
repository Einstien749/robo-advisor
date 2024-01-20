import "./index.css";
import RoboImage1 from "../../../../../static/images/techRobo-removebg.jpg";
import RoboImage2 from "../../../../../static/images/robo-peace-removebg.jpg";
import RoboImage3 from "../../../../../static/images/flower.jpg";

const plans = [
  {
    text: "Classic portfolio",
    description:
      "An expertly diversified portfolio, made up of low-fee ETFs across different asset classes and geographies.",
    image: RoboImage1,
    backColor: "#f2f3f8",
  },
  {
    text: "Socially Responsible portfolio",
    description:
      "Our Socially Responsible Investing (SRI) portfolio helps you invest without compromising on what matters to you",
    image: RoboImage2,
    backColor: "#ffffff",
  },
  {
    text: "Halal portfolio",
    description:
      "Grow your wealth while keeping your faith with Canada’s first-ever portfolio that complies with Islamic law.",
    image: RoboImage3,
    backColor: "#f3d6db",
  },
];

const PlanCard = ({ text, description, image, backColor }) => {
  return (
    <div className="plancard" style={{ backgroundColor: backColor }}>
      <h4>
        <span>{text}</span>
      </h4>
      <p>{description}</p>
      <div>
        <button></button>
        <img src={image} />
      </div>
    </div>
  );
};

const Section_Three = () => {
  return (
    <div className="section3">
      <h2>Investing that fits your goals and values</h2>
      <div>
        {plans.map((item) => (
          <PlanCard
            text={item.text}
            description={item.description}
            image={item.image}
            backColor={item.backColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Section_Three;
