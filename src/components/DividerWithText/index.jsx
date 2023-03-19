function DividerWithText({ text }) {
  const splitForm = () => {
    return <hr className='w-full border-t border-gray-300' />;
  };

  // if (!text) {
  //   return splitForm();
  // }

  return (
    <div className='flex items-center justify-between gap-4'>
      {splitForm()}
      <span className='text-sm font-bold uppercase'>{text}</span>
      {splitForm()}
    </div>
  );
}

export default DividerWithText;
