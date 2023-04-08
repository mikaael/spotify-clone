import visaCard from "../../../assets/bank-cards/visa.svg";
import masterCard from "../../../assets/bank-cards/mastercard.svg";
import amexCard from "../../../assets/bank-cards/amex.svg";
import eloCard from "../../../assets/bank-cards/elo.svg";
import hiperCard from "../../../assets/bank-cards/hipercard.svg";

import "./index.css";

import { PremiumPlansCard } from "./PremiumPlansCard";

export function PremiumPlans() {
  return (
    <section className="bg-neutral-100">
      <div className="flex flex-col max-w-6xl mx-auto px-4 pt-9 pb-16 gap-12 md:pt-[4.75rem] md:pb-[6.25rem] xl:pb-[7.25rem]">
        <header className="text-center">
          <h2 className="text-3xl font-bold mb-2 xl:text-4xl">
            Escolha seu plano Premium
          </h2>
          <h3 className="mb-2">
            Ouça sem limites no seu celular, alto-falante e em outros
            dispositivos.
          </h3>

          <div className="flex items-center justify-center gap-1.5">
            <ul className="flex items-center gap-2">
              <li>
                <img className="card-image" src={visaCard} alt="Cartão Visa" />
              </li>
              <li>
                <img
                  className="card-image"
                  src={masterCard}
                  alt="Cartão Mastercard"
                />
              </li>
              <li>
                <img
                  className="card-image"
                  src={amexCard}
                  alt="Cartão American Express"
                />
              </li>
              <li>
                <img className="card-image" src={eloCard} alt="Cartão Elo" />
              </li>
              <li>
                <img
                  className="card-image"
                  src={hiperCard}
                  alt="Cartão Hipercard"
                />
              </li>
            </ul>
            <span className="underline">+ outros 11</span>
          </div>
        </header>

        <ul className="flex flex-col items-center gap-4 xl:grid xl:grid-cols-4 xl:items-stretch">
          <PremiumPlansCard
            planType={"Individual"}
            price={"R$ 19,90/mês após o período da oferta"}
            accountNumber={"1 conta"}
          />
          <PremiumPlansCard
            planType={"Duo"}
            price={"R$ 24,90/mês após o período da oferta"}
            accountNumber={"2 contas"}
          />
          <PremiumPlansCard
            planType={"Família"}
            price={"R$ 34,90/mês após o período da oferta"}
            accountNumber={"Até 6 contas"}
          />
          <PremiumPlansCard
            planType={"Universitário"}
            price={"R$ 9,90/mês após o período da oferta"}
            accountNumber={"1 conta"}
          />
        </ul>
      </div>
    </section>
  );
}
