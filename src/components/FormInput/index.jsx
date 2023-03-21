function FormInput({ label, name, type, placeholder }) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label htmlFor={name} className='text-sm font-bold'>
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='px-3.5 py-3 border border-gray-400 rounded placeholder:text-gray-500'
      />
    </div>
  );
}

export default FormInput;
