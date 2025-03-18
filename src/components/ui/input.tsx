import { FC } from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  ...props
}) => {
  return (
    <input
      className="border border-neutral-300 rounded-lg py-2 px-4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
      {...props}
    />
  );
};

export default Input;
