import PricingComponent from "../Components/PricingComponent";
import Additional from "./Additional";
import Features from "./Features";
import HOW from "./HOW";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Layer from "./Pricing";
import ScreenShots from "./ScreenShots";
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
    </div>
  );
};

export default HomeScreen;
