import { Link } from "react-router-dom";

import Header from "../header/header";
import DataBanner from "../dataBanner/dataBanner";
import Card from "../card/card";
import HackathonCatalog from "../hackathonCatelog/hackathonCatalog";

import { ReactComponent as PicArt } from "../../assets/icons/PicsArt_04-14-04.42 1.svg";

import Ai from "../../assets/icons/Group 1000002515.svg";
import People from "../../assets/icons/Group 1000002516.svg";
import Robot from "../../assets/icons/Group 1000002518.svg";
import CarbonNotebook from "../../assets/icons/carbon_notebook-reference.svg";
import Vector from "../../assets/icons/Vector.svg";
import Robot2 from "../../assets/icons/Robot.svg";
import IdentificationCard from "../../assets/icons/IdentificationCard.svg";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="banner">
        <div>
          <p>Accelerate Innovation with Global AI Challenges </p>
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your Al/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>

          <Link to="/create-challenge">
            <button>Create Challenge</button>
          </Link>
          <span></span>
        </div>
        <div>
          <PicArt></PicArt>
        </div>
      </div>
      <div className="statsBanner">
        <div className="stats">
          <DataBanner
            svg={Ai}
            count={"100K+"}
            text="AI model submissions"
          ></DataBanner>
          <span></span>
          <DataBanner
            svg={People}
            count={"50K+"}
            text="Data Scientists"
          ></DataBanner>
          <span></span>
          <DataBanner
            svg={Robot}
            count={"100K+"}
            text="AI Challenges hosted"
          ></DataBanner>
        </div>
      </div>

      <div className="perks">
        <p>
          Why Participate in <span> AI Challenges?</span>{" "}
        </p>
        <div>
          <Card
            icon={CarbonNotebook}
            title="Prove your skills"
            para="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
          ></Card>
          <Card
            icon={Vector}
            title="Learn from community"
            para="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
          ></Card>
          <Card
            icon={Robot2}
            title="Challenge yourself"
            para="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
          ></Card>
          <Card
            icon={IdentificationCard}
            title="Earn recognition"
            para="You will stand out from the crowd if you do well in Al challenges, it not only helps you shine in the community but also earns rewards."
          ></Card>
        </div>
      </div>

      <div>
        <HackathonCatalog></HackathonCatalog>
      </div>
    </div>
  );
};

export default Home;
