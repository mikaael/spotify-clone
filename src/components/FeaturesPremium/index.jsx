import FeaturePremium from '../FeaturePremium';
import Title from '../Title';

function FeaturesPremium() {
  return (
    <div className='wrapper-features'>
      <div id='features-premium'>
        <Title text='Por que ser Premium?' />

        <div className='features'>
          <FeaturePremium
            title='Modo offline.'
            description='Ouça música onde estiver.'
            img='modoOffline.png'
          />
          <FeaturePremium
            title='Ouça músicas sem anúncios.'
            description='Curta música sem anúncios.'
            img='semAnuncio.png'
          />
          <FeaturePremium
            title='Ouça na ordem que quiser.'
            description='Qualquer música em qualquer ordem.'
            img='oucaQuandoQuiser.png'
          />
          <FeaturePremium
            title='Qualidade de som superior.'
            description='Sinta o som.'
            img='qualidadeDeSom.svg'
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesPremium;
