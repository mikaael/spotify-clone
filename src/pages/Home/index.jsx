import './index.css';
import Banner from '../../components/Banner';
import FeaturesPremium from '../../components/FeaturesPremium';
import Header from '../../components/Header';

function Home() {
  return (
    <div>
      <Header />

      <div id='vidal-wrapper'>
        <Banner />

        <FeaturesPremium />
      </div>
    </div>
  );
}

export default Home;
