import PricingComponent from "../Components/PricingComponent";
import Achievements from "./Achievements";
import Additional from "./Additional";
import Demovid from "./DemoVid";
import Features from "./Features";
import HOW from "./HOW";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Layer from "./Pricing";
import ScreenShots from "./ScreenShots";
import Template from "./Template";
import Welcome from "./Welcome";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Features />
      <HOW />
      <Additional />
      <Pricing />
      <ScreenShots />
      <Achievements />
      <Demovid />
      <Template />
    </div>
  );
};

export default HomeScreen;
