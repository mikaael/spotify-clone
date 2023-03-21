import "./index.css";

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

export function CardPremiumPlans({ planeType, price, accountNumber }) {
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

      {plans.map((plan) => {
        return (
          <>
            {plan.type === planeType ? (
              <div class="card__body">
                <ul class="body__offers">
                  <li class="offers__offer">
                    <img
                      src="./assets/icons/check.svg"
                      alt="Ícone de marcado"
                      class="offer__check-icon"
                    />
                    <p class="offer__description">
                      {plan.type === "Individual"
                        ? plan.listenWithoutAds
                        : plan.type === "Duo"
                        ? plan.premiumAccounts
                        : plan.type === "Família"
                        ? plan.premiumAccounts
                        : plan.type === "Universitário"
                        ? plan.premiumAccounts
                        : null}
                    </p>
                  </li>
                  <li class="offers__offer">
                    <img
                      src="./assets/icons/check.svg"
                      alt="Ícone de marcado"
                      class="offer__check-icon"
                    />
                    <p class="offer__description">
                      {plan.type === "Individual"
                        ? plan.listenOffline
                        : plan.type === "Duo"
                        ? plan.listenOfflineOrder
                        : plan.type === "Família"
                        ? plan.blockExplicitContentMusic
                        : plan.type === "Universitário"
                        ? plan.listenWithoutAds
                        : null}
                    </p>
                  </li>
                  <li class="offers__offer">
                    <img
                      src="./assets/icons/check.svg"
                      alt="Ícone de marcado"
                      class="offer__check-icon"
                    />
                    <p class="offer__description">
                      {plan.type === "Individual"
                        ? plan.listenInOrder
                        : plan.type === "Duo"
                        ? plan.makePrepaidPlan
                        : plan.type === "Família"
                        ? plan.listenOfflineOrder
                        : plan.type === "Universitário"
                        ? plan.listenOffline
                        : null}
                    </p>
                  </li>
                  <li class="offers__offer">
                    <img
                      src="./assets/icons/check.svg"
                      alt="Ícone de marcado"
                      class="offer__check-icon"
                      style={
                        plan.type === "Duo"
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    />
                    <p class="offer__description">
                      {plan.type === "Individual"
                        ? plan.makePrepaidPlan
                        : plan.type === "Duo"
                        ? null
                        : plan.type === "Família"
                        ? plan.spotifyKids
                        : plan.type === "Universitário"
                        ? plan.listenInOrder
                        : null}
                    </p>
                  </li>
                  <li class="offers__offer">
                    <img
                      src="./assets/icons/check.svg"
                      alt="Ícone de marcado"
                      class="offer__check-icon"
                      style={
                        plan.type === "Individual" ||
                        plan.type === "Duo" ||
                        plan.type === "Universitário"
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    />
                    <p class="offer__description">
                      {plan.type === "Individual"
                        ? null
                        : plan.type === "Duo"
                        ? null
                        : plan.type === "Família"
                        ? plan.makePrepaidPlan
                        : plan.type === "Universitário"
                        ? null
                        : null}
                    </p>
                  </li>
                </ul>

                <a href="#" class="body__buy-button">
                  COMECE AGORA
                </a>

                {plan.type != "Universitário" ? (
                  <p class="body__terms-and-conditions">
                    <a href="#" class="terms-and-conditions__link">
                      Sujeito a Termos e Condições
                    </a>
                    . O mês grátis não está disponível para usuários que já
                    usaram o Premium.
                  </p>
                ) : (
                  <p class="body__terms-and-conditions university">
                    Oferta disponível somente para estudantes de instituições de
                    ensino superior credenciadas. O mês grátis não está
                    disponível para usuários que já experimentaram o Premium.{" "}
                    <a href="#" class="terms-and-conditions__link">
                      Sujeito a Termos e Condições
                    </a>{" "}
                    da oferta do Spotify de desconto para universitários.
                  </p>
                )}
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}
