import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

export function RememberMeCheckbox({ name, message, checked, ...props }) {
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
        } appearance-none w-4 h-4 aspect-square border border-gray-400 rounded hover:cursor-pointer hover:border-spotify-green hover:checked:bg-spotify-green-dark hover:checked:border-spotify-green-dark active:border-spotify-green checked:border-spotify-green checked:bg-spotify-green`}
      />
      {isChecked && (
        <CheckIcon className='text-white w-3 h-3 aspect-square left-0.5 pointer-events-none absolute' />
      )}

      <label
        htmlFor={name}
        className={`text-sm hover:cursor-pointer ${
          isChecked
            ? 'hover:text-spotify-green-dark active:text-spotify-green-dark'
            : 'hover:text-spotify-green active:text-spotify-green'
        }`}
      >
        {message}
      </label>
    </div>
  );
}
