import './index.css';
import Title from '../Title';
import FeatureDescription from '../FeatureDescription';

function FeaturePremium({ title, description, img }) {
  return (
    <div className='feature'>
      <img src={'../../../assets/icons/banner/images/' + img} />
      <div className='text'>
        <Title text={title} />
        <FeatureDescription text={description} />
      </div>
    </div>
  );
}

export default FeaturePremium;
