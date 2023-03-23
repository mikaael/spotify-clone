import { ButtonBanner } from "../ButtonBanner";

export function Banner() {
  return (
    <div className="text-white bg-primary-green w-full">
      <header className="max-w-6xl mx-auto py-16 flex flex-col items-start justify-start gap-8">
        <div className="text-4xl font-bold">
          Curta o Premium grátis por 2 meses
        </div>
        <p className="text-2xl font-thin">
          Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
        </p>

        <div className="flex items-center gap-2">
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
