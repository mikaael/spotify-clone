import { ButtonBanner } from "../ButtonBanner";

export function Banner() {
  return (
    <div className="text-white bg-primary-green w-full">
      <header className="max-w-4xl mx-auto px-5 pt-3/50 pb-1/25 flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8 xl:max-w-6xl xl:px-0 xl:py-16">
        <div className="text-2xl font-bold lg:text-4xl">
          Curta o Premium grátis por 2 meses
        </div>
        <p className="text-lg font-thin lg:text-2xl">
          Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
        </p>

        <div className="w-full flex flex-col items-stretch gap-x-2 gap-y-2.5 md:flex-row md:items-center">
          <ButtonBanner type="primary" value="Comece Agora" />
          <ButtonBanner type="secondary" value="Ver Planos" />
        </div>

        <div className="text-xs">
          <span className="underline">Sujeito a Termos e Condições.</span>{" "}
          Oferta de 2 meses grátis não disponível para quem já usou o Premium.
        </div>
      </header>
    </div>
  );
}
