import { forwardRef } from "react";

export const FormInput = forwardRef(({ label, name, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-bold">
          {label}
        </label>
      )}

      <input
        ref={ref}
        name={name}
        id={name}
        className="px-3.5 py-3 border border-gray-400 rounded placeholder:text-gray-500"
        {...props}
      />
    </div>
  );
});
