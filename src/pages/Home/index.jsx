import "./index.css";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { FeaturesPremium } from "../../components/FeaturesPremium";
import { PremiumPlans } from "../../components/PremiumPlans";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturesPremium />
      <PremiumPlans />
      {/* <Footer /> */}
    </>
  );
}
