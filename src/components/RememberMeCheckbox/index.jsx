import { useState } from 'react';

import checkmarkIcon from '../../assets/checkmark.svg';

function RememberMeCheckbox({ name, message, checked, ...props }) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  return (
    <div className='flex items-center justify-start gap-3 relative'>
      <input
        type='checkbox'
        name={name}
        id={name}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...props}
        className={`${
          isChecked ? 'checked' : ''
        } appearance-none w-4 h-4 aspect-square border border-gray-400 rounded hover:cursor-pointer hover:border-spotify-green active:border-spotify-green checked:border-spotify-green checked:bg-spotify-green`}
      />
      {isChecked && (
        <img
          src={checkmarkIcon}
          alt='Ícone de marca de seleção'
          className='w-3 h-3 aspect-square left-0.5 pointer-events-none absolute'
        />
      )}

      <label htmlFor={name} className='text-sm hover:cursor-pointer'>
        {message}
      </label>
    </div>
  );
}

export default RememberMeCheckbox;
