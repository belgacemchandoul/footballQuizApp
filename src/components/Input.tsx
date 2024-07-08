import React from "react";

type InputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  name?: string;
  placeholder: string;
  type: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { onChange, value, name, placeholder, type } = props;
  return (
    <input
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      required
      ref={ref}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:indigo-800 w-28 md:w-52"
    />
  );
});

Input.displayName = "Input";

export default Input;
