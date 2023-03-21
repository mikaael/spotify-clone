import "./index.css";
import Banner from "../../components/Banner";
import FeaturesPremium from "../../components/FeaturesPremium";
import { PremiunPlans } from "../../components/PremiunPlans";
import { Footer } from "../../components/Footer";
function Home() {
  return (
    <div>
      {/* <div id="vidal-wrapper"> */}
        <Banner />
        <FeaturesPremium />
        <PremiunPlans />
        <Footer/>
      {/* </div> */}
    </div>
  );
}

export default Home;
