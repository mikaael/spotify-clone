import facebookLogo from '../../assets/logos/facebook.svg';
import appleLogo from '../../assets/logos/apple.svg';
import googleLogo from '../../assets/logos/google.svg';
import phoneIcon from '../../assets/phone.svg';

import LinkButton from '../../components/LinkButton';

function LoginSocialNetworks() {
  return (
    <ul className='flex flex-wrap items-center justify-between'>
      <li>
        <LinkButton
          src={facebookLogo}
          alt='Logo Facebook'
          backgroundColorName='facebook'
        />
      </li>
      <li>
        <LinkButton
          src={appleLogo}
          alt='Logo Apple'
          backgroundColorName='black'
        />
      </li>
      <li>
        <LinkButton src={googleLogo} alt='Logo Google' />
      </li>
      <li>
        <LinkButton src={phoneIcon} alt='Ícone de telefone' />
      </li>
    </ul>
  );
}

export default LoginSocialNetworks;
