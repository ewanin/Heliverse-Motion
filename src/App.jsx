import Apply from "./components/Apply";
import Browser from "./components/Browser";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Wand from "./components/Wand";

export default function App() {
  return (
    <div className=" bg-black_primary">
      <div className="2xl:px-[600px] xl:px-[135px] lg:px-[40px] md:px-[20px] px-[10px]">
        <Heading />
        <Hero />
        <Review />
        <Wand />
        <Apply />
        <Browser />
        <Features />
      </div>
      <Footer />
    </div>
  )
}