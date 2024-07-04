type Button = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ text, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className="bg-violet-500 text-white px-6 py-3 hover:opacity-85 first-letter:uppercase rounded-lg duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
