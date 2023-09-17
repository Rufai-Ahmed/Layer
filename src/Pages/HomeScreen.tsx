import PricingComponent from "../Components/PricingComponent";
import Achievements from "./Achievements";
import Additional from "./Additional";
import Demovid from "./DemoVid";
import Features from "./Features";
import HOW from "./HOW";
import Hero from "./Hero";
import News from "./News";
import Pricing from "./Pricing";
import Layer from "./Pricing";
import ScreenShots from "./ScreenShots";
import Team from "./Team";
import Template from "./Template";
import Welcome from "./Welcome";
import Twitter from "./Twitter";
import Subscribe from "./Subscribe";
import InTouch from "./InTouch";

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
      <Team />
      <News />
      <Twitter />
      <Subscribe />
      <InTouch />
    </div>
  );
};

export default HomeScreen;
