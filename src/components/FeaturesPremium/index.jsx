import { Title } from "../Title";
import { FeaturePremium } from "../FeaturePremium";

export function FeaturesPremium() {
  return (
    <div className="text-black bg-white w-full">
      <div className="max-w-6xl mx-auto py-16 flex flex-col items-center justify-around">
        <Title
          text="Por que ser Premium?"
          className="text-2xl font-bold mb-14 md:text-4xl"
        />

        <div className="w-4/5 flex flex-col flex-wrap justify-around gap-5 md:flex-row md:gap-x-0 md:gap-y-5 lg:max-w-4xl xl:max-w-6xl">
          <FeaturePremium
            title="Modo offline."
            description="Ouça música onde estiver."
            img="modoOffline.png"
          />
          <FeaturePremium
            title="Ouça músicas sem anúncios."
            description="Curta música sem anúncios."
            img="semAnuncio.png"
          />
          <FeaturePremium
            title="Ouça na ordem que quiser."
            description="Qualquer música em qualquer ordem."
            img="oucaQuandoQuiser.png"
          />
          <FeaturePremium
            title="Qualidade de som superior."
            description="Sinta o som."
            img="qualidadeDeSom.svg"
          />
        </div>
      </div>
    </div>
  );
}
