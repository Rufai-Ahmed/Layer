import Additional from "./Additional";
import Features from "./Features";
import HOW from "./HOW";
import Hero from "./Hero";
import Welcome from "./Welcome";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Features />
      <HOW />
      <Additional />
    </div>
  );
};

export default HomeScreen;
