import { Title } from "../Title";
import { FeatureDescription } from "../FeatureDescription";

export function FeaturePremium({ title, description, img }) {
  return (
    <div className="w-full flex flex-row items-center gap-4 md:text-center md:w-2/5 md:flex-col lg:w-1/4">
      <img
        src={"../../../assets/icons/banner/images/" + img}
        className="w-36"
      />
      <div className="ml-2.5 md:ml-0">
        <Title text={title} className="text-xl font-bold mb-4" />
        <FeatureDescription text={description} />
      </div>
    </div>
  );
}
