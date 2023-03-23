import "./index.css";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { FeaturesPremium } from "../../components/FeaturesPremium";
import { PremiunPlans } from "../../components/PremiunPlans";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturesPremium />
      {/* <PremiunPlans />
      <Footer /> */}
    </>
  );
}
