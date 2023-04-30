import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';

import './index.css';

const plans = [
  {
    type: 'Individual',
    listenWithoutAds: 'Ouça músicas sem anúncios',
    listenOffline: 'Ouça em qualquer lugar - até quando estiver offline',
    listenInOrder: 'Ouça músicas na ordem que quiser',
    makePrepaidPlan: 'Faça um plano pré-pago ou uma assinatura',
  },
  {
    type: 'Duo',
    premiumAccounts: '2 contas Premium para pessoas que moram juntas',
    listenOfflineOrder:
      'Música sem anúncios, no modo offline e na ordem que você quiser',
    makePrepaidPlan: 'Faça um plano pré-pago ou uma assinatura',
  },
  {
    type: 'Família',
    premiumAccounts:
      '6 contas Premium para familiares que moram no mesmo endereço',
    blockExplicitContentMusic: 'Bloqueie músicas com conteúdo explícito',
    listenOfflineOrder:
      'Música sem anúncios, no modo offline e na ordem que você quiser',
    spotifyKids:
      'Spotify Kids: um app separado, feito especialmente para crianças',
    makePrepaidPlan: 'Faça um plano pré-pago ou uma assinatura',
  },
  {
    type: 'Universitário',
    premiumAccounts:
      'Desconto especial para estudantes universitários elegíveis',
    listenWithoutAds: 'Ouça músicas sem anúncios',
    listenOffline: 'Ouça em qualquer lugar - até quando estiver offline',
    listenInOrder: 'Ouça músicas na ordem que quiser',
  },
];

export function PremiumPlansCard({ planType, price, accountNumber }) {
  return (
    <div className='flex flex-col bg-white max-w-md p-5 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.3)]'>
      <header className='flex flex-col gap-2 xl:h-48'>
        <ul className='text-sm font-bold flex flex-wrap items-center gap-x-1 gap-y-2'>
          <li className='label text-white bg-label-blue'>
            1 mês grátis ao assinar
          </li>
          <li className='label text-label-blue bg-white'>
            Pagamento único disponível
          </li>
        </ul>
        <div>
          <h3 className='text-2xl font-bold mb-1.5'>{planType}</h3>
          <p className='mb-1'>{price}</p>
          <p>{accountNumber}</p>
        </div>
      </header>

      <hr className='border-neutral-500 mt-5 mb-8' />

      {plans.map((plan, index) => {
        return plan.type === planType ? (
          <div className='flex flex-col xl:grow' key={index}>
            <ul className='flex flex-col gap-3.5 mb-6'>
              <li className='offer'>
                <CheckIcon className='check' />
                <p>
                  {plan.type === 'Individual'
                    ? plan.listenWithoutAds
                    : plan.type === 'Duo' ||
                      plan.type === 'Família' ||
                      plan.type === 'Universitário'
                    ? plan.premiumAccounts
                    : null}
                </p>
              </li>
              <li className='offer'>
                <CheckIcon className='check' />
                <p>
                  {plan.type === 'Individual'
                    ? plan.listenOffline
                    : plan.type === 'Duo'
                    ? plan.listenOfflineOrder
                    : plan.type === 'Família'
                    ? plan.blockExplicitContentMusic
                    : plan.type === 'Universitário'
                    ? plan.listenWithoutAds
                    : null}
                </p>
              </li>
              <li className='offer'>
                <CheckIcon className='check' />
                <p>
                  {plan.type === 'Individual'
                    ? plan.listenInOrder
                    : plan.type === 'Duo'
                    ? plan.makePrepaidPlan
                    : plan.type === 'Família'
                    ? plan.listenOfflineOrder
                    : plan.type === 'Universitário'
                    ? plan.listenOffline
                    : null}
                </p>
              </li>
              <li className='offer'>
                <CheckIcon
                  className='check'
                  style={
                    plan.type === 'Duo'
                      ? { display: 'none' }
                      : { display: 'block' }
                  }
                />
                <p>
                  {plan.type === 'Individual'
                    ? plan.makePrepaidPlan
                    : plan.type === 'Família'
                    ? plan.spotifyKids
                    : plan.type === 'Universitário'
                    ? plan.listenInOrder
                    : null}
                </p>
              </li>
              <li className='offer'>
                <CheckIcon
                  className='check'
                  style={
                    plan.type === 'Individual' ||
                    plan.type === 'Duo' ||
                    plan.type === 'Universitário'
                      ? { display: 'none' }
                      : { display: 'block' }
                  }
                />
                <p>{plan.type === 'Família' ? plan.makePrepaidPlan : null}</p>
              </li>
            </ul>

            <Link
              to=''
              className='text-white text-sm font-bold text-center uppercase bg-neutral-900 mb-4 py-4 rounded-full block transition-transform hover:scale-105 xl:mt-auto'
            >
              Comece Agora
            </Link>

            {plan.type != 'Universitário' ? (
              <p className='terms text-xs'>
                <Link to='' className='underline'>
                  Sujeito a Termos e Condições
                </Link>
                . O mês grátis não está disponível para usuários que já usaram o
                Premium.
              </p>
            ) : (
              <p className='terms text-xs'>
                Oferta disponível somente para estudantes de instituições de
                ensino superior credenciadas. O mês grátis não está disponível
                para usuários que já experimentaram o Premium.{' '}
                <Link to='' className='underline'>
                  Sujeito a Termos e Condições
                </Link>{' '}
                da oferta do Spotify de desconto para universitários.
              </p>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
}
