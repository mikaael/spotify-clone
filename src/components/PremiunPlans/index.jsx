import React from "react";
import "./index.css";
import { CardPremiumPlans } from "./CardPremiumPlans";

export function PremiunPlans() {
  return (
    <section className="premium-plans">
      <div className="premium-plans__wrapper">
        <header className="wrapper__header">
          <h2 className="header__title">Escolha seu plano Premium</h2>
          <h3 className="header__subtitle">
            Ouça sem limites no seu celular, alto-falante e em outros
            dispositivos.
          </h3>

          <div className="header__payment-methods">
            <ul className="payment-methods__bank-cards">
              <li>
                <img
                  className="bank-cards__card-image"
                  src="./assets/icons/bank-cards/visa.svg"
                  alt="Cartão Visa"
                />
              </li>
              <li>
                <img
                  className="bank-cards__card-image"
                  src="./assets/icons/bank-cards/mastercard.svg"
                  alt="Cartão Mastercard"
                />
              </li>
              <li>
                <img
                  className="bank-cards__card-image"
                  src="./assets/icons/bank-cards/amex.svg"
                  alt="Cartão American Express"
                />
              </li>
              <li>
                <img
                  className="bank-cards__card-image"
                  src="./assets/icons/bank-cards/elo.svg"
                  alt="Cartão Elo"
                />
              </li>
              <li>
                <img
                  className="bank-cards__card-image"
                  src="./assets/icons/bank-cards/hipercard.svg"
                  alt="Cartão Hipercard"
                />
              </li>
            </ul>
            <span className="payment-methods__more-methods-message">
              + outros 11
            </span>
          </div>
        </header>
        <ul className="wrapper__cards">
          <CardPremiumPlans
            planeType={"Individual"}
            price={"R$ 19,90/mês após o período da oferta"}
            accountNumber={"1 conta"}
          />
          <CardPremiumPlans
            planeType={"Duo"}
            price={"R$ 24,90/mês após o período da oferta"}
            accountNumber={"2 contas"}
          />
          <CardPremiumPlans
            planeType={"Família"}
            price={"R$ 34,90/mês após o período da oferta"}
            accountNumber={"Até 6 contas"}
          />
          <CardPremiumPlans
            planeType={"Universitário"}
            price={"R$ 9,90/mês após o período da oferta"}
            accountNumber={"1 conta"}
          />
        </ul>
      </div>
    </section>
  );
}
