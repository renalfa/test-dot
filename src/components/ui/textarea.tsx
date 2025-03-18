import { FC } from "react";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  ...props
}) => {
  return (
    <textarea
      className="border border-neutral-300 rounded-lg py-2 px-4"
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

export default TextArea;
