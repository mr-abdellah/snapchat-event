import { Link } from "react-router-dom";
import lanPagePic from "../assets/Landing page image.svg";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>
        Imagine if <br /> <span>Snapchat</span> <br /> had events.
      </h2>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <img id="homepage-img" src={lanPagePic} alt="landing page pic" />
      <Link to="/create">🎉 Create my event</Link>
    </div>
  );
};

export default Homepage;
