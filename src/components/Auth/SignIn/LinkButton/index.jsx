import { Link } from 'react-router-dom';

function LinkButton({ href, backgroundColorName, src, alt }) {
  const colorVariants = {
    facebook: 'bg-facebook hover:border-facebook',
    black: 'bg-black/90 hover:border-black/90',
  };

  return (
    <Link to={href}>
      <div
        className={`min-h-12.5 aspect-square flex items-center justify-center p-2 border border-gray-400 rounded-full ${
          backgroundColorName
            ? colorVariants[backgroundColorName]
            : 'bg-white hover:border-black'
        } hover:scale-105 transition-all`}
      >
        <img src={src} alt={alt} className='h-8 aspect-square' />
      </div>
    </Link>
  );
}

export default LinkButton;
