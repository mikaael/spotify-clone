export function Divider({ text, className }) {
  const splitForm = (className) => {
    return <hr className={`w-full border-t border-gray-300 ${className}`} />;
  };

  if (!text) {
    return splitForm(className);
  }

  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      {splitForm()}
      <span className="text-sm font-bold uppercase">{text}</span>
      {splitForm()}
    </div>
  );
}
