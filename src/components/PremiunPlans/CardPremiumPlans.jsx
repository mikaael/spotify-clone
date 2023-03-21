const plans = [
  {
    type: "Individual",
    listenWithoutAds: "Ouça músicas sem anúncios",
    listenOffline: "Ouça em qualquer lugar — até quando estiver offline",
    listenInOrder: "Ouça músicas na ordem que quiser",
    makePrepaidPlan: "Faça um plano pré-pago ou uma assinatura",
  },
  {
    type: "Duo",
    premiumAccounts: "2 contas Premium para pessoas que moram juntas",
    listenOfflineOrder:
      "Música sem anúncios, no modo offline e na ordem que você quiser",
    makePrepaidPlan: "Faça um plano pré-pago ou uma assinatura",
  },
  {
    type: "Família",
    premiumAccounts:
      "6 contas Premium para familiares que moram no mesmo endereço",
    blockExplicitContentMusic: "Bloqueie músicas com conteúdo explícito",
    listenOfflineOrder:
      "Música sem anúncios, no modo offline e na ordem que você quiser",
    spotifyKids:
      "Spotify Kids: um app separado, feito especialmente para crianças",
    makePrepaidPlan: "Faça um plano pré-pago ou uma assinatura",
  },
  {
    type: "Universitário",
    premiumAccounts:
      "Desconto especial para estudantes universitários elegíveis",
    listenWithoutAds: "Ouça músicas sem anúncios",
    listenOffline: "Ouça em qualquer lugar — até quando estiver offline",
    listenInOrder: "Ouça músicas na ordem que quiser",
  },
];

export function CardPremiumPlans({planeType, price, accountNumber}) {
  return (
    <div class="cards__card">
      <header class="card__header">
        <ul class="header__labels">
          <li class="labels__label labels__label--full">
            1 mês grátis ao assinar
          </li>
          <li class="labels__label labels__label--outline">
            Pagamento único disponível
          </li>
        </ul>

        <div class="header__plan-info">
          <h3 class="plan-info__title">{planeType}</h3>
          <p class="plan-info__price">{price}</p>
          <p class="plan-info__account-number">{accountNumber}</p>
        </div>
      </header>

      <hr class="card__divider" />

      <div class="card__body">
        <ul class="body__offers">
          <li class="offers__offer">
            <img
              src="./assets/icons/check.svg"
              alt="Ícone de marcado"
              class="offer__check-icon"
            />
            <p class="offer__description">
              6 contas Premium para familiares que moram no mesmo endereço
            </p>
          </li>
          <li class="offers__offer">
            <img
              src="./assets/icons/check.svg"
              alt="Ícone de marcado"
              class="offer__check-icon"
            />
            <p class="offer__description">
              Bloqueie músicas com conteúdo explícito
            </p>
          </li>
          <li class="offers__offer">
            <img
              src="./assets/icons/check.svg"
              alt="Ícone de marcado"
              class="offer__check-icon"
            />
            <p class="offer__description">
              Música sem anúncios, no modo offline e na ordem que você quiser
            </p>
          </li>
          <li class="offers__offer">
            <img
              src="./assets/icons/check.svg"
              alt="Ícone de marcado"
              class="offer__check-icon"
            />
            <p class="offer__description">
              Spotify Kids: um app separado, feito especialmente para crianças
            </p>
          </li>
          <li class="offers__offer">
            <img
              src="./assets/icons/check.svg"
              alt="Ícone de marcado"
              class="offer__check-icon"
            />
            <p class="offer__description">
              Faça um plano pré-pago ou uma assinatura
            </p>
          </li>
        </ul>

        <a href="#" class="body__buy-button">
          COMECE AGORA
        </a>

        <p class="body__terms-and-conditions">
          <a href="#" class="terms-and-conditions__link">
            Sujeito a Termos e Condições
          </a>
          . O mês grátis não está disponível para usuários que já usaram o
          Premium.
        </p>
      </div>
    </div>
  );
}
