import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

import './index.css';

import { checkIsAuthenticated, registerUser } from '../../services/auth';

import spotifyLogo from '../../assets/logos/black-spotify.svg';
import appleLogo from '../../assets/logos/apple.svg';
import facebookLogo from '../../assets/logos/facebook.svg';
import googleLogo from '../../assets/logos/google.svg';

import { InputSpace } from '../../components/Auth/SignUp/InputSpace';
import { LinkButton } from '../../components/Global/LinkButton';
import { Divider } from '../../components/Global/Divider';

export function SignUp() {
  const isAuthenticated = checkIsAuthenticated();

  const navigate = useNavigate();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const maleGenderRadioRef = useRef(null);
  const femaleGenderRadioRef = useRef(null);
  const notBinaryGenderRadioRef = useRef(null);
  const otherGenderRadioRef = useRef(null);
  const dontSayGenderRadioRef = useRef(null);

  const notificationCheckboxRef = useRef(null);
  const shareDataCheckboxRef = useRef(null);
  const termsCheckboxRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/playlists');
    }
  }, []);

  async function signUp(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const username = usernameInputRef.current.value;

    const day = yearInputRef.current.value;
    const month = monthInputRef.current.value;
    const year = dayInputRef.current.value;

    const birthDate = new Date(year, month, day);

    let genderId = null;
    const genderRefs = [
      maleGenderRadioRef,
      femaleGenderRadioRef,
      notBinaryGenderRadioRef,
      otherGenderRadioRef,
      dontSayGenderRadioRef,
    ];
    for (const genderRef of genderRefs) {
      if (genderRef.current.checked) {
        genderId = genderRef.current.value;
      }
    }

    if (
      !email ||
      !password ||
      !username ||
      !year ||
      !month ||
      !day ||
      !genderId
    ) {
      toast.error('Todos os campos são obrigatórios.');
      return;
    }

    if (!termsCheckboxRef.current.checked) {
      toast.error('Aceite os termos e condições para continuar.');
      return;
    }

    const { status, error } = await registerUser(
      email,
      password,
      username,
      birthDate,
      genderId
    );

    if (status === 201) {
      toast.success('Usuário criado com sucesso. Faça login.');

      emailInputRef.current.value = '';
      passwordInputRef.current.value = '';
      usernameInputRef.current.value = '';
      dayInputRef.current.value = '';
      monthInputRef.current.value = '';
      yearInputRef.current.value = '';
      maleGenderRadioRef.current.checked = false;
      femaleGenderRadioRef.current.checked = false;
      notBinaryGenderRadioRef.current.checked = false;
      otherGenderRadioRef.current.checked = false;
      dontSayGenderRadioRef.current.checked = false;
      notificationCheckboxRef.current.checked = false;
      shareDataCheckboxRef.current.checked = false;
      termsCheckboxRef.current.checked = false;
    } else {
      toast.error(error);
    }
  }

  return (
    <div>
      <header className='bg-white flex items-center justify-center px-4 mt-10'>
        <Link to='/playlists'>
          <img src={spotifyLogo} alt='Logo Spotify' className='w-[8.25rem]' />
        </Link>
      </header>

      <div className='max-w-md px-4 mx-auto mb-10'>
        <h1 className='text-[2rem] font-bold text-center mt-10 mb-8'>
          Inscreva-se grátis e comece a curtir.
        </h1>
        <ul className='w-full flex items-center justify-around mb-6'>
          <li>
            <LinkButton src={googleLogo} alt='Logo Google' />
          </li>
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
        </ul>

        <Divider text='ou' />

        <form className='flex flex-col gap-6' onSubmit={signUp}>
          <InputSpace
            ref={emailInputRef}
            label='Qual o seu e-mail?'
            type='email'
            id='email'
            className='e-mail'
            placeholder='Insira seu e-mail.'
            telefone
          />

          <InputSpace
            ref={passwordInputRef}
            label='Crie uma senha.'
            type='password'
            id='password'
            className='password'
            placeholder='Crie uma senha.'
          />

          <InputSpace
            ref={usernameInputRef}
            label='Como devemos chamar você?'
            type='text'
            id='text'
            className='text'
            placeholder='Insira um nome de perfil.'
            spaner
          />

          <div className='input-space'>
            <label className='form-label font-bold'>
              Qual a sua data de nascimento?
            </label>

            <div className='flex justify-between'>
              <div className='input-space w-1/5'>
                <label htmlFor='day' className='form-label'>
                  Dia
                </label>
                <input
                  ref={dayInputRef}
                  type='number'
                  id='day'
                  name='day'
                  placeholder='DD'
                  className='w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787]'
                />
              </div>

              <div className='input-space w-[45%]'>
                <label htmlFor='month' className='form-label'>
                  Mês
                </label>
                <div className='relative'>
                  <select
                    ref={monthInputRef}
                    name='month'
                    id='month'
                    className='w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] appearance-none required:invalid:text-neutral-500'
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Mês
                    </option>
                    <option value='0'>janeiro</option>
                    <option value='1'>fevereiro</option>
                    <option value='2'>março</option>
                    <option value='3'>abril</option>
                    <option value='4'>maio</option>
                    <option value='5'>junho</option>
                    <option value='6'>julho</option>
                    <option value='7'>agosto</option>
                    <option value='8'>setembro</option>
                    <option value='9'>outubro</option>
                    <option value='10'>novembro</option>
                    <option value='11'>dezembro</option>
                  </select>
                  <ChevronDownIcon className='text-neutral-500 w-6 aspect-square absolute right-4 top-3 pointer-events-none' />
                </div>
              </div>

              <div className='input-space w-1/4'>
                <label htmlFor='year' className='form-label'>
                  Ano
                </label>
                <input
                  ref={yearInputRef}
                  type='number'
                  id='year'
                  name='year'
                  placeholder='AAAA'
                  className='w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787]'
                />
              </div>
            </div>
          </div>

          <div className='input-space'>
            <label htmlFor='gender' className='form-label font-bold'>
              Qual o seu gênero?
            </label>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
              <div className='gender'>
                <input
                  ref={maleGenderRadioRef}
                  type='radio'
                  id='male'
                  name='gender'
                  value='1'
                />
                <label htmlFor='male' className='form-label'>
                  Masculino
                </label>
              </div>
              <div className='gender'>
                <input
                  ref={femaleGenderRadioRef}
                  type='radio'
                  id='female'
                  name='gender'
                  value='2'
                />
                <label htmlFor='female' className='form-label'>
                  Feminino
                </label>
              </div>
              <div className='gender'>
                <input
                  ref={notBinaryGenderRadioRef}
                  type='radio'
                  id='no-binary'
                  name='gender'
                  value='3'
                />
                <label htmlFor='no-binary' className='form-label'>
                  Não Binário
                </label>
              </div>
              <div className='gender'>
                <input
                  ref={otherGenderRadioRef}
                  type='radio'
                  id='other'
                  name='gender'
                  value='4'
                />
                <label htmlFor='other' className='form-label'>
                  Outros
                </label>
              </div>
              <div className='gender'>
                <input
                  ref={dontSayGenderRadioRef}
                  type='radio'
                  id='dont-say'
                  name='gender'
                  value='5'
                />
                <label htmlFor='dont-say' className='form-label'>
                  Prefiro não dizer
                </label>
              </div>
            </div>
          </div>

          <div className='form-group'>
            <div className='checkbox'>
              <input
                ref={notificationCheckboxRef}
                type='checkbox'
                id='marketing'
                name='marketing'
              />
              <label htmlFor='marketing' className='form-label'>
                Não quero receber mensagens de marketing do Spotify
              </label>
            </div>
            <div className='checkbox'>
              <input
                ref={shareDataCheckboxRef}
                type='checkbox'
                id='data'
                name='dados'
              />
              <label htmlFor='data' className='form-label'>
                Compartilhar meus dados cadastrais com os provedores de conteúdo
                do Spotify para fins de marketing.
              </label>
            </div>
            <div className='checkbox'>
              <input
                ref={termsCheckboxRef}
                type='checkbox'
                id='terms'
                name='termos'
              />
              <label htmlFor='terms' className='form-label'>
                Eu concordo com os{' '}
                <Link
                  className='form-link'
                  to='https://www.spotify.com/br-pt/legal/end-user-agreement/'
                >
                  Termos e Condições de Uso do Spotify.
                </Link>
              </label>
            </div>
          </div>

          <div className='text-xs text-center'>
            <p>
              Para saber mais sobre como o Spotify coleta, utiliza, compartilha
              e protege seus dados pessoais, leia a{' '}
              <Link
                className='form-link'
                to='https://www.spotify.com/br-pt/legal/privacy-policy/'
              >
                Política de privacidade do Spotify.
              </Link>
            </p>
          </div>

          <input
            type='submit'
            value='Inscrever-se'
            className='text-lg font-bold text-center bg-spotify-green-light px-12 py-4 border-none rounded-full transition-all hover:bg-spotify-green hover:cursor-pointer hover:scale-105 active:bg-spotify-green-dark'
          />

          <div className='form-group text-center'>
            <p>
              Já tem uma conta?{' '}
              <Link className='form-link' to='/login'>
                Faça login.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
