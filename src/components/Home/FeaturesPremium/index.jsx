import { FeaturePremium } from "./FeaturePremium";

import offlineIcon from "../../../assets/icons/banner/offline-mode.png";
import noAdsIcon from "../../../assets/icons/banner/no-ads.png";
import listenAnytimeIcon from "../../../assets/icons/banner/listen-anytime.png";
import soundQualityIcon from "../../../assets/icons/banner/sound-quality.svg";

export function FeaturesPremium() {
  return (
    <div className="text-black bg-white w-full">
      <div className="max-w-4.5xl flex flex-col items-center justify-center gap-9 mx-auto px-4 py-9 md:py-[4.75rem] md:gap-[4.5rem] xl:max-w-6xl">
        <h2 className="text-[1.75rem] font-black md:text-[2.5rem]">
          Por que ser Premium?
        </h2>

        <div className="self-stretch flex flex-col justify-between gap-x-4 gap-y-12 md:grid md:grid-cols-2 xl:flex xl:flex-row">
          <FeaturePremium
            title="Modo offline."
            description="Ouça música onde estiver."
            src={offlineIcon}
          />
          <FeaturePremium
            title="Ouça músicas sem anúncios."
            description="Curta música sem anúncios."
            src={noAdsIcon}
          />
          <FeaturePremium
            title="Ouça na ordem que quiser."
            description="Qualquer música em qualquer ordem."
            src={listenAnytimeIcon}
          />
          <FeaturePremium
            title="Qualidade de som superior."
            description="Sinta o som."
            src={soundQualityIcon}
          />
        </div>
      </div>
    </div>
  );
}
