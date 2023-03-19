import { Link } from 'react-router-dom';

function LinkButton({ href = '', backgroundColorName, src, alt }) {
  return (
    <Link to={href}>
      <div
        className={`bg-${
          backgroundColorName ?? 'white'
        } flex items-center justify-center p-2 border border-gray-400 rounded-full hover:border-${
          backgroundColorName ?? 'black'
        } hover:scale-105`}
      >
        <img src={src} alt={alt} className='h-8 aspect-square' />
      </div>
    </Link>
  );
}

export default LinkButton;
