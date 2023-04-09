import { BannerButton } from "./BannerButton";

export function Banner() {
  return (
    <div className="text-white bg-primary-green w-full">
      <header className="max-w-4.5xl mx-auto px-4 pt-12 pb-6 xl:max-w-6xl xl:pt-[4.5rem] xl:pb-10">
        <h2 className="text-2xl font-black mb-4 xs:mb-8 md:text-[2.5rem]">
          Aproveite 1 mês grátis de Premium
        </h2>

        <p className="text-lg mb-5 xs:mb-12 md:text-2xl md:mb-9">
          Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
        </p>

        <div className="w-full flex flex-col items-stretch gap-x-2 gap-y-2.5 mb-10 md:flex-row md:items-center">
          <BannerButton type="primary" value="Comece Agora" />
          <BannerButton type="secondary" value="Ver Planos" />
        </div>

        <p className="text-xs">
          <span className="underline">Sujeito a Termos e Condições.</span> O mês
          grátis não está disponível para usuários que já experimentaram o
          Premium.
        </p>
      </header>
    </div>
  );
}
