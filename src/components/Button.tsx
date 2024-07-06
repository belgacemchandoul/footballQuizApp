type Button = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: string;
};
const Button = ({ text, onClick, value }: Button) => {
  return (
    <button
      value={value}
      onClick={onClick}
      className="bg-violet-500 text-white px-4 py-2 hover:opacity-85 first-letter:uppercase rounded-lg duration-300 font-light md:font-medium md:px-6 md:py-3"
    >
      {text}
    </button>
  );
};

export default Button;
