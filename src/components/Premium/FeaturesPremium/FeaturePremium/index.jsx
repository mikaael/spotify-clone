export function FeaturePremium({ title, description, src }) {
  return (
    <div className='flex items-center gap-5 xl:text-center xl:flex-col xl:gap-10'>
      <img src={src} className='min-w-[6rem] w-24 aspect-square xl:w-36' />
      <div>
        <h3 className='text-xl font-bold mb-2.5'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
