import './index.css';
import ButtonBanner from './../ButtonBanner';

function Banner() {
  return (
    <div className='wrapper-header'>
      <header id='banner'>
        <div className='title'>Curta o Premium grátis por 2 meses</div>
        <p className='description'>
          Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
        </p>

        <div className='buttons'>
          <ButtonBanner type='primary' value='COMECE AGORA' />
          <ButtonBanner type='secondary' value='VER PLANOS' />
        </div>

        <div className='terms'>
          <span className='link'>Sujeito a Termos e Condições.</span> Oferta de
          2 meses grátis não disponível para quem já usou o Premium.
        </div>
      </header>
    </div>
  );
}

export default Banner;
