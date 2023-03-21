import "./index.css";
import Banner from "../../components/Banner";
import FeaturesPremium from "../../components/FeaturesPremium";
import { PremiunPlans } from "../../components/PremiunPlans";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      {/* <div id="vidal-wrapper"> */}
        <Header/>
        <Banner />
        <FeaturesPremium />
        <PremiunPlans />
        <Footer/>
      {/* </div> */}
    </div>
  );
}

export default Home;
