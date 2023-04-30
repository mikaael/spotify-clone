import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

export const InputSpace = forwardRef(
  ({ label, id, className, telefone, spaner, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-2'>
        <label htmlFor={id} className='font-bold'>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] ${className}`}
          {...props}
        />
        {telefone && (
          <Link className='form-link text-sm inline-block mt-1' to=''>
            Usar número de telefone.
          </Link>
        )}

        {spaner && <p className='text-sm'>Isso aparece no seu perfil.</p>}
      </div>
    );
  }
);
