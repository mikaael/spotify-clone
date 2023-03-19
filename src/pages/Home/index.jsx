import './index.css';
import Banner from '../../components/Banner';
import FeaturesPremium from '../../components/FeaturesPremium';

function Home() {
  return (
    <div>
      <div id="vidal-wrapper">
            <Banner />
            
            <FeaturesPremium />
        </div>
    </div>
  );
}

export default Home;
