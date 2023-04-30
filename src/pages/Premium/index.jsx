import { Header } from '../../components/Global/Header';
import { Banner } from '../../components/Premium/Banner';
import { FeaturesPremium } from '../../components/Premium/FeaturesPremium';
import { PremiumPlans } from '../../components/Premium/PremiumPlans';
import { Footer } from '../../components/Global/Footer';

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturesPremium />
      <PremiumPlans />
      <Footer />
    </>
  );
}
